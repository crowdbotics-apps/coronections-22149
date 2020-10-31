import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings165553Navigator from '../features/Settings165553/navigator';
import UserProfile165546Navigator from '../features/UserProfile165546/navigator';
import Settings165545Navigator from '../features/Settings165545/navigator';
import Settings165543Navigator from '../features/Settings165543/navigator';
import SignIn2165541Navigator from '../features/SignIn2165541/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings165553: { screen: Settings165553Navigator },
UserProfile165546: { screen: UserProfile165546Navigator },
Settings165545: { screen: Settings165545Navigator },
Settings165543: { screen: Settings165543Navigator },
SignIn2165541: { screen: SignIn2165541Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
