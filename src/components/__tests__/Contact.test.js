import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

//grouping test cases
describe("Contact us page Test Case",()=>{

    //instead of test() can write name-> it() also
    it("Should load Contact US component",()=>{
        
        // if want to test for loading then use render method
        render(<Contact/>)
    
        //whatever is render will get the access to the screen
        const heading = screen.getByRole("heading")
    
        //Assertion
        // to check whether it is loaded or not check by this toBeTheDocument().  
        expect(heading).toBeInTheDocument();
    
    })
    
    it("Should load button Contact US component",()=>{
        
        // if want to test for loading then use render method
        render(<Contact/>)
    
        //whatever is render will get the access to the screen
        // these roles are defined by JS and testing library
        // const button = screen.getByRole('button')
        const button = screen.getByText('Submit')
    
        //Assertion
        // to check whether it is loaded or not check by this toBeTheDocument().  
        expect(button).toBeInTheDocument();
    
    })
    
    test("Should load input name Contact US component",()=>{
        
        // if want to test for loading then use render method
        render(<Contact/>)
    
        //whatever is render will get the access to the screen
        // these roles are defined by JS and testing library
        // const button = screen.getByRole('button')
        const inputName = screen.getByPlaceholderText('name')
    
        //Assertion
        // to check whether it is loaded or not check by this toBeTheDocument().  
        expect(inputName).toBeInTheDocument();
    
    })
    
    test("Should load two input name Contact US component",()=>{  
        
        // if want to test for loading then use render method
        render(<Contact/>)
    
        //whatever is render will get the access to the screen
        // these roles are defined by JS and testing library
        // const button = screen.getByRole('button')
    
        // Querying
        // it's return jusx array element
        const inputBoxes = screen.getAllByRole("textbox")
    
        //Assertion
        // to check whether it is loaded or not check by this toBeTheDocument().  
        expect(inputBoxes.length).toBe(2)
        // expect(inputBoxes).toBeInTheDocument();
    
    })

})

