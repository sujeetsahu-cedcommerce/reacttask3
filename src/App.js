import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Reactapp from "./Reactapp";
import CompHeader from "./CompHeader";
import Componentleft from "./Componentleft";
import Componentright from "./Componentright";
import Subcomponent3 from "./Subcomponent3";
import Subcomponent1 from "./Subcomponent1";
import Subcomponent2 from "./Subcomponent2";
function App() {
  return (
    <div className="main_container">
      <Reactapp />
      <div className="virtual1">
        <div className="CompHeader">
          <CompHeader />
        </div>
        <div className="virtual2">
          <div className="compLeft">
            <Componentleft />
            <div className="virtual3">
              <div className="Subcomponent1">
                <Subcomponent1 />
              </div>
              <div className="Subcomponent2">
                <Subcomponent2/>
              </div>
            </div>
          </div>
          <div className="compRight">
            <Componentright />
            <div className="Subcomponent3">
              <Subcomponent3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
