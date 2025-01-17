import { useEffect } from "react";
import { useIntersectionObserver } from "./use-intersection-observer";

export const Example = () => {
  const { createObserverRef, disconnectObserver } = useIntersectionObserver();

  useEffect(() => {
    // ... stuff
    return () => disconnectObserver();
  }, []);

  const observerCallback = () => console.log("Hello world was viewed");
  const observerOptions = {
    rootMargin: "20px",
  };

  return (
    <section ref={createObserverRef(observerCallback, observerOptions)}>
      <span>Hello world!</span>
    </section>
  );
};

