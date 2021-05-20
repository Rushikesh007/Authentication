import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../components/landingPage";
import LoginPageLayout from "../components/login/loginPageLayout";
import RegisterPageLayout from "../components/register/registerLayout";
import ForgetPasswordLayout from "../components/forgetPassword";
import OtpHandling from "../components/otpHandling";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/home";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="landingPage"
      >
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen name="loginPage" component={LoginPageLayout} />
        <Stack.Screen name="forgetPassword" component={ForgetPasswordLayout} />
        <Stack.Screen name="registerPage" component={RegisterPageLayout} />
        <Stack.Screen name="otpHandling" component={OtpHandling} />
        <Stack.Screen name="homeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
