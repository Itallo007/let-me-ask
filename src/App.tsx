import { BrowserRouter, Route } from "react-router-dom";

import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter >
      <AuthContextProvider>
        {/* Rota para Home page ou tela de autenticação */}
        <Route path="/" exact component={Home}/>

        {/* Rota para tela de criar salas */}
        <Route path="/room/new" component={NewRoom}/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
