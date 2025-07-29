import { useEffect } from "react";

export function NoThrottle() {
  useEffect(() => {
    const handlescroll = () => {
      console.log("Scroll event triggered", window.scrollY);
    };
    window.addEventListener("scroll", handlescroll);
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

export default NoThrottle;


const throttle = (func: () => void, limit: number) => {
  let lastCall = 0;
  return () => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
};
