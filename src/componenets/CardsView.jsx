import {ShopCard} from "./ShopCard.jsx"
import PropTypes from 'prop-types'


export const CardsView = ({cards}) => {
  const list = cards.reduce((acc, item, index) => {
    acc.push(<ShopCard card={item} key={index}/>);

    return acc;
  }, []);

  return (
    <div className="shopCard">
      {list}
    </div>
  )
}
CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}