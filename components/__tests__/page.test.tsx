import { render, screen } from "@testing-library/react";
import Page from "../../app/page";

describe("Page Component", () => {
    it("should render the main heading with student name", () => {
        render(<Page />);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Fahreza Pratama Hidayat");
    });

    it("should render the student subtitle", () => {
        render(<Page />);
        expect(
            screen.getByText("Software Engineering Student")
        ).toBeInTheDocument();
    });

    it("should render the NIM information", () => {
        render(<Page />);
        expect(screen.getByText("2206144")).toBeInTheDocument();
        expect(screen.getByText("NIM")).toBeInTheDocument();
    });

    it("should render university information", () => {
        render(<Page />);
        expect(
            screen.getByText("Institut Teknologi Garut")
        ).toBeInTheDocument();
        expect(screen.getByText("Garut, Indonesia")).toBeInTheDocument();
    });

    it("should render program study information", () => {
        render(<Page />);
        expect(screen.getByText("Software Engineering")).toBeInTheDocument();
        expect(
            screen.getByText("Bachelor's Degree Program")
        ).toBeInTheDocument();
    });

    it("should render student status", () => {
        render(<Page />);
        expect(screen.getByText("Active Student")).toBeInTheDocument();
        expect(screen.getByText("Currently enrolled")).toBeInTheDocument();
    });

    it("should render focus areas section", () => {
        render(<Page />);
        expect(screen.getByText("Focus Areas")).toBeInTheDocument();
        expect(screen.getByText("Web Development")).toBeInTheDocument();
        expect(screen.getByText("Software Design")).toBeInTheDocument();
        expect(screen.getByText("Database Systems")).toBeInTheDocument();
        expect(screen.getByText("Programming")).toBeInTheDocument();
    });

    it("should render footer with copyright", () => {
        render(<Page />);
        expect(
            screen.getByText("© 2025 Fahreza Pratama Hidayat")
        ).toBeInTheDocument();
    });

    it("should have proper semantic structure", () => {
        render(<Page />);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
        expect(main).toHaveClass("min-h-screen");
    });
});
