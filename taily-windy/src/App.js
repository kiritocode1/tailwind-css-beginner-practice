// import logo from './logo.svg';
// import './App.css';
//! added this , check the readme for more details 
// import { Route } from 'react-router-dom';
// import DefaultLayout from './layouts/default.layout';
import DefaultHOC from './HOC/default.hoc';
import temp from './layouts/temp';
//? we use the fragments <></> because we need to return something inside a single entity , so fragments take less code and are used in this sense
//? <thing  path   exact component={component}/>


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={temp}/>
    </>
  );
}
export default App;