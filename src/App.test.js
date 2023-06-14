import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders Color Picker text', () => {
  render(<App />)
  const headingElement = screen.getByText(/Color Picker/i)
  expect(headingElement).toBeInTheDocument()
})
