import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons from a library
import HomeScreen from './HomeScreen';
import Explore from './explore';
import Saved from './saved';
import Settings from './settings';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean, color: string, size: number) => {
    let iconName: string;

    switch (routeName) {
        case 'home':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'explore':
            iconName = focused ? 'compass' : 'compass-outline';
            break;
        case 'saved':
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            break;
        case 'settings':
            iconName = focused ? 'settings' : 'settings-outline';
            break;
        default:
            iconName = 'circle';
            break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
};

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                animation: 'fade',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff', // Background color of the tab bar
                    borderTopWidth: 0, // Remove top border
                    height: 70, // Height of the tab bar
                },
                tabBarLabelStyle: {
                    fontSize: 12, // Font size of the tab labels
                    fontWeight: 'bold', // Font weight of the tab labels
                },
                tabBarActiveTintColor: 'lightblue', // Color of the active tab label
                tabBarInactiveTintColor: '#888', // Color of the inactive tab label
                tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
            })}
        >
            <Tab.Screen  name="home" component={HomeScreen} />
            <Tab.Screen  name="explore" component={Explore} />
            <Tab.Screen  name="saved" component={Saved} />
            <Tab.Screen name="settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default BottomTabs;