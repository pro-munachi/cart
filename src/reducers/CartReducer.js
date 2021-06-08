import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from '../constants/CartConstants'

const initState = {
  items: [
    {
      id: 1,
      img:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/707707/1.jpg?9918',
      title: 'Brand: Hp | Similar products from Hp',
      desc: 'Hp DC 6000 SFF ( Windows 10 Pro And Office 2016 Preloaded)',
      price: '142,000',
    },
    {
      id: 2,
      img:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/756752/1.jpg?2008',
      title: 'Brand: Hp | Similar products from Hp',
      desc:
        'Hp Prodesk 600 Sff - Intel Core I3 - 4GB RAM - 500GB HDD - Windows 10 Pro & Office 2016 Preloaded',
      price: '149,999',
    },
    {
      id: 3,
      img:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/707707/1.jpg?9918',
      title: 'Brand: Lenovo | Similar products from Lenovo',
      desc:
        'Lenovo IdeaPad 14 Notebook AMD A6-Series 4GB AMD Radeon 64GB Win 10',
      price: '144,000',
    },
    {
      id: 4,
      img:
        'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/027866/1.jpg?9576',
      title: 'HP',
      desc:
        'Game One-hand Keyboard Mouse Set G92 6D Mouse With Pad',
      price: '5,158',
    },
    {
      id: 5,
      img:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/527986/1.jpg?3564',
      title: 'acer',
      desc:
        'Mini Wireless Keyboard Game I 8 Air Mouse 2.4GHz With Backlight Touchpad For TV BOX Tablet PC',
      price: '3,040',
    },
    {
      id: 6,
      img:
        'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/040992/1.jpg?7545',
      title: 'lenovo',
      desc:
        'Wireless Touchpad Keyboard With Backlight - Black',
      price: 90,
    },
  ],
  addedItems: [],
  total: 0,
}
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id)
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
      }
    } else {
      addedItem.quantity = 1
      //calculating the total
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      }
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id)
    let new_items = state.addedItems.filter((item) => action.id !== item.id)

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    }
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal,
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      }
    } else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal,
      }
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    }
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 6,
    }
  } else {
    return state
  }
}

export default cartReducer
