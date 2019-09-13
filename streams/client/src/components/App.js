import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from './Header';
import history from '../history';

const App = () => {
  // WE DO NOT WANT TO USE ANCHOR TAGS HERE!!! <A>

  // using Switch so that ReactDOM only shows the appropriate Route it needs to show and not other routes/components
  return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
  );
};

export default App;
