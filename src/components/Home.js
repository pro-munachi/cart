import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/CartActions'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'
import { IconButton, AddShoppingCartIcon } from '@material-ui/icons'
import './style.css'

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id)
  }

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <Card key={item.id} className='card'>
          <CardActionArea>
            <div className='img'>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                image={item.img}
                title='Contemplative Reptile'
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {item.desc}
              </Typography>
              <Typography
                gutterBottom
                variant='h5'
                color='textSecondary'
                component='h5'
              >
                {item.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Price: <span>&#8358;</span>
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton color='primary' aria-label='add to shopping cart'>
              <AddShoppingCartIcon />
            </IconButton>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      )
    })

    return (
      <div className='container'>
        <h3 className='center'>Our items</h3>
        <div className='box'>{itemList}</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
