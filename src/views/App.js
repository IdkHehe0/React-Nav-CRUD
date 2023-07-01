import logo from './logo.svg'
import './App.scss';
import ToDoLists from './Todolist/ToDoLists';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';
import Home from './Nav/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ToDoLists /> */}
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/crud">
              <ToDoLists />
            </Route>

          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
