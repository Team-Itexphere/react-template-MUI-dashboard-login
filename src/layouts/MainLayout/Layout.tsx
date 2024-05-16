import User from 'models/User';
import React from 'react'

interface Props {
    user?: User | null | undefined;
    reloadUserInfo(): void;
    logout(): void;
    location?: Location;
}

const Layout = (props: Props) => {
    return (
        <div>Layout</div>
    )
}

export default Layout