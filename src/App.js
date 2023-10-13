import FolllowCard from "./components/FolllowCard";
import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";
// import FollowTriangles from "./components/FollowTriangles";

function App() {
  const ary = [
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    ,
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    ,
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    ,
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
    "ajshd",
    "asjhd",
    "asjhd",
    "asdasd",
    "asdasdasdas",
  ];
  return (
    <div className="app ">
      {/* <FollowTriangles /> */}
      <div className="block-section">
        <div className="stars-header">
          <Spline scene="https://prod.spline.design/f44SjyiRUsQI4J5t/scene.splinecode" />
          <div className="header">
            <h1>المتحف</h1>
            <h1>النصب</h1>
            <div className="qaos-pic"></div>
            <h1>البحث</h1>
          </div>
          <Spline scene="https://prod.spline.design/f44SjyiRUsQI4J5t/scene.splinecode" />
        </div>
        <div className="block ">
          <FolllowCard />

          {ary.map((name, index) => (
            <h1 className="name engraved" key={index}>
              {name}
            </h1>
          ))}
        </div>
        <div className="tshreen-block">
          <Spline scene="https://prod.spline.design/f44SjyiRUsQI4J5t/scene.splinecode" />
          <div className="tshreen">
            <Spline scene="https://prod.spline.design/9le7cn69F5snzC12/scene.splinecode" />
          </div>
          <Spline scene="https://prod.spline.design/f44SjyiRUsQI4J5t/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default App;
