import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from '../actions/CartActions'
import Recipe from './Recipe'
import Delete from '@material-ui/icons/Delete'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id)
  }
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className='collection-item' key={item.id}>
            <div className='item-img'>
              <img src={item.img} alt={item.img} className='image' />
            </div>

            <div className='item-desc'>
              <span className='title'>{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: <span>&#8358;</span>{item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className='add-remove'>
                <Link to='/cart'>
                  <i
                    className='material-icons'
                    onClick={() => {
                      this.handleAddQuantity(item.id)
                    }}
                  >
                    <ArrowUpwardIcon />
                  </i>
                </Link>
                <Link to='/cart'>
                  <i
                    className='material-icons'
                    onClick={() => {
                      this.handleSubtractQuantity(item.id)
                    }}
                  >
                    <ArrowDownwardIcon />
                  </i>
                </Link>
              </div>
              <button
                className='remove'
                onClick={() => {
                  this.handleRemove(item.id)
                }}
              >
                <Delete />
              </button>
            </div>
          </li>
        )
      })
    ) : (
        <p>Your Cart Is Empty</p>
      )
    return (
      <div className='container'>
        <div className='cart'>
          <h5 className='header'>You have ordered:</h5>
          <ul className='collection'>{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id))
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id))
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
