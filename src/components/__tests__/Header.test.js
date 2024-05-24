import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should render Header Component with login button", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button")
                  //  or
    //  const loginButton = screen.getByText("login")    
                 // or 
     
    // for specifically find login button can use...
     const loginButton =  screen.getByRole("button",{name:'login'})                    

    expect(loginButton).toBeInTheDocument();

})  

it("should render Header Component with Cart items 0 ", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

     const cartItems =  screen.getByText("Cart (0 items)")                    

    expect(cartItems).toBeInTheDocument();

})  

it("should render Header Component with Cart item only irrespective items number", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    //for such cases can use regex. and in regex not to need write exact string, just write some part.
     const cartItems =  screen.getByText(/Cart/)                    

    expect(cartItems).toBeInTheDocument();

})  


// Note: every test cases have isolated render, screen and expect

it("should change login button to logout on click", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

   
    const loginButton =  screen.getByRole("button",{name:'login'})  
     //can use fireEvent for some events click   
     fireEvent.click(loginButton)    
     
     const logoutButton = screen.getByRole("button",{name:'logout'})

    expect(logoutButton).toBeInTheDocument();

})  