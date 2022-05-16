import React from 'react'
import Select from './Select'

import {render, fireEvent} from '@testing-library/react'
const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

test('renders all options passed to it', () => {
    const { getAllByRole, getByTestId } = render(<Select options={options} />)

    fireEvent.click(getByTestId('DseSelectButton'))

    expect(getAllByRole('menuitemradio')).toHaveLength(options.length)
})
test('renders options using custom renderOption method if passed as prop', () => {
    const { getAllByTestId, getByTestId } = render(<Select options={options} renderOption={({ option, getOptionRecommendedProps }) => {
        return <li data-testid='CustomRenderOption' {...getOptionRecommendedProps()}>{option.label}</li>
    }} />)

    fireEvent.click(getByTestId('DseSelectButton'))

    expect(getAllByTestId('CustomRenderOption')).toHaveLength(options.length)
})
