import FolllowCard from "./components/FolllowCard";
import FollowTriangles from "./components/FollowTriangles";

function App() {
  const ary = ["ajshd", "asjhd", "asjhd", "asdasd", "asdasdasdas"];
  return (
    <div className="app">
      {/* <FolllowCard /> */}
      <FollowTriangles />
      <div className="block-section">
        <div className="block">
          {ary.map((name, index) => (
            <h1 className="name, engrave" key={index}>
              {name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
