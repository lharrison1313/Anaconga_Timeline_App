import ExploreScreen from "./ExploreScreen";
import TimelineScreen from "./TimelineScreen"
import React from "react"
import {createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const ExploreStack = createStackNavigator();
function ExploreStackScreen(){
    return(
        <ExploreStack.Navigator>
            <ExploreStack.Screen name = "Explore" component = {ExploreScreen}/>
            <ExploreStack.Screen name = "Timeline" component = {TimelineScreen}/>
        </ExploreStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();

class App extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <BottomTab.Navigator initialRouteName = "Explore">
                    <BottomTab.Screen name = "Explore" component = {ExploreStackScreen}/>
                </BottomTab.Navigator>
            </NavigationContainer>
        )
    }
}


export default App