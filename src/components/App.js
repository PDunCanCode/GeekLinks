import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LinkList from "./Link/LinkList";
import LinkDetail from "./Link/LinkDetail";
import Header from './Header';

function App() {
  return (
    <BowserRouter>
      <div className="app-container">
        <Header />
        <div className="route-container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route path="/create" component={CreateLink} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/search" component={SearchLinks} />
            <Route path="/top" component={LinkList} />
            <Route path="/new/:page" component={LinkList} />
            <Route path="/link/:linkId" component={LinkDetail} />
          </Switch>
          </div>
      </div>
    </BowserRouter>
  );
}

export default App;