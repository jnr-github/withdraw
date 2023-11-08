// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, decreaseAmount} = this.props
  const {id, value} = itemDetails

  const onDecrease = id => {
    decreaseAmount(id)
  }

  return (
    <li className="button-background">
      <button onClick={this.onDecrease} type="button" className="button-text">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
