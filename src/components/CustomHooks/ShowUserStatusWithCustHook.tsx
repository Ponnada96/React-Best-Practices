import React from "react";
import useOnlineStatus from "./useOnlineStatus";

export default function ShowUserStatusWithCustHook() {
  const { isOnline } = useOnlineStatus();
  return <button>{isOnline ? "Submit" : "processing"}</button>;
}
