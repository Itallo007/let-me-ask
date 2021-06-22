import {createContext, useEffect, useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import { auth, firebase } from './services/firebase';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

type User = {
  id: string,
  name: string,
  avatar: string
}

type AutoContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AutoContextType);

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        const {displayName, photoURL, uid} = user;
  
        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if(result.user) {
      const {displayName, photoURL, uid} = result.user;

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  return (
    <BrowserRouter >
      <AuthContext.Provider value={{user, signInWithGoogle}}>
        {/* Rota para Home page ou tela de autenticação */}
        <Route path="/" exact component={Home}/>

        {/* Rota para tela de criar salas */}
        <Route path="/room/new" component={NewRoom}/>
      </AuthContext.Provider>    
    </BrowserRouter>
  );
}

export default App;
