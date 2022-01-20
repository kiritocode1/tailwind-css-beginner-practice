import React from "react";
import MovieNavbar from "../components/Movie.navbar-component";
const MovieLayout = (props) => {
    return (
        <div>
            <MovieNavbar />
            {props.children}
        </div>
    );
};
export default MovieLayout;