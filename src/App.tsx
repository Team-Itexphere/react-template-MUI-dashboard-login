import { ReactNode, useEffect, useState } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import User from 'models/User';
import appConfig from 'config/app';
import userTokenStorage from 'storage/UserTokenData';
import { ModuleType } from 'models/Module';
import { Loading } from 'components';
import { AuthenticationLayout, MainLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface Props { }
export interface RouterProps {
  user?: User | undefined;
  reloadUserInfo(): void;
  logout(): void;
}

function App(props: Props) {

  const { time } = useSelector((state: RootState) => state.settingsStore);

  console.log('time::', time);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [user, setUser] = useState<User | null | undefined>();
  const [permissionDenied, setPermissionDenied] = useState(false);

  if (appConfig.DEBUG) {
    console.log('App Config: ', appConfig);
  }

  useEffect(() => {
    initSystem();
    initUser();
    document.title = `${appConfig.THEME_DIGITAL_CURRENCY_NAME} User Onboarding Module`;
  }, []);

  const initSystem = async () => {
    // const systemInfo: SystemInfo = await SystemApi.info();
    // const { districts, industries } = systemInfo.metadata;
    // setDistricts(districts);
    // setIndustries(industries);
  };

  const initUser = async () => {
    await reloadUserInfo();
    setTitleTag();
  };

  const getHost = () => {
    const host: string = window.location.host.split('.')[0];
    return host;
  };

  // for dev only
  const getEnvType = () => {
    console.log('process.env.REACT_APP_ENV_TYPE', process.env.REACT_APP_ENV_TYPE);

    return process.env.REACT_APP_ENV_TYPE;
  };

  const setTitleTag = () => {
    document.title = 'Merchant Service Portal';
  };

  const reloadUserInfo = async () => {
    const token: string = userTokenStorage.get();
    if (!token) {
      setUser(undefined);
      setIsUserLoaded(true);
      return;
    }
    try {
      // const currentUser: User = await SessionApi.me();

      // setUser(currentUser);
      // setIsUserLoaded(true);
    } catch (err: any) {
      if (err.type !== 'GatewayTimeout') {
        userTokenStorage.clear();
        setUser(undefined);
        setIsUserLoaded(true);
      } else {
        setUser(undefined);
        setIsUserLoaded(false);
      }
    }
  };

  const isReady = () => {
    return isUserLoaded;
  };

  const logout = async () => {
    setPermissionDenied(false);
    userTokenStorage.clear();
    await reloadUserInfo();
  };

  const getUserModules = () => {
    if (user && user.userGroups) {
      return user.userGroups.reduce((modules: ModuleType[], userGroup) => {
        const module = userGroup.module.type;
        if (modules.includes(module)) {
          return modules;
        }
        return [...modules, module];
      }, []);
    }
  };

  const checkPermission = () => {
    let isAllowed = true;
    // future we may need to check this to allow users based on roles

    if (!isAllowed) {
      setPermissionDenied(true);
      userTokenStorage.clear();
      reloadUserInfo();
    }
    return isAllowed;
  };

  const getRouterProps = () => {
    return {
      user,
      reloadUserInfo: () => reloadUserInfo(),
      logout: () => logout(),
    };
  };

  const renderAuthenticationRoutes = () => {
    if (user || appConfig.BYPASS_AUTHENTICATION) {
      return null;
    }
    const routerProps = getRouterProps();
    return (
      <Route
        path='/*'
        element={<AuthenticationLayout {...props} {...routerProps} showPermissionDeniedMessage={permissionDenied} />}
      />
    );
  };

  const renderMainRoutes = (): ReactNode => {
    if (!user && !appConfig.BYPASS_AUTHENTICATION) {
      return null;
    }
    checkPermission();
    const routerProps = getRouterProps();
    return <Route path='/*' element={<MainLayout {...props} {...routerProps} />} />;
  };

  if (!isReady()) {
    return <Loading />;
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {renderAuthenticationRoutes()}
          {renderMainRoutes()}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
