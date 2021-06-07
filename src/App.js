import ButtonAppBar from './components/AppBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ButtonAppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
