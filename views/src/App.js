import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/shared/header'
import Homepage from './components/homepage/homepage';
import EventPost from './components/feed/eventPost/post';
import Review_List from './components/feed/reviewPost/review';
import Document_List from './components/library/document_list';
import Book_Borrow from './components/book_borrow/book_borrow';
import Borrow_Management from './components/book_borrow/borrow_management';
import DocDetail from "./components/library/document_detail";
import Profile from './components/profile/profile';
import NoPage from './components/nopage/nopage';
import ReviewHistoryList from './components/profile/reviewHistoryList';
import ReviewDetail from './components/profile/reviewDetail';
import axios from 'axios'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path='feed'>
          <Route path='event' element={<EventPost/>}></Route>
          <Route path='review' element={<Review_List/>}></Route>
        </Route>
        <Route path="library" >
          <Route index element={<Document_List />} />
          <Route path="documentDetail/:document_id" element={<DocDetail />} />
        </Route>
        <Route path="bookBorrow" >
          <Route index element={<Book_Borrow />} />
          <Route path='borrowManagement' element={<Borrow_Management />} />
        </Route>
        <Route path='my'>
          <Route index element={<Profile/>}/>
          <Route path='post/reviewHistory'>
            <Route index element={<ReviewHistoryList/>}/>
            <Route path='reviewDetail/:review_id' element={<ReviewDetail/>}></Route>
          </Route>
        </Route>
        
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

