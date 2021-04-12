import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserDetails from './UserDetails'
import PostShow from './PostShow'

const App = (props) =>{
  return(
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/users" component={Users} exact={true}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/users/:id" component={UserDetails}/>
      <Route path="/posts/:id" component={PostShow}/>
    </div>
  )
}

export default App