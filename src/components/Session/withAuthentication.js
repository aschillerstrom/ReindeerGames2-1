import React from 'react';

import AuthUserContext from './AuthUserContext';
import * as firebase from '../../firebase/firebase';


const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props); 
 
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      console.log(firebase)
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;