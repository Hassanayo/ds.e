import React from "react";
import Select from "./Select";
import {withA11y} from '@storybook/addon-a11y'
//css
import '@ds.e/scss/lib/Select.css'

const options = [{
    label: 'Strict Black',
    value: 'black'
}, {
    label: 'Heavenly Green',
    value: 'green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

export default{
    title: 'Molecules|Select',
    decorators: [withA11y]
}
export const Common = () => <Select options={options}/>
export const CustonLabel = () => <Select label="Select a color" options={options}/>
export const RenderOptions = () => <Select options={options} renderOption={({getOptionRecommendedProps, option, isSelected}) => <span {...getOptionRecommendedProps()}>{option.label}{isSelected ? 'Selected' : ''}</span>}/>

