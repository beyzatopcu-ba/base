import React from 'react';

const Icon = props => {
    const Svg = props.svg;
    return (
        <Svg width="100%" height="100%" style={props.iconStyle}/>
    );
};

export default Icon;
