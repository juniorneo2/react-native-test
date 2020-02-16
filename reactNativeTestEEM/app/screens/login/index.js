
/**
 * Created by Francisco Junior on 15/02/20.
 *
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DropDownHolder from '../../helpers/dropdownholder';
import Strings from '../../helpers/localization';
import Colors from '../../helpers/color';
import LoginService from "../../services/login"



const { width, height } = Dimensions.get("window");


export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            password: null,
            loaderVisible: false
        };
    }
    componentDidMount() {

    }

    _onLoginPress() {
        const { dispatch, navigate, replace } = this.props.navigation;

        const updateLoadingState = newState => {
            this.setState(newState);
        };

        if (this.state.user && this.state.password) {
            var loginService = new LoginService();
            loginService.login(dispatch, navigate, replace, updateLoadingState, this.state.user, this.state.password);
        } else {
            DropDownHolder.alert('error', Strings.titleHeadLogin, Strings.fillTheFieldsAccessAccount);
        }
    }

    render() {
        return (
            <LinearGradient colors={Colors.linearColor} style={styles.linearGradient}>
                <Fragment>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        >
                        <View style={styles.container}>
                            <View style={styles.containerFillTheFields}>
                                <Text
                                    style={styles.textFillTheFields}
                                >
                                    {Strings.fillTheFields}
                                </Text>
                            </View>
                            <View style={styles.containerForm}>
                                <View style={[styles.containerInput, styles.containerBorderLogin]}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholderTextColor={Colors.lighter}
                                        placeholder={Strings.user}
                                        autoCapitalize = 'none'
                                        onChangeText={user => this.setState({ user})}
                                    />
                                </View>
                                <View style={[styles.containerInput, styles.containerBorderPassword]}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholderTextColor={Colors.lighter}
                                        placeholder={Strings.password}
                                        secureTextEntry={true}
                                        autoCapitalize = 'none'
                                        onChangeText={password => this.setState({ password})}
                                    />
                                </View>
                            </View>

                            <View style={styles.containerForm}>
                                <TouchableOpacity
                                    onPress={this._onLoginPress.bind(this)}
                                    style={[styles.touchBaseButton]}
                                    title={Strings.login}
                                >
                                    <Text style={[styles.textLogin]}>
                                        {Strings.login}
                                    </Text>
                                </TouchableOpacity>
                                {(this.state.loaderVisible &&
                                <View style={styles.containerLoading}>
                                    <ActivityIndicator size="small" color={Colors.white} />
                                </View>)}
                            </View>
                            <View style={styles.containerOption}>
                                <View style={styles.textOptionLeft}>
                                    <TouchableOpacity
                                    >
                                        <Text style={[styles.textOptions]}>
                                            {Strings.forgetPassword}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.optionDiv}>
                                    <Text style={styles.textOptionDiv}>|</Text>
                                </View>
                                <View style={styles.textOptionRight}>
                                    <TouchableOpacity
                                    >
                                        <Text style={[styles.textOptions]}>
                                            {Strings.privacyPolicy}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.containerPhone}>
                                <TouchableOpacity
                                    style={[styles.touchBaseButtonPhone]}
                                    title={Strings.login}
                                >
                                    <Text style={[styles.textLoginPhone]}>
                                        {Strings.loginPhone}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </Fragment>
            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    containerSafeArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        width,
        height: height - 45
    },
    containerLoading: {
        marginTop: 10
    },
    containerFillTheFields: {
        width,
        justifyContent: "flex-start",
        marginTop: 170,
    },
    containerForm: {
        justifyContent: "flex-start",
        width: width - 40,
        marginTop: 30,
    },
    containerInput: {
        width: width - 40,
        flexDirection: 'row',
        borderColor: Colors.white,
    },
    containerBorderLogin: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    containerBorderPassword: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    textInput:{
      flex:1,
      marginLeft: 6,
      marginRight: 6,
      height: 50,
      fontSize: 18,
      color: Colors.white,
    },
    textFillTheFields: {
        textAlign: "left",
        fontSize: 20,
        color: Colors.white,
        width: 300,

    },
    touchBaseButton: {
        height: 50,
        borderRadius: 5,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLogin:{
        color: Colors.blue,
        fontSize: 20,
    },

    textLoginPhone:{
        color: Colors.white,
        fontSize: 20,
    },

    containerOption: {
        flexDirection: 'row',
        flex:1,
        width: width - 40,
        marginTop: 30,
        justifyContent: 'center',

    },
    textOptions:{
        color: Colors.white,
        fontSize: 13,
    },
    textOptionLeft:{
        width: 150,
        alignItems: "flex-start",
    },
    optionDiv:{
        width: 10,
        marginLeft: 5,
        marginRight: 5
    },
    textOptionDiv:{
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
    },
    textOptionRight:{
        width: 145,
        alignItems: "flex-start",

    },
    containerPhone: {
        flex: 1,
        justifyContent: 'flex-end',
        width: width - 40,
        marginBottom: 36

    },
    touchBaseButtonPhone: {
        height: 50,
        borderRadius: 5,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.white,
        borderWidth: 1
    },


});



