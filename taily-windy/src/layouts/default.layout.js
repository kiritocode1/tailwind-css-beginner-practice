// // this is the default layout that is rendered
// import React from 'react';
// function hardwork() {
//     return (<div className='bg-green-50 justify-evenly flex '> <h1>successnight</h1>
//     <h2 className='bg-red-50 text-xl'>this is an eg</h2></div>);
// }
// export default hardwork;
import React from 'react';
const DefaultLayout = (props) => { 
    return (
        <div className='bg-black-500 w-92'>
            <h1 className='text-xl bg-green-500 transition-all hover:text-sm hover:bg-red-500'>default layout page is ready to perform and is imported in app</h1>
            {props.children}
        </div>
);
}
export default DefaultLayout;