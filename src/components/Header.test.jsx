import { render, screen } from "@testing-library/preact"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Header } from "./Header"

// Mock preact-iso
const mockUseLocation = vi.fn()

vi.mock("preact-iso", () => ({
  useLocation: () => mockUseLocation(),
}))

describe("Header", () => {
  beforeEach(() => {
    mockUseLocation.mockReturnValue({ url: "/" })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders navigation links", () => {
    render(<Header />)

    expect(screen.getByRole("link", { name: "Home" })).toBeTruthy()
    expect(screen.getByRole("link", { name: "404" })).toBeTruthy()
  })

  it("marks current page as active", () => {
    const { container } = render(<Header />)
    const homeLink = container.querySelector('a[href="/"]')

    expect(homeLink).toBeTruthy()
    expect(homeLink?.className).toBe("active")
  })

  it("marks non-current page as inactive", () => {
    const { container } = render(<Header />)
    const notFoundLink = container.querySelector('a[href="/404"]')

    expect(notFoundLink).toBeTruthy()
    expect(notFoundLink?.className).not.toBe("active")
  })

  it("marks /404 as active when on that page", () => {
    mockUseLocation.mockReturnValue({ url: "/404" })

    const { container } = render(<Header />)
    const notFoundLink = container.querySelector('a[href="/404"]')

    expect(notFoundLink?.className).toBe("active")
  })
})
