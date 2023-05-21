import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Activities from './components/Activities';
import NearestAttraction from './components/NearestAttraction';
import Restaurant from './components/Restaurant';
import Contact from './components/Contact';
import Gallery from "./components/Resources/Gallery";
import ImageGallery from "./components/Resources/ImageGallery";
import Testimonials from "./components/Resources/Testimonials";
import Blog from "./components/Resources/Blog";
import AllBlogs from "./components/Resources/AllBlog";

const  App= ()=> {
    

    return (
        <>
          <Nav/>
          <Outlet/>
          <Footer/>
        </>
    
    );
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
               
            },
            {
                path:"/About-us",
                element:<About/>
            },
            {
                path:"/Activities",
                element:<Activities/>
            }
            ,
            {
                path:"/nearest-attraction",
                element:<NearestAttraction/>

            }
            ,
            {
                path:"/restaurant",
                element:<Restaurant/>

            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/gallery",
                element:<Gallery/>,
                
            },
            {
                path:"/testimonials",
                element:<Testimonials/>,
                
            },
            {
                path:"/nearestAttraction",
                element:<NearestAttraction/>,
                
            },
            {
                path:"/blog",
                element:<Blog/>
               
                
            },
            {
                path:"/blog/all_blog",
                element:<AllBlogs/>

            },
            {
                path:"/gallery/:imageUrl",
                element:<ImageGallery />
            }
            
           
        ]

    }
])

export default AppRouter;

