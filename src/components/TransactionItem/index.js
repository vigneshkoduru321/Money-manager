import './index.css'

const TransactionItem = props => {
  const {details, deleteItem} = props
  const {id, title, amount, type} = details
  const onClick = () => {
    deleteItem(id)
  }
  return (
    <li className="container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button testid="delete" onClick={onClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
