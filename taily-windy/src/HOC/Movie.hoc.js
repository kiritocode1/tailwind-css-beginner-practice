import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/movie.layout.js";




const MovieHOC = ({ element, ...HOCprops }) => {
    const Element = element;
    // const Element = (elementy, ...funcprops) => {
    //     const mine = element;
    //     return <elementy {...funcprops}/>;
    // };
    return (
        <>
            <Route
                {...HOCprops}
                element={(props) => {
                    return (
                        
                        // <MovieLayout component={Element(mine,...props)}/>
                        <MovieLayout>
                            <Element {...props} />
                        </MovieLayout>
                    );
                }}
            />
        </>
    );
};
export default MovieHOC;
