
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import ThemeContext from "./util/ThemeContext";
import { useState} from "react";
import { Provider} from "react-redux";
import appStore from "./util/appStore";



import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router";


const AppLayout = () => {
    const [theme, setTheme] = useState(false)
   
    
    return (
        <Provider store={appStore}>
        <ThemeContext.Provider value={{darkTheme: theme, updateTheme: setTheme }}>
           
                <Header/>
                <Outlet/> 
            
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
                element: <About/>
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
