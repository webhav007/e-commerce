import userdata, { Cartitem } from "../data/userdata";


interface CartItemProps {
  item: Cartitem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = userdata();
  return (
    <div key={item.id} className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-item-details">
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
        <div className="quantity">
          <label htmlFor={`quantity_${item.id}`}>Quantity:</label>
          <div id={`quantity_${item.id}`}>{item.quantity}</div>
          <input
            type="number"
            id={`quantity_${item.id}`}
            value={item.quantity}
            onChange={(e) => updateCartItemQuantity(item  as any, e.target.value as any )}
            min="1"
          />
        </div>
        <button className="remove-button" onClick={() => removeFromCart(item as any )}>
          Remove
        </button>
      </div>
      <div className="item-total">
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
