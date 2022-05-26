import React from 'react'
import search from './search'
import Rest from './Rest'
import newsDetail from './newsDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <Route exact path='/' component={Rest}></Route>
      <Route path='/search' component={search}></Route>
      <Route path='/newsDetail/:title' component={newsDetail}></Route>
      {/* manggil disini pake route */}
    </Router>
  );
}

export default App;

