import { ReactElement, ReactNode, Suspense, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
import authenticationRoutes from '../../config/AuthenticationRoutes';
import User from 'models/User';
import { Spinner } from '../LayoutComponents';
import Dialog, { ContentRenderer } from '../LayoutComponents/Dialog';
import Modal, { ModalRenderer } from '../LayoutComponents/Modal';
import NotificationBanner, { MessageRenderer, TypeOptions } from '../LayoutComponents/NotificationBanner';

const loading: ReactElement = <div>Loading ... </div>;
interface Props {
    user?: User | undefined | null;
    reloadUserInfo(): void;
    showPermissionDeniedMessage?: boolean;
    location?: Location;
}
interface CustomRouteProps {
    user?: User | undefined;
    showSpinner(): void;
    hideSpinner(): void;
    showSuccessBanner(messageRenderer: MessageRenderer): void;
    showErrorBanner(messageRenderer: MessageRenderer): void;
    hideNotification(): void;
    reloadUserInfo(): void;
    showDialog(contentRenderer: ContentRenderer): void;
    hideDialog(): void;
    showModal(modalRenderer: ModalRenderer): void;
    hideModal(): void;
}

export default function AuthenticationLayout(props: Props): ReactElement {
    const [modelIsVisible, setmodelIsVisible] = useState(false);
    const [bannerIsVisible, setbannerIsVisible] = useState(false);
    const [bannerMessage, setbannerMessage] = useState<string>('');
    const [type, setType] = useState<TypeOptions | undefined>('primary');
    const [dialogIsVisible, setdialogIsVisible] = useState(false);
    const [dialogContent, setdialogContent] = useState<any>();
    const [modalIsVisible, setmodalIsVisible] = useState(false);
    const [modalContent, setmodalContent] = useState<any>();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [user, setUser] = useState<User | null | undefined>();

    useEffect(() => {
        if (props.showPermissionDeniedMessage) {
            showErrorBanner('Permission denied');
            navigate('/');
        }
        init(props);
    }, [props.showPermissionDeniedMessage]);

    useEffect(() => init(props), [props]);

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     }
    // }, []);

    const init = (props: Props) => {

    };
    // let autoCloseId: string = '';
    // const startAutoClose = () => {
    //     const id: string = uuid();
    //     autoCloseId = id;
    //     setTimeout(() => {
    //         if (autoCloseId === id) {
    //             hideDialog();
    //         }
    //     }, 5000);
    // };
    const showSpinner = () => {
        setmodelIsVisible(true);
    };
    const hideSpinner = () => {
        setmodelIsVisible(false);
    };
    const showDialog = (contentRenderer: ContentRenderer) => {
        setdialogIsVisible(true);
        setdialogContent(contentRenderer);
    };
    const hideDialog = () => {
        setdialogIsVisible(false);
    };

    const dialogOnclose = () => {
        setdialogIsVisible(false);
    };
    const showModal = (contentRenderer: ModalRenderer) => {
        setmodalIsVisible(true);
        setmodalContent(contentRenderer);
    };
    const hideModal = () => {
        setmodalIsVisible(false);
    };
    const modalOnclose = () => {
        setmodalIsVisible(false);
    };
    const showSuccessBanner = (messageRenderer: string) => {
        setbannerIsVisible(true);
        setType('primary');
        setbannerMessage(messageRenderer);
        setTimeout(() => {
            setbannerIsVisible(false);
        }, 3000);
    };
    const showErrorBanner = (messageRenderer: string) => {
        setbannerIsVisible(true);
        setType('danger');
        setbannerMessage(messageRenderer);
        setTimeout(() => {
            setbannerIsVisible(false);
        }, 3000);
    };
    const hideNotification = () => {
        setbannerIsVisible(false);
    };
    const getRouteProps = (): CustomRouteProps => {
        return {
            user: props.user ? props.user : undefined,
            showSpinner: () => showSpinner(),
            hideSpinner: () => hideSpinner(),
            showSuccessBanner: (messageRenderer: string) => showSuccessBanner(messageRenderer),
            showErrorBanner: (messageRenderer: string) => showErrorBanner(messageRenderer),
            hideNotification: () => hideNotification(),
            reloadUserInfo: props.reloadUserInfo,
            showDialog: (contentRenderer: ContentRenderer) => showDialog(contentRenderer),
            hideDialog: () => hideDialog(),
            showModal: (modalRenderer: ModalRenderer) => showModal(modalRenderer),
            hideModal: () => hideModal(),
        };
    };

    const getRoutes = (): ReactNode[] => {
        const routeProps: CustomRouteProps = getRouteProps();
        const routes: ReactNode[] = [];
        for (const route of authenticationRoutes) {
            const { path, name } = route;
            routes.push(<Route key={name} path={path} element={<route.component {...props} {...routeProps} />} />);
        }
        return routes;
    };

    return (
        <div >
            <Suspense fallback={loading}>
                <main>
                    <div >
                        <Routes>
                            {getRoutes()}
                            <Route path='/' element={<Navigate to='/login' replace />} />
                        </Routes>
                    </div>
                </main>
            </Suspense>
            {/* <Spinner isVisible={modelIsVisible} />
            <NotificationBanner type={type} isVisible={bannerIsVisible} message={bannerMessage} />
            <Dialog onClose={dialogOnclose} isVisible={dialogIsVisible} content={dialogContent} />
            <Modal isVisible={modalIsVisible} content={modalContent} onClose={modalOnclose} /> */}
        </div>
    );
}
