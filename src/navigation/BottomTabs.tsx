import TabIcon from "../components/TabIcon/TabIcon";
import icons from "../constants/icons";
import Explore from "../screen/Explore";
import Home from "../screen/Home";
import Profile from '../screen/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 86,
            borderTopWidth: 1,
            borderColor: '#8B5DFF1A',
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                activeIcon={icons.homeActiveIcon}
                inActiveIcon={icons.homeIcon}
                label="Home"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                activeIcon={icons.searchActiveIcon}
                inActiveIcon={icons.tabSearchIcon}
                label="Explore"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                activeIcon={icons.profileActiveIcon}
                inActiveIcon={icons.tabProfileIcon}
                label="Profile"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
};
export default BottomTabs;
