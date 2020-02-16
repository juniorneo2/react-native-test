/**
 * Created by Francisco Junior on 15/02/20.
 *
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    FlatList,
    Text,
    Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconNews from 'react-native-vector-icons/FontAwesome';
import IconMenu from 'react-native-vector-icons/Entypo';
import IconrCar from 'react-native-vector-icons/Ionicons';
import IconrSimple from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../../helpers/color';
import logo from "../../assets/icon/icon-professor.png";

var moment = require('moment');



const { width } = Dimensions.get("window");

const Tab = createMaterialBottomTabNavigator();

export default class MessageScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            showListMessage: true,
            feed: []
        };

    }

    componentDidMount() {
        this.setState({
           feed: this.props.navigation.state.params.feed
        });
    }

    message({ state, descriptors, navigation }) {
        return (
            <Fragment style={{backgroundColor:Colors.white}}>
                <ScrollView
                    style={{backgroundColor:Colors.white}}
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <View style={styles.container}>
                        <View style={styles.containerHead}>
                            <Text style={styles.textHead}>Teste Zero</Text>
                        </View>

                        <View style={styles.containerListMessage}>
                            <FlatList
                                data={this.state.feed}
                                renderItem={({item}) =>
                                    <View style={styles.containerItemMessage}>
                                        <View style={styles.containerData}>
                                            <Text style={styles.textData}>{moment(item.data).format('DD/MM HH:mm')}</Text>
                                        </View>
                                        <View style={styles.containerHeadInfo}>
                                            <View style={styles.containerIcon}>
                                                <Image source={logo} />
                                            </View>
                                            <View style={styles.containerInfo}>
                                                <View><Text style={styles.textRemetente}>{item.remetente}</Text></View>
                                                <View><Text style={styles.textSumario}>Por: {item.sumario}</Text></View>
                                            </View>
                                        </View>
                                        <View>
                                            <Image source={{uri:item.urlPublica}} style={{width, height:250}}/>
                                        </View>

                                    </View>
                                }
                            />

                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        );
    }

    render (){

        return (
            <NavigationContainer>
                <Tab.Navigator
                    barStyle={{ backgroundColor: Colors.greyBottomTabMessage, opacity: 0.7}}
                    tabBarColor={Colors.white}
                    activeBackgroundColor={Colors.white}
                >
                    <Tab.Screen name="Home" component={props => <this.message {...props} />}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <IconNews name="newspaper-o" size={22} color="#000" />
                            )
                        }}
                    />

                    <Tab.Screen name="Escrever" component={props => <this.message {...props} />}
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <IconrSimple name="pencil" size={22} color="#000" />
                                    )
                                }}
                    />

                    <Tab.Screen name="Settings" component={props => <this.message {...props} />}
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <IconMenu name="menu" size={22} color="#000" />
                                    )
                                }}
                    />

                    <Tab.Screen name="Chegando" component={props => <this.message {...props} />}
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <IconrCar name="ios-car" size={22} color="#000" />
                                    )
                                }}
                    />

                    <Tab.Screen name="Perfil" component={props => <this.message {...props} />}
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <IconrSimple name="user" size={22} color="#000" />
                                    )
                                }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    containerHead: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: Colors.divItemMessage,
        borderBottomWidth: 5,
        alignItems: 'center',
        paddingLeft: 15,
        paddingBottom: 10,
    },
    textHead : {
      fontSize: 20,
      color: Colors.titleHeadMessage
    },
    containerListMessage: {
        width,
        justifyContent: "flex-start",
    },
    containerItemMessage: {
        borderBottomColor: Colors.divItemMessage,
        paddingBottom: 30,
        borderBottomWidth: 5
    },
    contentContainerStyle: {
        height: 100
    },
    containerData: {
        flex: 1,
        paddingTop: 2,
        paddingLeft: 5,
        paddingBottom: 2,
        flexDirection: 'row-reverse'
    },
    textData: {
        fontSize: 11,
        color: Colors.grey
    },
    containerHeadInfo: {
        paddingLeft: 5,
        flex: 1,
        flexDirection: 'row'
    },
    containerIcon: {
        width: 70
    },
    containerInfo: {
        width: 300,
        justifyContent: 'center',
    },
    textRemetente: {
        fontSize: 18,
        color: Colors.remetente
    },
    textSumario: {
        fontSize: 13,
        color: Colors.grey
    }



});
