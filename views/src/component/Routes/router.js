import { useRoutes } from "react-router-dom";

//begin user layout
import UserLayout from "../Layout/UserLayout";
import Homepage from "../../pages/user/hompage/homepage";
import Library from "../../pages/user/library/library";
import LibDocDetail from "../../pages/user/library/library-doc-detail";
import Event from "../../pages/user/event/eventList";
import Forum from "../../pages/user/forum/forumList";
import DiscussionSection from "../../pages/user/forum/forumDetail";
import SignupForm from "../../pages/signup";
import LoginForm from "../../pages/login";
import Profile from "../../pages/user/profile/profile";
import BorrowHistory from "../../pages/user/profile/borrowhistory";
import ReviewHistory from "../../pages/user/profile/rvhistory";
//end user layout

//begin admin layout
import AdminLayout from "../Layout/AdminLayout";
import MemberManagement from "../../pages/admin/memberManagement/memberManagement";
//end admin layout


//begin error layout
import ErrorLayout from "../Layout/ErrorLayout";
import Error401 from "../../pages/error/401";
import Error403 from "../../pages/error/403";
import Error404 from "../../pages/error/404";
//end erro layout

export default function Router() {
  const routes = useRoutes([
    {
      element: <UserLayout />,
      children: [
        {element: <Homepage />, index:true,},
        { path: "library",
          children: [
            {element: <Library />, index: true,},
            {path: "document-detail/:document_id", element:<LibDocDetail></LibDocDetail>},
          ]
        },
        { path:"log-in", element: <LoginForm></LoginForm>  },
        { path:"sign-up", element: <SignupForm></SignupForm> },
        { path:"profile",element:<Profile></Profile>},
        { path:"borrow-history",element:<BorrowHistory></BorrowHistory>},
        { path:"review-history",element:<ReviewHistory></ReviewHistory>},
        {path:"event",element:<Event></Event>},
        {path:"forum",element:<Forum></Forum>},
        {path:"forum/:id",element:<DiscussionSection></DiscussionSection>}
      ]
    },
    // Route for Admin Role
    {
      path: "/admin",
      element: <AdminLayout/>,
      children: [
        {element: <Homepage />, index:true,},
        {path:"member-management", element:<MemberManagement></MemberManagement>}

      ]
    },
    //Route for error
    {
      element: <ErrorLayout/>,
      children: [
        {path: "401", element: <Error401/>},
        {path: "403", element: <Error403/>},
        {path: "404", element: <Error404/>},
      ]
    },
  ]);
  return routes;
}
