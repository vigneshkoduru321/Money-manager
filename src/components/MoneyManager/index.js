import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'income',
    historyList: [],
  }

  ChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  ChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  ChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {title, amount, type, historyList} = this.state
    const object = {title, amount, type, id: uuidv4()}
    this.setState({
      historyList: [...historyList, object],
      title: '',
      amount: '',
    })
  }

  delete = id => {
    console.log(id)
  }

  render() {
    const {
      balance,
      income,
      expenses,
      title,
      amount,
      type,
      historyList,
    } = this.state
    console.log(historyList)
    return (
      <div className="main-background">
        <div className="first-container">
          <h1>Hi,Rechard</h1>
          <p> Welcome back to your money manager</p>
        </div>
        <div className="second-container">
          <div className="card-1 card">
            <div className="card-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
                alt="balance"
              />
              <div>
                <p>Your Balance</p>
                <p testid="balanceAmount">Rs {balance}</p>
              </div>
            </div>
          </div>
          <div className="card-2 card">
            <div className="card-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
                alt="income"
              />
              <div>
                <p>Your Income</p>
                <p testid="incomeAmount">Rs {income}</p>
              </div>
            </div>
          </div>
          <div className="card-3 card">
            <div className="card-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
                alt="expenses"
              />
              <div>
                <p>Your Expenses</p>
                <p testid="expensesAmount">Rs {expenses}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="form-con">
            <form onSubmit={this.onSubmitAdd}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">Title</label>
              <br />
              <input onChange={this.ChangeTitle} value={title} id="title" />
              <br />
              <label htmlFor="amount">Amount</label>
              <br />
              <input onChange={this.ChangeAmount} value={amount} id="amount" />
              <br />
              <label htmlFor="income">Income</label>
              <br />
              <select onChange={this.ChangeType} value={type}>
                <option selected>Income</option>
                <option>expenses</option>
              </select>
              <br />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="history-con">
            <h1>History</h1>
            <div className="history-list">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {historyList.map(each => (
                <TransactionItem
                  deleteItem={this.delete}
                  details={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
