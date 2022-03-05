import "./styles/globals.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./Item/item";
import Cart from "./Cart/Cart";
import CategoryMenu from "./Category/Category";
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
  Welcome,
  CartMenuButton,
} from "./App.styles";
import Footer from "./Footer/Footer";
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: any;
  rate: number;
  count: number;
};

export interface ProductsProps {
  originalProducts: CartItemType[];
  products: CartItemType[];
}

const getProducts = async (): Promise<ProductsProps> => {
  const requisition = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();
  return {
    originalProducts: requisition,
    products: requisition,
  };
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [finishCheckout, setFinishCheckout] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<ProductsProps>(
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

  const handleCategoryTitle = (category: string) => {
    setCategoryTitle(category);
  };

  const handleFinishCheckout = () => {
    setFinishCheckout(true);
  };

  const openNav = () => {
    const getMenu = document.getElementById("Menu") as HTMLElement;
    const doc = document.getElementById("threeline-icon") as HTMLElement;
    if (getMenu.className === "Menu") {
      getMenu.className += " MenuResponsive";
      doc.innerHTML = "&Cross;";
    } else {
      getMenu.className = "Menu";
      doc.innerHTML = "&#9776;";
    }
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
        <div className="Header">
          <div>
            <h2>
              <a href="" onClick={() => window.location.reload()}>
                TypeScript Store
              </a>
            </h2>
          </div>
          <div className="images">
            <img
              alt="React"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            />
            <img
              alt="TypeScript"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
            />
          </div>
          <div className="MenuDiv">
            <ul id="Menu" className="Menu">
              <li>
                <a href="" onClick={() => window.location.reload()}>
                  Home
                </a>
              </li>
              <li>
                <CategoryMenu handleCategoryTitle={handleCategoryTitle} />
              </li>
              <li>
                <CartMenuButton
                  variant="text"
                  onClick={() => setCartOpen(true)}
                >
                  Cart
                </CartMenuButton>
              </li>
              <li
                id="threeline-icon"
                className="threeline-icon"
                onClick={openNav}
              >
                &#9776;
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
      <Welcome>
        <div className="Welcome">
          <h2>Demo shopping with Typescript using React</h2>
        </div>
      </Welcome>
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
          <h2>{`${categoryTitle != "all" ? categoryTitle : ""} Products`}</h2>
        </div>
        <Grid container spacing={3}>
          {data?.products.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
