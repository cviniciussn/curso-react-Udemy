import React, { cloneElement } from 'react';

function familia(props) {
    return (
        <>
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i})
            })}

        </>
    )
}

export default familia;