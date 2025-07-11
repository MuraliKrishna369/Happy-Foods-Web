import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'
import { TextEncoder, TextDecoder } from 'util';
import { Provider } from 'react-redux';
import appStore from '../../util/appStore'
import "@testing-library/jest-dom"

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

it("should render the light button inside header component", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>)
    const lightButton = screen.getByRole('button', {name: "Light"})
    expect(lightButton).toBeInTheDocument()
})
