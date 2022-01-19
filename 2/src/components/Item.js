import React from "react";


const Item = (props) => {
    const {url, MainImage, title, currency_code, price, quantity, ...anotherProps} = props.item
    const popularСurrency = [{"currency_code":"USD", "symbol":"$"}, {"currency_code":"EUR", "symbol":"€"},]
    const className = "item-quantity" + (quantity <= 10 ? " level-low" : quantity > 20 ? " level-high" : " level-medium")

    const getPriceText = () => {
        let currency_code_array = []
        let currency_symbol_array = []
        popularСurrency.map(currency => {
            currency_code_array.push(currency["currency_code"])
            currency_symbol_array.push(currency["symbol"])
        })

        const index = currency_code_array.indexOf(currency_code)
        if (index != -1)
            return `${currency_symbol_array[index]}${price}`
        return `${price} ${currency_code}`
    }

    return(
        <div className="item">
            <div className="item-image">
            <a href={url}>
                <img src={MainImage?.url_170x135} />
            </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{getPriceText()}</p>
                <p className={className}>{quantity} left</p>
            </div>
        </div>
    )
}


export default Item;