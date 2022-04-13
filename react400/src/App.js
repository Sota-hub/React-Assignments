import React, { Children, useState } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";

import CustomLink from "./components/CustomLink";
import Chats from "./pages/Chats";
import Messages from "./pages/Messages";

const Home = React.lazy(() => import("./pages/Home"));
const Comments = React.lazy(() => import("./pages/Comments"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const PostPage = React.lazy(() => import("./pages/PostPage"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  const [user, setUser] = useState(false)

  const ProtectedRoute = ({user, children}) => {
    if (user) return children
    return <NotFound />
  }

  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="nav">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          {!user && (
            <>
            <li>
              <CustomLink to="/login">Login</CustomLink>
            </li>
            <li>
              <CustomLink to="/register">Register</CustomLink>
            </li>
            </>
            )}
          <li>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/dashboard" element={
            <ProtectedRoute user={user}>
              <Dashboard name="Sota" />
            </ProtectedRoute>
            } />
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />}>
              <Route path=":id" element={<Chats />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
