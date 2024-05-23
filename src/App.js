import React, { lazy,Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cartt from "./components/Cartt";
// Provider is kind of bridge to connect the redux into react

// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
// const resId = useParams()

const[userName,setUserName] = useState();

//authentication
useEffect(()=>{
   //Make an API call username and password
   const data = {
      name:"Vipin gautam"
   };
   setUserName(data.name)
},[])

//Providing app store
   return (
      <Provider store={appStore}>
      <UserContext.Provider value = {{loggedInUser:userName,setUserName}}>
      <div className="app">
         <Header />
         <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>
   )
}

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout/>,
      children:[
         {
         path:'/',
         element: <Body/>
         },
         {
            path: '/about',
            element:<About/>
         },
         {
            path:'/contact',
            element: <Contact/>
         },
         {
            path:"/restaurants/:resId",
            element: <ResturantMenu/>

         },
         {
            path:"/cart",
            element: <Cartt/>

         },
         {
            path:'/grocery',
            element: <Suspense fallback={<h1>Loading........</h1>} > <Grocery/> </Suspense> 
         }
      ],
      errorElement: <Error/>
   },
])


const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>)