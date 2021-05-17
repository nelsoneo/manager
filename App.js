import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './Router';

class App extends Component {
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyCnoVjPf9td35xXKLDPQQlFcLTunjZqxgc",
      authDomain: "manager-b5e73.firebaseapp.com",
      projectId: "manager-b5e73",
      storageBucket: "manager-b5e73.appspot.com",
      messagingSenderId: "645014062758",
      appId: "1:645014062758:web:f4b03498823a3df926d667",
      measurementId: "G-7S877BVD28"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;