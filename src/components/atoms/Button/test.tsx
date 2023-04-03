import { render, screen } from '@testing-library/react'
import Button from '.'

describe('<Button/>', () => {
  it('should render a primary variant button component, match snapshot and byrole', () => {
    const { container } = render(<Button variant="primary" />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a secondary variant button component, match snapshot and byrole', () => {
    const { container } = render(<Button variant="secondary" />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
