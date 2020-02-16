/**
 * Created by Francisco Junior on 16/02/20.
 *
 * @flow
 */

import React from "react";
import { StyleSheet } from "react-native";
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Strings from '../helpers/localization';
import Colors from '../helpers/color';
import LoginScreen from '../screens/login';
import ListScreen from '../screens/school/list';
import LoadingScreen from '../screens/school/loadingmessage';
import MessageScreen from '../screens/school/message';

const MainNavigation = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            drawerLockMode: 'locked-closed',
            header: null
        })
    },
    ListSchool: {
        screen: ListScreen,
        navigationOptions: () => ({
            title: Strings.titleHeadListSchool,
            headerTintColor: Colors.white,
            headerStyle: styles.headerBlue,
            headerTitleStyle: {color: Colors.white},
            drawerLockMode: 'locked-closed'
        })
    },
    LoadingScreen: {
        screen: LoadingScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    MessageScreen: {
        screen: MessageScreen,
        navigationOptions: () => ({
            title: Strings.titleHeadListMessage,
            headerTintColor: Colors.white,
            headerTitleStyle: {color: Colors.white},
            drawerLockMode: 'locked-closed'
        })
    }

}, {
    initialRouteName: "Login",
    headerMode: 'float',
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
});


const styles = StyleSheet.create({

    headerBlue: {
        backgroundColor: Colors.headListSchool,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        elevation: 0,
        shadowOpacity: 0
    }
});

export default createAppContainer(MainNavigation);
