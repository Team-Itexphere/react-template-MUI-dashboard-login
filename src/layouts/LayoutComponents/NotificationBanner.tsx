import React, { ReactElement, ReactNode } from 'react'
export type TypeOptions = 'primary' | 'danger';
export type MessageRenderer = (() => ReactNode) | string;

export interface Props {
    isVisible: boolean;
    message: string;
    type?: TypeOptions;
}

const NotificationBanner = (props: Props): ReactElement => {
    const { isVisible, type, message } = props;

    const getClasses = (): string => {
        const visibilityClass: string = isVisible ? '' : '';
        const typeClass = `nzia__notification-banner--${type || 'primary'}`;
        return `${visibilityClass} ${typeClass}`;
    };

    const getMessage = () => {
        if (typeof message === 'string') {
            const multiLineText = message.split('\n').map((item, i) => {
                return (
                    <span key={i}>
                        {item}
                        <br />
                    </span>
                );
            });
            return <>{multiLineText}</>;
        }
    };
    const classes: string = getClasses();
    return <div className={classes}>{getMessage()}</div>;
}

export default NotificationBanner