import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=> fetch("https://run.mocky.io/v3/37881ade-8d55-4a11-8a32-f168616768d3"),
          // loader: ()=> fetch("https://eduflex1.free.beeceptor.com"),
          element: <Home></Home>
        },
        {
          path:'/services',
          loader: ()=> fetch("https://run.mocky.io/v3/37881ade-8d55-4a11-8a32-f168616768d3"),
          element: <Services></Services>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path:'/about',
          element: <About></About>
        }
        
      ]
    },
    {
      path: '*',
      element: <h2>404 error</h2>
    }
    
  ])
  return (
    
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
