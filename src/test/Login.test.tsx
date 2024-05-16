import { fireEvent, render, screen } from "@testing-library/react";
import Login from "pages/Session/Login";

describe(Login, () => {
    it("render login page", () => {
        render(<Login />);
        expect(screen.getByText("Welcome to The Merchant Portal")).toBeInTheDocument();
    })

    it("submit the form", () => {
        const { getByRole } = render(<Login />)
        const submitBtn = getByRole("button", { name: "Sign In" })
        fireEvent.click(submitBtn)
    })

    it("validate email input field", () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText("jhondoe@gmail.com");
        fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
        expect(emailInput).toHaveValue('test@gmail.com')
    })

    it("handle password input field", () => {
        render(<Login />);
        const passwordInput = screen.getByPlaceholderText("*****");
        fireEvent.change(passwordInput, { target: { value: '1234' } })
        expect(passwordInput).toHaveValue('1234')
    })

    it("click forget pw link", () => {
        render(<Login />);
        const forgetPWLink = screen.getByText("Forgot Password?")
        fireEvent.click(forgetPWLink)
    })
})





// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import Login from 'pages/Session/Login';


// test('renders login page', () => {
//     render(<Login />);
//     // Assert that the login page renders without crashing
//     expect(screen.getByText(/Welcome to The Merchant Portal/i)).toBeInTheDocument();
// });

// test('validates email input field', () => {
//     render(<Login />);
//     // const emailInput = screen.getByTitle('Your E-mail Address');
//     const emailInput = screen.getByPlaceholderText('jhondoe@gmail.com');

//     // Test typing a valid email address
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     expect(emailInput).toHaveValue('test@example.com');
//     expect(screen.queryByText(/Please enter a valid email address/i)).toBeNull();

//     // Test typing an invalid email address
//     fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
//     expect(emailInput).toHaveValue('invalid-email');
//     expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
// });

// test('handles password input field', () => {
//     render(<Login />);
//     const passwordInput = screen.getByTitle('Password');

//     // Test typing in the password
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     expect(passwordInput).toHaveValue('password123');
// });

// test('submits the form', () => {
//     render(<Login />);
//     const signInButton = screen.getByRole('button', { name: /Sign In/i });

//     // Mock API call if necessary and simulate form submission
//     // fireEvent.click(signInButton);
//     // expect(mockedAPICall).toHaveBeenCalledTimes(1);
// });

// test('clicks forgot password link', () => {
//     render(<Login />);
//     const forgotPasswordLink = screen.getByText(/Forgot Password\?/i);

//     // Test clicking the forgot password link
//     fireEvent.click(forgotPasswordLink);
//     // Assert expected behavior after clicking the link
// });
