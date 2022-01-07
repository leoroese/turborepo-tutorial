import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from '@src/components/HelloWorld'

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
