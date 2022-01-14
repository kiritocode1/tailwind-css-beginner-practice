// import logo from './logo.svg';
// import './App.css';
//! added this , check the readme for more details 
import { Route } from 'react-router-dom';
import DefaultLayout from './layouts/default.layout';
function name() {
  return <h1 className='bg-indigo-500 capitalize'>hello</h1>
} 
function name2() {
  return <h1 className='bg-green-50 capitalize'>hello there moviepage</h1>
}
//? we use the fragments <></> because we need to return something inside a single entity , so fragments take less code and are used in this sense
function App() {

  return (
    <>
      <Route path="/def/lay" exact component={DefaultLayout}/>
      <Route path="/" exact  component={name}/>
      <Route path="/m" exact component={name2}/>
      <Route path="/def" exact component={DefaultLayout}/>
    </>
  );
}
export default App;