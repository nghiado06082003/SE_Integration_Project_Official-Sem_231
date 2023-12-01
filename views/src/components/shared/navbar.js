import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from "react";
import './navbar.css'
import Cookies from "universal-cookie";
import axios from "axios";


export default function Navbar(props){
  const [authInfo, setAuthInfo] = useState({
    isLogin: false,
    isAdmin: false,
    isAdminMode: false
  });
  const cookies = new Cookies();
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = cookies.get('TOKEN');
    console.log(`cookies: token=${token}`);
    if (token === undefined) {
      setAuthInfo(() => ({ isLogin: false, isAdmin: false, isAdminMode: false }));
    }
    else {
      axios
        .post('http://localhost:8080/api/authorization/collab', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setAuthInfo({ isLogin: true, isAdmin: false, isAdminMode: false });
        })
        .catch((error) => {
          console.error(error);
          setAuthInfo({ isLogin: false, isAdmin: false, isAdminMode: false });
        });
      
      axios
        .post('http://localhost:8080/api/authorization/admin', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setAuthInfo({ isLogin: true, isAdmin: true, isAdminMode: true });
        })
        .catch((error) => {
          
        });
    }
  }, []);
  
  const handleSignOut = (e) => {
    if (!authInfo.isLogin) {
      alert('Có lỗi xảy ra!');
      return;
    }
    cookies.remove('TOKEN', {
      path: "/",
    });
    setAuthInfo({ isLogin: false, isAdmin: false, isAdminMode: false });
    navigate('/');
    console.log('Đã đăng xuất');
  }
  
  let leftNavItem1, leftNavItem2, rightNavItem1, rightNavItem2;
  if (authInfo.isAdmin && authInfo.isAdminMode) {
    leftNavItem1 = (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Quản lý hoạt động
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/feed/event">
                Bài viết
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/feed/review">
                Review
            </NavLink>
          </li>
        </ul>
      </li>
    );
    leftNavItem2 = (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Quản lý tài liệu
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/library">
              Thư viện
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/documentManagement/loan">
              Mượn sách
            </NavLink>
          </li>
        </ul>
      </li>
    );
    rightNavItem1 = (
      <li className="nav-item">
        <NavLink className="nav-link" to="/memberManagement">
          Quản lý thành viên
        </NavLink>
      </li>
    );
    rightNavItem2 = (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Thông tin
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/">
              Người dùng
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/my">
              Thông tin cá nhân
            </NavLink>
          </li>
          <li>
            <button className="dropdown-item" onClick={handleSignOut}>
              Đăng xuất
            </button>
          </li>
        </ul>
      </li>
    );
  }
  else {
    leftNavItem1 = (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hoạt động
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="/feed/event">
              Sự kiện
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/feed/review">
              Review
            </NavLink>
          </li>
        </ul>
      </li>
    );
    leftNavItem2 = (
      <li className="nav-item">
        <NavLink className="nav-link" to="/library">
          Thư viện
        </NavLink>
      </li>
    );
    
    if (authInfo.isLogin) {
      rightNavItem1 = (
        <li className="nav-item">
          <NavLink className="nav-link" to="/bookBorrow">
            Mượn sách
          </NavLink>
        </li>
      );
      rightNavItem2 = (
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Thông tin
          </NavLink>
          <ul className="dropdown-menu">
            {authInfo.isAdmin && !authInfo.isAdminMode && 
            <li>
              <NavLink className="dropdown-item" to="/">
                Trang quản trị viên
              </NavLink>
            </li>
            }
            <li>
              <NavLink className="dropdown-item" to="/my">
                Thông tin cá nhân
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/my/borrow/list">
                Danh sách đăng kí mượn
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/my/borrow/history">
                Lịch sử mượn
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/my/feed/review">
                Sách đã quyên góp
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/my/post/reviewHistory">
                Danh sách review đã gửi
              </NavLink>
            </li>
            <li>
              <button className="dropdown-item" onClick={handleSignOut}>
                Đăng xuất
              </button>
            </li>
          </ul>
        </li>
      );
    }
    else {
      rightNavItem1 = (
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Đăng kí
          </NavLink>
        </li>
      );
      rightNavItem2 = (
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">
            Đăng nhập
          </NavLink>
        </li>
      );
    }
  }
  
  return (
    <nav className="navbar container-fluid">
      <ul className="navmenu me-auto mb-lg-0">
        {leftNavItem1}
        {leftNavItem2}
        <li className="nav-item navbar-brand">
          <NavLink className="nav-link" to="/">
            <img src="/SIMBSCLogo.png" alt="SIMBSC" id="logo"></img>
          </NavLink>
        </li>
        {rightNavItem1}
        {rightNavItem2}
      </ul>
    </nav>
  );
}