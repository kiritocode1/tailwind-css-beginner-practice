
//! added this , check the readme for more details 
import DefaultHOC from './HOC/default.hoc';
import temp from './layouts/temp';
// import NavSm from './components/navbar';
// import DefaultLayout from './layouts/default.layout';
//? we use the fragments <></> because we need to return something inside a single entity , so fragments take less code and are used in this sense
//? <thing  path   exact component={component}/>
function App() {
  return (
    <>
      {/* <DefaultLayout path="/" component={temp}/> */}
      {/* <DefaultHOC path="/" component={NavSm} /> */}
      <DefaultHOC path="/" component={temp}/>
    </>
  );
}
export default App;