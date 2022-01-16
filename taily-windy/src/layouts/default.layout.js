import React from 'react';
const DefaultLayout = (props) => {
    return (
        <>
            {/* it wont show until this starts . */}
            <h1>default layout</h1>
            {/* {props.components} */}
            {props.children}
        </>
    );
};
export default DefaultLayout;