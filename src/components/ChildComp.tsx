import React, { memo, useMemo } from "react";

const ChildComp = memo(
  ({ childTex, handler }: { childTex: string; handler: () => void }) => {
    return (
      <div>
        ChildComp
        <h5>{childTex}</h5>
        <button onClick={() => handler()}>Click</button>
      </div>
    );
  }
);
export default ChildComp;
