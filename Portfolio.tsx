import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/App Screens/HomeScreen";
import ProjectsScreen from "./src/screens/App Screens/ProjectsScreen";
import SkillsScreen from "./src/screens/App Screens/SkillsScreen";
import ContactScreen from "./src/screens/App Screens/ContactScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Projects" component={ProjectsScreen} />
                <Tab.Screen name="Skills" component={SkillsScreen} />
                <Tab.Screen name="Contact" component={ContactScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}