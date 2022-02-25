import { useEffect, useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./Item/item";
import Cart from "./Cart/Cart";
import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//styles
import {
  Wrapper,
  StyledButton,
  ProgressDiv,
  CheckoutDiv,
  Navbar,
} from "./App.styles";
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [finishCheckout, setFinishCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. Item already added on Cart?
      const isIteminCart = prev.find((item) => item.id === clickedItem.id);

      if (isIteminCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleFinishCheckout = () => {
    setFinishCheckout(true);
  };

  useEffect(() => {
    if (finishCheckout) {
      setTimeout(() => {
        setFinishCheckout(false);
      }, 1000);
    }
  }, [finishCheckout]);

  if (isLoading)
    return (
      <ProgressDiv>
        <CircularProgress />
      </ProgressDiv>
    );
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <CheckoutDiv finish={finishCheckout}>
        <div className="AlertBackground">
          <div className="Alert">
            <p>Thank You For Testing!</p>
          </div>
        </div>
      </CheckoutDiv>
      <Navbar>
        <div>
          <h2>TypeScript Store</h2>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Cart</li>
          </ul>
        </div>
      </Navbar>
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            closeCart={handleCloseCart}
            checkoutFinish={handleFinishCheckout}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <div className="ProductsTitle">
          <h2>Products</h2>
        </div>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default App;
