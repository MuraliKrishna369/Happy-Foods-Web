import { render, screen } from "@testing-library/react"
import { sum } from "../sum"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Form Tests in my Contact Us Page", () => {
    it("Should load the heading inside Contact Us Component", () => {
    // render the page/component
    render(<Contact/>)
    
    // Query the heading
    const heading = screen.getByRole("heading")

    // Assertion
    expect(heading).toBeInTheDocument();
    })

    it("Should load the button inside Contact Us Component", () => {
        render(<Contact/>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })

    it("Should 2 input elemnts in the Contact Us Component", () => {
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
    })

    it("Should placeholder name inside in the Contact Us Component", () => {
        render(<Contact/>)
        const inputPlaceholder = screen.getByPlaceholderText("name")
        expect(inputPlaceholder).toBeInTheDocument()
    })

    it("Should Submit Text inside in the Contact Us Component", () => {
        render(<Contact/>)
        const buttonText = screen.getByText("Submit")
        expect(buttonText).toBeInTheDocument()
    })
})

it("Sum method should return sum of two numbers", () => {
    const result = sum(3,4)
    expect(result).toBe(7)
})

