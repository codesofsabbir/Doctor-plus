"use client";
import React, { useEffect, useState, useRef } from "react";

function Counter({ target, prefix = "", className = "" }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const observerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const end = parseFloat(target); // Convert target to a number
          const wholePart = Math.floor(end); // Extract integer part
          const duration = 500; // Fast animation
          const stepTime = Math.max(10, Math.floor(duration / wholePart));

          const timer = setInterval(() => {
            start += 1;
            if (start >= wholePart) {
              clearInterval(timer);
              const finalCount = end.toFixed(1);
              // If the final count has no decimal part, remove the `.0`
              setCount(
                finalCount % 1 === 0 ? finalCount.slice(0, -2) : finalCount
              );
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [target]);

  return (
    <h2 ref={counterRef} className={className}>
      {count}
      {prefix}
    </h2>
  );
}

export default Counter;
