import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About"
import Body from "./components/Body";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
  





const AppLayout =() =>{
    return(
        
        <div className="app">
            {/* Header */}
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resID",
                element:<Restaurant/>
            }
        ],
        errorElement: <Error/>,
    },
    

]);
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);