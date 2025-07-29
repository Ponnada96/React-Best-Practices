import {
  useEffect,
  useState,
} from "react";
import "./App.css";
import Debouncing from "../components/Debouncing/Debouncing";
import Throttle from "../components/Throttling/Throttle";

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
      <br />
      <div>
        <Throttle />
      </div>
    </div>
  );
}

export default App;
