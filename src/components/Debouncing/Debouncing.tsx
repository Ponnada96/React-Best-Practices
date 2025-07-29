import React, { useEffect, useState } from "react";

function Debouncing() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const callApiWithQuery = () => {
       console.log(`Called with ${query}`);
    };
    const timer = setTimeout(callApiWithQuery, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const queryHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value.target.value);
  };
  return (
    <div>
      <input value={query} onChange={queryHandler} />
    </div>
  );
}

export default Debouncing;
