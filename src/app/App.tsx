import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import { startTransition } from "react";
import "./App.css";
import ChildComp from "../components/ChildComp";
import { fakerDE as faker } from "@faker-js/faker";
import InfiniteScroll from "../components/LoadingLargeList/InfinteScroll";
import Debouncing from "../components/Debouncing/Debouncing";

// const data = Array.from({ length: 1000 }, (_, i) => ({
//   id: i,
//   title: faker.lorem.words(5),
//   body: faker.lorem.sentence(4),
// }));
// console.log(data);

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => setName("Username"), 900);
  }, []);

  return (
    <div>
      <h1>Debouncing</h1>
      <Debouncing />
    </div>
  );
}

export default App;
