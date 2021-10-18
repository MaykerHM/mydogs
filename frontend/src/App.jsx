import './styles/global.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Users } from './pages/Users'
import { Dogs } from './pages/Dogs'
import { Adoption } from './pages/Adoption'

export function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/dogs' exact component={Dogs} />
          <Route path='/adoption' exact component={Adoption} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
