import {ShopItem} from "./ShopItem.jsx";
import PropTypes from 'prop-types'

export const ListView = ({items}) => {
  const list = items.reduce((acc, item, index) => {
    acc.push(<ShopItem item={item} key={index}/>);

    return acc;
  }, []);

  return (
    <div className="shopItems">
      {list}
    </div>
  )
}
ListView.propTypes = {
  items: PropTypes.array.isRequired
}