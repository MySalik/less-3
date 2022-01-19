import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item"


const Listing = ({items}) => {

    return(
        <div className="item-list">
            {items.map(item => {
                const {listing_id, state, ...itemProps} = item;
                if (state == "active"){
                    return <Item key={listing_id} item={itemProps}/>
                }
            })}
        </div>
    )
}


export default Listing;



Listing.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            listing_id : PropTypes.number.isRequired,
            url : PropTypes.string.isRequired,
            MainImage : PropTypes.any.isRequired,
            title : PropTypes.string.isRequired,
            currency_code : PropTypes.string.isRequired,
            price : PropTypes.string.isRequired,
            quantity : PropTypes.number.isRequired
        })
    )
};
