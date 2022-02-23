import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper, AddRemoveButton, StyledAddIcon, StyledRemoveIcon } from "./CartItem.styles";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Unit Price: ${item.price}</p>
                <p>SubTotal: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <AddRemoveButton
                    variant="contained"
                    disableElevation
                    onClick={() => removeFromCart(item.id)}
                >
                    <StyledRemoveIcon/>
                </AddRemoveButton>
                <div className="amount"><p>{item.amount}</p></div>
                <AddRemoveButton
                    variant="contained"
                    disableElevation
                    onClick={() => addToCart(item)}
                >
                    <StyledAddIcon/>
                </AddRemoveButton>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;