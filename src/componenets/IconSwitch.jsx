import PropTypes from 'prop-types'

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <span className="material-icons btn-block__switch" onClick={onSwitch}>{icon}</span>
  )
}
IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
}