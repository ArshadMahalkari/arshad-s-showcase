import { useEffect, useRef, useState } from "react";

const GlowCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    let raf: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.x}px`;
        ringRef.current.style.top = `${pos.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll("a, button, [role='button'], input, textarea");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "hsl(185 100% 50%)",
          boxShadow: "0 0 6px hsl(185 100% 50%)",
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-300 hidden md:block"
        style={{
          width: isHovering ? "50px" : "30px",
          height: isHovering ? "50px" : "30px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,245,255,${isHovering ? 0.15 : 0.08}) 0%, transparent 70%)`,
          border: `1px solid rgba(0, 245, 255, ${isHovering ? 0.4 : 0.15})`,
        }}
      />
    </>
  );
};

export default GlowCursor;
