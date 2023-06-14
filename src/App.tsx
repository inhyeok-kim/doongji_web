import {useEffect, useLayoutEffect} from 'react';
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {AuthState} from './Atom/Auth';

function App() {
  const authState = useRecoilValue(AuthState);
  const setAuthState = useSetRecoilState(AuthState);

  useLayoutEffect(()=>{
    console.log(authState);
    setAuthState({id : 'id', token : 'token'});
  },[]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
