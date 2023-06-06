import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KaKaoLogin from './pages/KaKaoLogin';
import Home from './pages/Home';
import StudyMap from './pages/StudyMap';
import Board from './pages/Board/Board';
import Login from './pages/Login';
import Post from './pages/Board/Post';
import NewPost from './pages/Board/NewPost';
import EditPost from './pages/Board/EditPost';
import Mypage from './pages/Mypage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        index:true,
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path: '/oauth/callback/kakao',
        element : <KaKaoLogin/>
      },

      {
        path:'/map/study',
        element: <StudyMap/>
      },

      {
        path:'/board',
        element: <Board/>
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post/new",
        element: <NewPost />,
      },
      {
        path: "/post/edit",
        element: <EditPost />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();