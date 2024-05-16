import React, { CSSProperties, ReactNode } from 'react'

export type ModalRenderer = () => ReactNode;

export interface Props {
    onClose: () => void;
    isVisible: boolean;
    content: any; // need to change this
    forceUpdateValue?: number;
}

const Modal = (props: Props) => {

    const { onClose, content, isVisible, forceUpdateValue } = props;

    const getClasses = (): string => {
        const visibilityClass: string = isVisible ? '' : '';
        return `${visibilityClass}`;
    };

    const getStyle = (isVisible: boolean): CSSProperties => {
        return isVisible
            ? {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(2px)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
            : {};
    };
    const style = getStyle(isVisible);

    return (
        <div style={style}>
            <div className={getClasses()}></div>
        </div>
    )
}

export default Modal