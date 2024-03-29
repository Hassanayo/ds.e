import React from 'react'
import { FontSize } from '@ds.e/foundation'

export interface TextProps {
    size?: keyof typeof FontSize;
    children: string;
    
}

const Text: React.FunctionComponent<TextProps> = ({size = FontSize.base, children}) => {
    const className = `dse-text dse-text-${size}`

    return (<p className={className}>{children}</p>)
}

export default Text