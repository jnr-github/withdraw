// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, decreaseAmount} = this.props
  const {value} = itemDetails

  const onDecrease = value => {
    decreaseAmount(value)
  }

  return (
    <li className="button-background">
      <button onClick={onDecrease} type="button" className="button-text">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
