import { lazy } from 'react';
// import RouteConfig from '../interfaces/RouteConfig';

const Login = lazy(() => import('../pages/Session/Login'));
const VerificationCode = lazy(() => import('../pages/Session/VerificationCode'));
const Home = lazy(() => import('pages/Root/Home'));

// const ForgetPassword = lazy(() => import('../pages/Session/ForgetPassword'));
// const ForgetPasswordSuccess = lazy(() => import('../pages/Session/ForgetPasswordSuccess'));
// const AuthenticatorSetup = lazy(() => import('../pages/Session/AuthenticatorSetup'));
// const ResetPassword = lazy(() => import('../pages/Session/ResetPassword'));
const base = '';
/*
  path (required)                       : routing path
  component (required)                  : component to render
  name                                  : route name for redirection
  exact ()                              :
  isPublic                              : Authentication is optional
  isAuthenticatedRestricted             : Authentication user can't access
  authenticatedRestrictedRedirection    : If user is authenticated, redirect to this or to default
*/
export interface RouteConfig {
  path: string;
  name: string;
  component: any; // / please help define what is this
}

const authenticationRoutes: RouteConfig[] = [
  {
    path: `${base}/login`,
    name: 'Login',
    component: Login,
  },
  {
    path: `${base}/verification-code`,
    name: 'verification',
    component: VerificationCode,
  },
  {
    path: `${base}/`,
    name: 'Home',
    component: Home,
  },
  // {
  //   path: `${base}/forget-password`,
  //   name: 'Forget Pasword',
  //   component: ForgetPassword,
  // },
  // {
  //   path: `${base}/forget-password-success`,
  //   name: 'Forget Pasword Success',
  //   component: ForgetPasswordSuccess,
  // },
  // {
  //   path: `${base}/reset-password/:token`,
  //   name: 'Reset Password',
  //   component: ResetPassword,
  // },
  // {
  //   path: `${base}/authenticator-setup`,
  //   name: 'Authenticator Setup',
  //   component: AuthenticatorSetup,
  // },
];

export default authenticationRoutes;
