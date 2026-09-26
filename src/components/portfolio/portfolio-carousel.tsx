"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { PortfolioVideoCard } from "@/components/portfolio/portfolio-video-card";
import type { PortfolioItem } from "@/data/portfolio";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const DESKTOP_QUERY = "(min-width: 768px)";
const SNAP_DURATION_MS = 720;
const REDUCED_SNAP_DURATION_MS = 90;

type CarouselGesture = {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastTime: number;
  velocityX: number;
  axis: "pending" | "horizontal";
  dragStartX: number;
  dragStartScrollLeft: number;
};

type ScrollStyles = {
  scrollSnapType: string;
  scrollBehavior: string;
};

type PortfolioCarouselProps = Readonly<{
  items: readonly PortfolioItem[];
}>;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getSnapPoints(element: HTMLDivElement) {
  const children = Array.from(element.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
  const paddingLeft = Number.parseFloat(getComputedStyle(element).paddingLeft) || 0;
  const snapportLeft = element.getBoundingClientRect().left + element.clientLeft + paddingLeft;

  return children.map((child) =>
    clamp(
      element.scrollLeft + child.getBoundingClientRect().left - snapportLeft,
      0,
      maxScroll,
    ),
  );
}

function findNearestIndex(points: number[], position: number) {
  return points.reduce(
    (nearest, point, index) =>
      Math.abs(point - position) < Math.abs(points[nearest] - position) ? index : nearest,
    0,
  );
}

function easeOutCubicBezier(progress: number) {
  const x1 = 0.22;
  const x2 = 0.36;
  let low = 0;
  let high = 1;

  for (let iteration = 0; iteration < 14; iteration += 1) {
    const parameter = (low + high) / 2;
    const inverse = 1 - parameter;
    const x = 3 * inverse * inverse * parameter * x1
      + 3 * inverse * parameter * parameter * x2
      + parameter * parameter * parameter;

    if (x < progress) low = parameter;
    else high = parameter;
  }

  const parameter = (low + high) / 2;
  return 1 - (1 - parameter) ** 3;
}

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<CarouselGesture | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const originalScrollStylesRef = useRef<ScrollStyles | null>(null);
  const suppressClickUntilRef = useRef(0);

  const restoreScrollStyles = useCallback((element: HTMLDivElement) => {
    const originalStyles = originalScrollStylesRef.current;
    if (!originalStyles) return;

    element.style.scrollSnapType = originalStyles.scrollSnapType;
    element.style.scrollBehavior = originalStyles.scrollBehavior;
    originalScrollStylesRef.current = null;
  }, []);

  const cancelSettle = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const settleAt = useCallback((element: HTMLDivElement, target: number) => {
    const points = getSnapPoints(element);
    const finalTarget = clamp(target, 0, Math.max(0, element.scrollWidth - element.clientWidth));
    const start = element.scrollLeft;
    const distance = finalTarget - start;
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const duration = reducedMotion ? REDUCED_SNAP_DURATION_MS : SNAP_DURATION_MS;

    element.dataset.dragging = "false";

    if (Math.abs(distance) < 1 || points.length < 2) {
      element.scrollLeft = finalTarget;
      restoreScrollStyles(element);
      animationFrameRef.current = null;
      return;
    }

    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = reducedMotion ? progress : easeOutCubicBezier(progress);
      element.scrollLeft = start + distance * easedProgress;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        element.scrollLeft = finalTarget;
        animationFrameRef.current = null;
        restoreScrollStyles(element);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [restoreScrollStyles]);

  const startHorizontalDrag = useCallback((
    element: HTMLDivElement,
    gesture: CarouselGesture,
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    cancelSettle();

    if (!originalScrollStylesRef.current) {
      originalScrollStylesRef.current = {
        scrollSnapType: element.style.scrollSnapType,
        scrollBehavior: element.style.scrollBehavior,
      };
    }

    element.style.scrollSnapType = "none";
    element.style.scrollBehavior = "auto";
    element.dataset.dragging = "true";

    const horizontalGesture: CarouselGesture = {
      ...gesture,
      axis: "horizontal",
      dragStartX: event.clientX,
      dragStartScrollLeft: element.scrollLeft,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocityX: 0,
    };
    gestureRef.current = horizontalGesture;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // The browser can release a pointer before capture on an interrupted gesture.
    }
  }, [cancelSettle]);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) return;
    if (window.matchMedia(DESKTOP_QUERY).matches) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const target = event.target;
    if (
      target instanceof Element
      && target.closest("button, a, iframe, input, textarea, select, [role='button']")
    ) {
      return;
    }

    const now = performance.now();
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastTime: now,
      velocityX: 0,
      axis: "pending",
      dragStartX: event.clientX,
      dragStartScrollLeft: event.currentTarget.scrollLeft,
    };
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    if (gesture.axis === "pending") {
      const deltaX = event.clientX - gesture.startX;
      const deltaY = event.clientY - gesture.startY;
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 8) return;

      if (Math.abs(deltaY) >= Math.abs(deltaX)) {
        gestureRef.current = null;
        return;
      }

      startHorizontalDrag(element, gesture, event);
    }

    const activeGesture = gestureRef.current;
    if (!activeGesture || activeGesture.axis !== "horizontal") return;

    const now = performance.now();
    const elapsed = Math.max(1, now - activeGesture.lastTime);
    const instantVelocity = (event.clientX - activeGesture.lastX) / elapsed;
    activeGesture.velocityX = activeGesture.velocityX * 0.35 + instantVelocity * 0.65;
    activeGesture.lastX = event.clientX;
    activeGesture.lastTime = now;

    element.scrollLeft = activeGesture.dragStartScrollLeft - (event.clientX - activeGesture.dragStartX);
    event.preventDefault();
  }, [startHorizontalDrag]);

  const finishGesture = useCallback((event: ReactPointerEvent<HTMLDivElement>, canceled = false) => {
    const element = event.currentTarget;
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    gestureRef.current = null;
    if (gesture.axis !== "horizontal") return;

    element.dataset.dragging = "false";
    suppressClickUntilRef.current = performance.now() + 250;

    const points = getSnapPoints(element);
    if (points.length < 2) {
      restoreScrollStyles(element);
      return;
    }

    const startIndex = findNearestIndex(points, gesture.dragStartScrollLeft);
    const fingerDelta = event.clientX - gesture.dragStartX;
    const swipeDirection = Math.sign(-fingerDelta);
    const distance = Math.abs(element.scrollLeft - gesture.dragStartScrollLeft);
    const velocity = canceled ? 0 : gesture.velocityX;
    const currentPoint = points[startIndex] ?? 0;
    const cardWidth = element.children.item(startIndex)?.getBoundingClientRect().width ?? 0;
    const distanceThreshold = Math.max(30, cardWidth * 0.17);
    const hasSwipeIntent = distance >= distanceThreshold || Math.abs(velocity) >= 0.48;

    if (!hasSwipeIntent) {
      settleAt(element, currentPoint);
      return;
    }

    const projectedScroll = element.scrollLeft - velocity * 170;
    let targetIndex = findNearestIndex(points, projectedScroll);

    if (targetIndex === startIndex && swipeDirection !== 0) {
      targetIndex = clamp(startIndex + swipeDirection, 0, points.length - 1);
    }

    settleAt(element, points[targetIndex] ?? currentPoint);
  }, [restoreScrollStyles, settleAt]);

  const onClickCapture = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (performance.now() < suppressClickUntilRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  useEffect(() => () => {
    cancelSettle();
    const element = carouselRef.current;
    if (element) {
      delete element.dataset.dragging;
      restoreScrollStyles(element);
    }
  }, [cancelSettle, restoreScrollStyles]);

  return (
    <div
      ref={carouselRef}
      aria-label="Portfolio videos"
      role="region"
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishGesture}
      onPointerCancel={(event) => finishGesture(event, true)}
      onClickCapture={onClickCapture}
      className="portfolio-carousel -mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-5 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:-mx-8 sm:w-[calc(100%+4rem)] sm:gap-5 sm:px-8 md:mx-0 md:grid md:w-full md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6"
    >
      {items.map((item, index) => (
        <PortfolioVideoCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
