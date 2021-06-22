import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


function App() {
  return (
    <BrowserRouter >
    {/* Rota para Home page ou tela de autenticação */}
    <Route path="/" exact component={Home}/>

     {/* Rota para tela de criar salas */}
     <Route path="/room/new" component={NewRoom}/>
    
    </BrowserRouter>
  );
}

export default App;
