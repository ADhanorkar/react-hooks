import "./App.css";
import FocusInput from "./components/UseRef/FocusInput";
import Timer from "./components/UseRef/Timer";
import CounterOne from "./components/customHooks/CounterOne";
import CounterTwo from "./components/customHooks/CounterTwo";
import DocTitleOne from "./components/customHooks/DocTitleOne";
import DocTitleTwo from "./components/customHooks/DocTitleTwo";
import UserForm from "./components/customHooks/UserForm";
import UsingReducerAndContext from "./components/dataFetching/UsingReducerAndContext";
import UsingState from "./components/dataFetching/UsingState";
import MemoAndUseCallback from "./components/performanceHooks/MemoAndUseCallback";
import UseMemo from "./components/performanceHooks/UseMemo";
import ExContext from "./components/react-context/ExContext";
import ExReducer from "./components/react-reducer/ExReducer";
import ReducerAndContext from "./components/reducerAndContext/ReducerAndContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ExContext /> */}
        {/* <ExReducer /> */}
        {/* <ReducerAndContext /> */}
        {/* <UsingState /> */}
        {/* <UsingReducerAndContext /> */}
        {/* <MemoAndUseCallback /> */}
        {/* <UseMemo /> */}
        {/* <FocusInput /> */}
        {/* <Timer /> */}
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <CounterOne />
        <CounterTwo /> */}
        <UserForm />
      </header>
    </div>
  );
}

export default App;
