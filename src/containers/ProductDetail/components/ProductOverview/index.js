import React, { Component } from 'react'
import './style.css'

class ProductOverview extends Component {
    render() {
        const {
            id,
            picture,
            shop,
            product,
        } = this.props.data
        return (
            <div className="productOverview">
                <div className="productOverview__header">
                    <div className="productOverview__imgContainer">
                        <img
                            alt=""
                            className="productOverview__img"
                            src={picture}
                        />
                    </div>
                    <div className="productOverview__baseInfo">
                        <div className="productOverview__title">{shop}</div>
                        <div className="productOverview__content">
                            {product}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductOverview
