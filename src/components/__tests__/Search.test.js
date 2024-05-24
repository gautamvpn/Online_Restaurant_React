import Body from "../../components/Body"
import MOCK_DATA from "../mocks/MockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { render, screen,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
// import { fireEvent } from "@testing-library/react/types"


//give me mock fetch fucntion. it return promise as like original fetch function workk
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should search Res List for cake text inout", async () => {

    //whenever using  a fetch and state then use act(). to wrap render method

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(9)


    //Assertion
    const searchBtn = screen.getByRole("button",{ name:"search"})
    expect(searchBtn).toBeInTheDocument()

    //getting data
    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput,{target:{value:"cake" }})

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(3)
})


it("should filter Top Rated Resturants", async () => {

    //whenever using  a fetch and state then use act(). to wrap render method

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard")

    expect(cardsBeforeFilter.length).toBe(9)


    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Resturants"})

    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard")

    expect(cardsAfterFilter.length).toBe(4)
   
})

