import PropTypes from 'prop-types'

export const ShopItem = ({item}) => {
  return (
    <div className="item">
      <picture className="item__picture">
        <img src={item.img} alt={item.name} className="item__image"/>
      </picture>
      <div className="item__name">{item.name}</div>
      <div className="item__color">{item.color}</div>
      <div className="item__price">${item.price}</div>
      <div className="item__btn">Add to cart</div>
    </div>
  )
}
ShopItem.propTypes = {
  item: PropTypes.array.isRequired
}