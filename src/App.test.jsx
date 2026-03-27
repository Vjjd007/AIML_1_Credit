import { render, screen } from '@testing-library/react'
import App from './App'

it('renders about and projects headings', () => {
  render(<App />)
  expect(screen.getByText(/about me/i)).toBeInTheDocument()
  expect(screen.getByText(/projects/i)).toBeInTheDocument()
})
