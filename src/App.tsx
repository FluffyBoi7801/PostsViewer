import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/*{isLoading && <h1>Loading...</h1>}*/}
      {/*{error && <h1>Error! {error}</h1>}*/}
      {/*{JSON.stringify(users,null, 2)}*/}

      <PostContainer/>
    </div>
  );
}

export default App;
