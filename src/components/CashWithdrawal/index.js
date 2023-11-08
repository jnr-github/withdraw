// Write your code here
import {Component} from 'react'

import './index.css'

import {DenominationItem} from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseAmount = id => {
    const decAmount = denominationList.filter(each => each.id === id)
    this.setState(prevState => ({amount: prevState.amount - decAmount.value}))
  }
  render() {
    const {amount} = this.state
    const {denominationList} = this.props
    return (
      <div className="white-background">
        <div className="card">
          <div className="profile-container">
            <p className="first-letter">S</p>
            <p className="customer-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <p className="amount-text">{amount}</p>
          </div>
          <div className="rupees-container">
            <p className="rupees-text">In Rupees</p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN REPEES)</p>
          </div>
          <ul className="unordered-item">
            {denominationList.map(each => (
              <DenominationItem
                decreaseAmount={this.decreaseAmount}
                itemDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
