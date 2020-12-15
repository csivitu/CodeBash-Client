import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUser } from './redux/user/user.selectors';
import './App.css';

import ChatPage from './pages/ChatPage/ChatPage.component';
import JoinPage from './pages/JoinPage/JoinPage.component';
import LoginPage from './pages/LoginPage/LoginPage.component';
import SignupPage from './pages/SignupPage/SignupPage.component';

const App = ({user}) => (
    <div className="App">
        <Switch>
            <Route path="/" exact component={SignupPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/join" exact render={() => user === null ? <Redirect to='/login' /> : <JoinPage /> } />
            <Route path="/chat/:roomCode" render={() => user === null ? <Redirect to='/login' /> : <ChatPage /> } />
        </Switch>
    </div>
);

const mapStateToProps = createStructuredSelector({
    user: selectUser
})

export default connect(mapStateToProps)(App);
