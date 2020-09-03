import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Nav from './components/Nav'
import District from './components/District'
import ES from './components/ES';
import MS from './components/Ms'
import HS from './components/Hs'
import MsTix from './components/msTix'
function App() {
  return (
    <div >
    
    <BrowserRouter>   
    <Nav />

   <Route exact path="/" component={District} />
   <Route exact path="/es" component={ES} />
   <Route exact path="/ms" component={MS} />
   <Route exact path="/hs" component={HS} />
   <Route exact path="/ms/tix" component={MsTix} />




   
    </BrowserRouter>
 
    </div>
  );
}

export default App;
