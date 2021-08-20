import { Sidenav,Main, Aside } from "./Components";
const App=()=> {
  return (
    <div className="App grid grid-cols-12 gap-1">
     
          <Sidenav/>
          <Main/>
          <Aside/>
     
     
    </div>
  );
}

export default App;
