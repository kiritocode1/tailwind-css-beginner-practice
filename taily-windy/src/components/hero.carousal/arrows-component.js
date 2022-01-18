import React from "react";
// ? next arrow and prevarrow in slick was used and now this was updated...
export const NextArrow = (props) => {
    return (
        <>
            <div className={props.className}
                style={{ ...props.style }}
            onClick={props.onClick}
            />
        </>
    );
};
export const PrevArrow = (props) => {
    return (
        <>
        <div className={props.className}
                style={{ ...props.style }}
            onClick={props.onClick}
            />
        </>
    );
};

