import { fireEvent, render, screen } from "@testing-library/react";
import VerificationCode from "pages/Session/VerificationCode";

describe(VerificationCode, () => {
    it("render VerificationCode page", () => {
        render(<VerificationCode />);
        expect(screen.getByText("Verification")).toBeInTheDocument();
    })

    it("resend code", () => {
        render(<VerificationCode />);
        const resendCodeLink = screen.getByText("Resend Code")
        fireEvent.click(resendCodeLink)
    })

    it("submit the form", () => {
        const { getByRole } = render(<VerificationCode />)
        const submitBtn = getByRole("button", { name: 'Sign In' });
        fireEvent.click(submitBtn)
    })
})