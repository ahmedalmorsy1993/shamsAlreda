import { useEffect, useState } from "react";

export const useInterSection = () => {
  const [target, setTarget] = useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // Set to null for the viewport
      rootMargin: "0px",
      threshold: .7,

    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTarget(entry.target.getAttribute("data-scroll"));
            setIsIntersecting(entry.isIntersecting)
          }
        });
      },
      observerOptions
    );

    // Query all elements with the data-scroll attribute
    const targetElements = document.querySelectorAll("[data-scroll]");

    targetElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer on component unmount
      targetElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const onScrollTo = (targetTo: string) => {
    if (targetTo) {
      const targetElement = document.querySelector(`[data-scroll="${targetTo}"]`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    }
  };

  return {
    target,
    isIntersecting,
    onScrollTo,
  };
};
