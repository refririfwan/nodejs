import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import CreatTodo from "./components/create-todo.component"
import EditTodo from "./components/edit-todo.component"
import TodosList from './components/todos-list.component';
import logo from "./logo.png"

function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://refririfwan.blogspot.com" targer="_blank">
          <img src={logo} width="30" height="30" alt="refririfwan.blogspot.com"></img>
        </a>
        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        <div className="collpase nav-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/1" className="nav-link">Edit Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreatTodo} />
    </div>
    </Router>
  );
}

export default App;
