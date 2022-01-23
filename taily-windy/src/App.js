
//! added this , check the readme for more details 
import DefaultHOC from './HOC/default.hoc';
import axios from 'axios';
// import temp from './layouts/temp';
// import Navbar from './components/navbar';
// import HeroCarousel from './components/hero.carousal/hero.carousal-component';
import HomePage from './components/Pages/home.Page';
import Movie from './components/Pages/Movie.page';
import MovieHOC from './HOC/Movie.hoc';

axios.defaults.baseURL = "https://api.themoviedb.org/3";//? base URL and API key is always constant
axios.defaults.params = {}; //!as an obj because axios params are not  objects.
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
// * so it looks like this inside  axios.def.params = {"api_key":API_KEY};


// import DefaultLayout from './layouts/default.layout';
//? we use the fragments <></> because we need to return something inside a single entity , so fragments take less code and are used in this sense
//? <thing  path   exact component={component}/>
function App() {
  return (
    <>
      {/* <DefaultLayout path="/" component={temp}/> */}
      {/* <DefaultHOC path="/" component={NavSm} /> */}
      {/* <DefaultHOC path="/" component={temp} /> */}
      {/* <DefaultHOC path="/" component={Navbar} /> */}
      {/* <DefaultHOC path="/" component={temp}/> */}
      <DefaultHOC path="/"  exact component={HomePage} />
      <MovieHOC path="/movie/:ID" exact component={Movie} />
    </>
  );
}
export default App;