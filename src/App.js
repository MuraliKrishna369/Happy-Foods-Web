import React ,{lazy, Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import ThemeContext from "./util/ThemeContext";
import { useState, useContext } from "react";
import { Provider} from "react-redux";
import appStore from "./util/appStore";




import {
  createBrowserRouter,
  RouterProvider, Outlet} from "react-router-dom";




const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [theme, setTheme] = useState(false)
    const [userName, setUserName] = useState("Murali")
    const {darkTheme} = useContext(ThemeContext)

    return (
        <Provider store={appStore}>
        <ThemeContext.Provider value={{darkTheme: theme, setTheme, userName, setUserName}}>
            <div>
                <Header/>
                <Outlet />  {/**in the outlet replaced with our children elements based on their path */}
            </div>
        </ThemeContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
    
])

// Root Element
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRouter}/>)
