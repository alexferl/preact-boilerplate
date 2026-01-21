import { render, screen } from "@testing-library/preact"
import { describe, expect, it, vi } from "vitest"
import { Home } from "./index"

vi.mock("@/src/assets/preact.svg", () => ({
  default: "./preact.svg",
}))

describe("Home", () => {
  it("renders Preact logo", () => {
    render(<Home />)
    const logo = screen.getByAltText("Preact logo")
    expect(logo).toBeTruthy()
  })

  it("renders main heading", () => {
    render(<Home />)

    const headings = screen.getAllByRole("heading", {
      level: 1,
      name: /Get Started building Vite-powered Preact Apps/i,
    })
    expect(headings.length).toBeGreaterThan(0)
    expect(headings[0]).toBeTruthy()
  })

  it("renders resource links", () => {
    render(<Home />)

    const learnPreactLinks = screen.getAllByRole("link", { name: /Learn Preact/ })
    const differencesLinks = screen.getAllByRole("link", { name: /Differences to React/ })
    const learnViteLinks = screen.getAllByRole("link", { name: /Learn Vite/ })

    expect(learnPreactLinks.length).toBeGreaterThan(0)
    expect(differencesLinks.length).toBeGreaterThan(0)
    expect(learnViteLinks.length).toBeGreaterThan(0)
  })

  it("resource links open in new tab", () => {
    render(<Home />)
    const links = screen.getAllByRole("link")

    links.forEach((link) => {
      expect(link.getAttribute("target")).toBe("_blank")
      expect(link.getAttribute("rel")).toBe("noreferrer")
    })
  })
})
