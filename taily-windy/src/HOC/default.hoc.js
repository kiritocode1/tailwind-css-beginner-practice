import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({ element, ...HOCprops }) => { 
    const Element = element;
    return (
        <>
        <h1>def hoc is superb</h1>
            <Route
                {...HOCprops}
                element={(props) => (
                    <DefaultLayout>
                        <Element {...props}/>
                    </DefaultLayout>
                )}
            />
        </>
    );
}
export default DefaultHOC;