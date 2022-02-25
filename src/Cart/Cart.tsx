import CartItem from "../CartItem/CartItem";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
//styles
import { Wrapper, FinishShopButton } from "./Cart.styles";
//Types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  closeCart: any;
  checkoutFinish: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  closeCart,
  checkoutFinish,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const checkoutDone = () => {
    cartItems.length = 0;
    closeCart();
    checkoutFinish();
  };

  return (
    <Wrapper>
      <div className="cartTitle">
        <h2>Your Shopping Cart</h2>
        <Button size="small" variant="text" onClick={closeCart}>
          <CloseIcon />
        </Button>
      </div>
      {cartItems.length === 0 ? (
        <div className="NoItems">
          <ShoppingCartOutlinedIcon fontSize="large" color="disabled" />
          <p>No Items in Cart</p>
        </div>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length != 0 ? (
        <footer className="CartFooter">
          <div className="total">
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
          </div>
          <div className="finishbutton">
            <FinishShopButton onClick={checkoutDone}>
              <p>Checkout</p>
            </FinishShopButton>
          </div>
        </footer>
      ) : null}
    </Wrapper>
  );
};

export default Cart;
