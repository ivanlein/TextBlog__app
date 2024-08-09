import React, { useEffect, useState } from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Navbar from './components/UI/Navbar/Navbar';
import PostIdPage from './pages/PostIdPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoure';
import Login from './pages/Login';
import { AuthContext } from './components/context';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      setLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route element={<PrivateRoute />}>
              
              <Route exact path="/posts" element={<Posts />}/>
              <Route exact path="/posts/:id" element={<PostIdPage />}/>
              
            </Route>
           
          <Route path='/login' element={<Login />} />
          <Route path="" element={<HomePage />}/>
          <Route path="*" element={<Error />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter> 
    </AuthContext.Provider>
  )
}

export default App;