import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const setUserOnlineHanlder = () => {
      console.log("executed online");
      setIsOnline(true);
    };

    const setUserOfflineHanlder = () => {
      console.log("executed offline");
      setIsOnline(false);
    };

    window.addEventListener("online", setUserOnlineHanlder);
    window.addEventListener("offline", setUserOfflineHanlder);

    return () => {
      window.removeEventListener("online", setUserOnlineHanlder);
      window.removeEventListener("offline", setUserOfflineHanlder);
    };
  }, []);
  return { isOnline };
};
export default useOnlineStatus;
