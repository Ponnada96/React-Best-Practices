import { useEffect } from "react";

export function Throttle() {
  useEffect(() => {
    const handlescroll = () => {
      console.log("Scroll event triggered", window.scrollY);
    };
    const throttledScroll= throttleFn(handlescroll, 500);

    window.addEventListener("scroll",throttledScroll );
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  console.log("component rendered");
  return (
    <div>
      <h1>No Throttle</h1>
      <div style={{ height: "200vh" }}>
        Scroll down to see the effect of no throttling.
      </div>
    </div>
  );
}

export default Throttle;


 const throttleFn = <T extends (...args: any[]) => void>(
   func: T,
   limit: number
 ) => {
   let lastCall = 0;
   return (...args: Parameters<T>) => {
     const now = Date.now();
    //  console.log("nowss", now);
    //  console.log("lastCall", lastCall);
     console.log("check", now - lastCall);
     if (now - lastCall >= limit) {
       lastCall = now;
       func(...args);
     }
   };
 };
