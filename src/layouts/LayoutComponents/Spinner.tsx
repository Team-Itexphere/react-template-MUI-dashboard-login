import React from 'react'

export interface Props {
    isVisible: boolean;
}

export interface State {
    isVisible: boolean;
}

const Spinner = (props: Props) => {
    const { isVisible } = props;
    return (
        <div>Spinner</div>
    )
}

export default Spinner