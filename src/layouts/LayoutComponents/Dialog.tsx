import React, { ReactNode } from 'react'

export type ContentRenderer = () => ReactNode;

export interface Props {
    onClose: () => void;
    isVisible: boolean;
    content: any; // need to change this
}

const Dialog = (props: Props) => {
    const { onClose, content, isVisible } = props;

    const getClasses = (): string => {
        const visibilityClass: string = isVisible ? '' : '';
        return `${visibilityClass}`;
    };
    return (
        <div className={getClasses()}> <div>{content}</div></div>
    )
}

export default Dialog