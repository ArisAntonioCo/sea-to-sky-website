"use client";

import { Children, type CSSProperties, type ReactNode, useEffect, useId, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type PathItemStyle = CSSProperties & {
  "--path-delay": string;
  "--path-duration": string;
};

type MarqueeAlongSvgPathProps = {
  baseVelocity?: number;
  children: ReactNode;
  className?: string;
  height?: number;
  path: string;
  rotateItems?: boolean;
  showPath?: boolean;
  slowdownOnHover?: boolean;
  viewBox?: string;
  width?: number;
};

export function MarqueeAlongSvgPath({
  baseVelocity = 3,
  children,
  className,
  height = 720,
  path,
  rotateItems = false,
  showPath = false,
  slowdownOnHover = true,
  viewBox = "0 0 1200 720",
  width = 1200,
}: MarqueeAlongSvgPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pathId = useId().replaceAll(":", "");
  const items = useMemo(() => Children.toArray(children), [children]);
  const duration = 100 / Math.max(Math.abs(baseVelocity), 0.1);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;

    if (!container || !stage) return;

    const updateScale = () => {
      const scale = Math.min(container.clientWidth / width, container.clientHeight / height);
      const offsetX = (container.clientWidth - width * scale) / 2;
      const offsetY = (container.clientHeight - height * scale) / 2;

      stage.style.width = `${width}px`;
      stage.style.height = `${height}px`;
      stage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${scale})`;
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, [height, width]);

  const setPlaybackRate = (rate: number) => {
    containerRef.current
      ?.querySelectorAll<HTMLElement>(".path-marquee-item")
      .forEach((item) => item.getAnimations()[0]?.updatePlaybackRate(rate));
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => slowdownOnHover && setPlaybackRate(0.24)}
      onMouseLeave={() => slowdownOnHover && setPlaybackRate(1)}
    >
      <div ref={stageRef} className="absolute left-0 top-0 origin-top-left">
        <svg aria-hidden="true" className="absolute inset-0 size-full" viewBox={viewBox}>
          <path id={pathId} d={path} fill="none" stroke={showPath ? "currentColor" : "none"} />
        </svg>
        {items.map((child, index) => {
          const progress = (index * 100) / items.length;
          const style: PathItemStyle = {
            "--path-delay": `${-(duration * index) / items.length}s`,
            "--path-duration": `${duration}s`,
            offsetAnchor: "center",
            offsetDistance: `${progress}%`,
            offsetPath: `path('${path}')`,
            offsetRotate: rotateItems ? "auto" : "0deg",
            zIndex: (index % 5) + 1,
          };

          return (
            <div
              key={index}
              aria-hidden="true"
              className={cn(
                "path-marquee-item absolute left-0 top-0",
                rotateItems && "path-marquee-item-rotate",
              )}
              style={style}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
