import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderCust from "../screens/OrderCustScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ForecastMenu from "../screens/ForecastMenu";
 import AllMasterMenu from '../screens/AllMasterMenu';
import Cust from "../screens/custmast/Cust";
import AddCust from "../screens/custmast/AddCust";
import Details from "../screens/custmast/details";

 const Stack= createStackNavigator();

function AppNavigator(){

    return (
    <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
         name="Login" 
         component={LoginScreen}
         options={{ headerShown:false}}
         ></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>

            <Stack.Screen name="ORDERS" component={OrderCust}></Stack.Screen>

            <Stack.Screen name="corders" component={OrdersScreen}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}   ></Stack.Screen>
            <Stack.Screen name="forecast" component={ForecastMenu}    ></Stack.Screen>
            <Stack.Screen name="AllMasterMenu" component={AllMasterMenu}    ></Stack.Screen>
            <Stack.Screen name="Cust" component={Cust}    ></Stack.Screen>
            <Stack.Screen name="AddCust" component={AddCust}    ></Stack.Screen>
            <Stack.Screen name="details" component={Details}    ></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>

    );
}

export default AppNavigator;