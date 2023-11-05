import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './template/header'
import Homepage from './components/homepage/homepage';
import Document_List from './components/document_management/document_list';
import Document_Detail from './components/document_management/document_detail';
import Book_Borrow from './components/book_borrow/book_borrow';
import Borrow_Management from './components/book_borrow/borrow_management';
import NoPage from './components/nopage/nopage';
import axios from 'axios'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="documentManagement" >
          <Route index element={<Document_List />} />
          <Route path='documentDetail' element={<Document_Detail />} />
        </Route>
        <Route path="bookBorrow" >
          <Route index element={<Book_Borrow />} />
          <Route path='borrowManagement' element={<Borrow_Management />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
