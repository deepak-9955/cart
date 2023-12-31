import React from "react";

const CartItem = (props) => {
    const { price, title, qty } = props.product; // if we not write this line, then we have to writ this.state.title in the title section
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Button */}
                    <img alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={() => onIncreaseQuantity(product)}
                    />

                    <img alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}
export default CartItem;