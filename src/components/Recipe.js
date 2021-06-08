import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping()
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping()
    } else {
      this.props.substractShipping()
    }
  }

  render() {
    return (
      <div className='containers'>
        <div className='collections'>
          <li className='collection-item'>
            <label>
              <input
                type='checkbox'
                ref='shipping'
                onChange={this.handleChecked}
              />
              <span>Shipping(+5000<span>&#8358;</span>)</span>
            </label>
          </li>
          <li className='collection-item'>
            <b>Total: <span>&#8358;</span>{this.props.total} </b>
          </li>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' })
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
