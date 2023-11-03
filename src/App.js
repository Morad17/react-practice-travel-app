import { Outlet, createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Footer from './components/Footer'
import Register from './pages/Register';
import Navbar from './components/navbar';

const Layout = () => {
  return(
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
  
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     { 
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    }
    ]
  }
])


function App() {

  
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>

  );
}

export default App;
