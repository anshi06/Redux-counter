import { Fragment } from "react";
// import { useSelector } from 'react-redux';

import Counter from "./components/Counter";
import ToolkitCounter from "./components/ToolkitCounter";

import reduxStore from "./store/reduxStore";
import toolkitStore from "./store";
import { Provider } from "react-redux";
// import Header from './components/Header';
// import Auth from './components/Auth';
// import UserProfile from './components/UserProfile';

function App() {
  // const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {/* <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />} */}
      {/* Using redux-react and redux */}
      <Provider store={reduxStore}>
        {" "}
        <Counter />{" "}
      </Provider>
      <Provider store={toolkitStore}>
        <ToolkitCounter />
      </Provider>
    </Fragment>
  );
}

export default App;
