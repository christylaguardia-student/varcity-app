import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './src/app/App';  
import Home from './Home'; 
import EduPages from './EduPages';
import EduPage from './EduPage'; 


export default (  
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/edu" component={EduPages} >
      <Route path="/edu/:id" component={EduPage} />
  </Route>
  </Route>
);