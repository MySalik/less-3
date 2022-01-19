import React from "react";
import PropTypes from 'prop-types';
import Star from './Star'


const Stars = (props) => {
    const {count} = props

    return(
        <>
            {((count >= 0) && (count <= 5)) &&
                <ul className="card-body-stars u-clearfix">
                    {[...Array(count).keys()].map((index)=>{ return <Star key={index} /> })}
                </ul>
            }
        </>
    )
}

export default Stars;


Stars.propTypes = {
    count: PropTypes.number
};

Stars.defaultProps = {
    count: 2
};