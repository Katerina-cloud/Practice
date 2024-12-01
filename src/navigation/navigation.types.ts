export enum APP_ROUTES {
  SPLASH = 'SPLASH',
  HOME = 'HOME',
  TOOLS = 'TOOLS',
  AUTH = 'AUTH',
  GQL_ERROR = 'GQL_ERROR',
  LANDING_GQL_ERROR = 'LANDING_GQL_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  SERVER_UNREACHABLE = 'SERVER_UNREACHABLE',
  MAIN = 'MAIN_STACK',
}

export type RootStackParamList = {
  [APP_ROUTES.SPLASH]: undefined;
  [APP_ROUTES.AUTH]: undefined;
  [APP_ROUTES.MAIN]: undefined;
  [APP_ROUTES.TOOLS]: undefined;
};

export type TabNavigatorParamList = {
  [APP_ROUTES.HOME]: undefined;
  [APP_ROUTES.TOOLS]: undefined;
};
