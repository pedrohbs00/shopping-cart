import CartItem from "../CartItem/CartItem";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
//styles
import { Wrapper } from "./Cart.styles";
//Types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    closeCart: any;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, closeCart }) => {
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <div className="cartTitle">
                <h2>Your Shopping Cart</h2>
                <Button 
                size="small"
                variant='text'
                onClick={closeCart}
                >
                <CloseIcon/>
                </Button>
            </div>
            {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                
                />
            ))}
            <div className="total"><h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2></div>
        </Wrapper>
    )
}

export default Cart;