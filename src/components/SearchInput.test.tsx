import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import SearchInput from './SearchInput'

describe('SearchInput', () => {
  test('Enter key press', async () => {
    const onSubmitMock = jest.fn()
    render(<SearchInput onSubmit={onSubmitMock}/>)
    const inputElement = screen.getByPlaceholderText('Search for movies')
    await userEvent.type(inputElement, 'test{enter}')
    expect(onSubmitMock).toHaveBeenCalledWith('test')
  })

  test('search button click', async () => {
    const onSubmitMock = jest.fn()
    render(<SearchInput onSubmit={onSubmitMock}/>)

    const inputElement = screen.getByPlaceholderText('Search for movies')
    await userEvent.type(inputElement, 'test')

    const searchButton = screen.getByRole('button')
    await userEvent.click(searchButton)

    expect(onSubmitMock).toHaveBeenCalledWith('test')
  })
})
