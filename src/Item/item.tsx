import Rating from "@mui/material/Rating";
import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div className="ItemTexts">
      <h3 className="ItemTitle">{item.title}</h3>
      <div className="Rating">
        <Rating
          name="read-only"
          value={item.rating.rate}
          readOnly
          className="RatingDisplay"
        />
        <p>{item.rating.count} Avaliations</p>
      </div>
      <p className="Description">{item.description}</p>
      <h3 className="Price">${item.price}</h3>
    </div>
    <Button
      onClick={(event) => {
        handleAddToCart(item);
      }}
    >
      Add to Cart
    </Button>
  </Wrapper>
);

export default Item;
