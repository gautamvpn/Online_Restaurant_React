import { render, screen } from "@testing-library/react"
import ResturantCard from "../../components/ResturantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant card component with props data",()=>{

    
    render(
        <ResturantCard resData={MOCK_DATA} />
    )

    const name = screen.getByText("Thornhill Bakers");

    expect(name).toBeInTheDocument();
})

// "Should render RestaurantCard component with Promoted label"
