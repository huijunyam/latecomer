import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './app/app';
import WelcomeContainer from './welcome/welcome_container';
import MainContainer from './main/main_container';
import FormContainer from './form/form_container';
import ClassListContainer from './classlist/classlist_container';
import StatContainer from './stat/stat_container';
import ClassDetailContainer from './classlist/class_detail_container';
import NewStudentContainer from './form/new_student_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    }
  };
  return(
    <Provider store={ store }>
      <Router history= { hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={WelcomeContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/main" component={MainContainer} onEnter={_ensureLoggedIn} />
          <Route path="/form" component={FormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/stat" component={StatContainer} onEnter={_ensureLoggedIn} />
          <Route path="/newstudent" component={NewStudentContainer} onEnter={_ensureLoggedIn} />
          <Route path="/classlist" component={ClassListContainer} onEnter={_ensureLoggedIn}>
            <Route path="/classlist/:classId" component={ClassDetailContainer} onEnter={_ensureLoggedIn}/>
          </Route>
          <Route path="/student/:studentId" component={FormContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
