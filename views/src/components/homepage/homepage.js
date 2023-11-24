import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
import { useState, useEffect } from "react";
import Header from '../shared/header'
import Hero from "./hero";

function Homepage() {
  const [greetingFromServer, setGreetingFromServer] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8080/api/homepage')
    .then((respond) => {
      setGreetingFromServer(respond.data.greeting);
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    })
  }, []);
  console.log(greetingFromServer);
  return (
    <>
      <Hero/>
    </>
  );
}
export default Homepage