import PropTypes from 'prop-types'

export const ShopCard = ({card}) => {
  return (
    <div className="card">
      <picture className="card__picture">
        <img src={card.img} alt={card.name} className="card__image"/>
      </picture>
      <div className="card__name">{card.name}</div>
      <div className="card__color">{card.color}</div>
      <div className="card__flex">
        <div className="card__price">${card.price}</div>
        <div className="card__btn">Add to cart</div>
      </div>
    </div>
  )
}
ShopCard.propTypes = {
  card: PropTypes.array.isRequired
}
