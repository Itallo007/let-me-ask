import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

function App() {
  return (
    <BrowserRouter >
      <AuthContextProvider>
        <Switch>
          {/* Rota para Home page ou tela de autenticação */}
          <Route path="/" exact component={Home}/>

          {/* Rota para tela de criar salas */}
          <Route path="/rooms/new" component={NewRoom}/>

          {/* Rota para a tela de sala */}
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
