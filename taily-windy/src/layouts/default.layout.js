import React from 'react';
import Navbar from '../components/navbar';
const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
};
export default DefaultLayout;