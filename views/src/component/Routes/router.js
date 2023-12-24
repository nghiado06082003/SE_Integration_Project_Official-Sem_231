import { useRoutes } from "react-router-dom";

//begin user layout
import UserLayout from "../Layout/UserLayout";
import Homepage from "../../pages/user/hompage/homepage";
import Library from "../../pages/user/library/library";
import LibDocDetail from "../../pages/user/library/library-doc-detail";
import Event from "../../pages/user/event/eventList";
import EventDetail from "../../pages/user/event/eventDetail";
import Forum from "../../pages/user/forum/forumList";
import DiscussionSection from "../../pages/user/forum/forumDetail";
import SignupForm from "../../pages/signup";
import LoginForm from "../../pages/login";
import Profile from "../../pages/user/profile/profile";
import BorrowHistory from "../../pages/user/profile/borrowhistory";
import ReviewHistory from "../../pages/user/profile/rvhistory";
import BookForm from "../../pages/user/library/donate";
import ContributionHistory from "../../pages/user/profile/contributeHistory";
//end user layout

//begin admin layout
import AdminLayout from "../Layout/AdminLayout";
import MemberManagement from "../../pages/admin/memberManagement/memberManagement";
import LoanManagement from "../../pages/admin/documentManagement/loanManagement";
import LibraryManagement from "../../pages/admin/documentManagement/libraryManagement";
import DonateManagement from "../../pages/admin/documentManagement/donateManagement";

import EventManagement from "../../pages/admin/eventManagement/eventManagement";
import EventDetailManagement from "../../pages/admin/eventManagement/eventDetailManagement";
import EventCreation from "../../pages/admin/eventManagement/eventCreation";

import ForumManagement from "../../pages/admin/eventManagement/forumManagement";
import ForumPostDetailManagement from "../../pages/admin/eventManagement/forumPostDetailManagement";
//end admin layout


//begin error layout
import ErrorLayout from "../Layout/ErrorLayout";
import Error401 from "../../pages/error/401";
import Error403 from "../../pages/error/403";
import Error404 from "../../pages/error/404";

//end error layout

export default function Router() {
  const routes = useRoutes([
    {
      element: <UserLayout />,
      children: [
        { element: <Homepage />, index: true},
        {
          path: "library",
          children: [
            {element: <Library />, index: true,},
            {path: "document-detail/:document_id", element:<LibDocDetail></LibDocDetail>},
            {path:"donate-document",element:<BookForm></BookForm>}
          ]
        },
        { path:"log-in", element: <LoginForm></LoginForm>  },
        { path:"sign-up", element: <SignupForm></SignupForm> },
        { path:"profile",element:<Profile></Profile>},
        { path:"borrow-history",element:<BorrowHistory></BorrowHistory>},
        { path:"review-history",element:<ReviewHistory></ReviewHistory>},
        { path:"contribute-history", element:<ContributionHistory></ContributionHistory>},
        {path:"event",element:<Event></Event>},
        {path:"event/:id",element:<EventDetail></EventDetail>},
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
        {path: "profile", element:<Profile></Profile>},
        {path:"member-management", element:<MemberManagement></MemberManagement>},
        {path: "loan-management", element: <LoanManagement></LoanManagement>},
        {path: "library-management", element: <LibraryManagement></LibraryManagement>},
        {path: "library-management/document-detail/:document_id", element:<LibDocDetail></LibDocDetail>},
        {path: "library-management/upload", element: <BookForm></BookForm>},
        {path: "library-management/donate-management", element: <DonateManagement></DonateManagement>},

        {path: "event-management", element: <EventManagement></EventManagement>},
        {path: "event-management/detail/:id", element: <EventDetailManagement></EventDetailManagement>},
        {path: "event-management/create", element: <EventCreation></EventCreation>},
        {path: "forum-management", element: <ForumManagement></ForumManagement>},
        {path: "forum-management/detail/:id", element: <ForumPostDetailManagement></ForumPostDetailManagement>}
      ]
    },
    // Route for error
    {
      element: <ErrorLayout/>,
      children: [
        { path: "401", element: <Error401 /> },
        { path: "403", element: <Error403 /> },
        { path: "404", element: <Error404 /> },
        { path: "*", element: <Error404 /> }
      ]
    },
  ]);
  return routes;
}
