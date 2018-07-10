import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/post_index';
import promise from 'redux-promise';
import PostNew from './components/post_new';
import PostsShow from './components/post_show';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
render() { return <div>Hello!</div> }
}

class GoodBye extends React.Component {
  render() { return <div>GoodBye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />        
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
