import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper, AddButton, RemoveButton, StyledAddIcon, StyledRemoveIcon } from "./CartItem.styles";

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
                <RemoveButton
                    variant="text"
                    disableElevation
                    onClick={() => removeFromCart(item.id)}
                >
                    <StyledRemoveIcon/>
                </RemoveButton>
                <div className="amount"><p>{item.amount}</p></div>
                <AddButton
                    variant="text"
                    disableElevation
                    onClick={() => addToCart(item)}
                >
                    <StyledAddIcon/>
                </AddButton>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;