import { ClassTrafficLight } from "./ClassTL";
import { FunctionalTrafficLight } from "./FunctionalTL";

function App() {
  return (
    <>
      <main>
        <h1>My Traffic Light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight />
          </div>
          <div className="right">
            <ClassTrafficLight />
          </div>
        </div>
        <h2>Simply click the &#34;NEXT STATE&#34; buttons and watch the magic happen!</h2>
      </main>
    </>
  );
}

export default App;