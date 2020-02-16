/**
 * Created by Francisco Junior on 15/02/20.
 *
 * @flow
 */

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
    Image
} from 'react-native';


import Colors from '../../helpers/color';
import loading from "../../assets/loading.gif";
import SchoolService from "../../services/school"


const { width, height } = Dimensions.get("window");


export default class LoadingScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            showListMessage: true,
            itemSchool: '',
            loaderVisible: true
        };

    }

    componentDidMount() {
        const { dispatch, navigate, replace, state } = this.props.navigation;

        var school = state.params.school;
        this.setState({'itemSchool':school});
        const updateLoadingState = newState => {
            this.setState(newState);
        };

        var schoolService = new SchoolService();
        schoolService.listLastMessage(dispatch, navigate, replace, updateLoadingState, school);

    }

    render() {
        return (
            <Fragment style={{backgroundColor:Colors.white}}>
                <ScrollView
                    style={{backgroundColor:Colors.white}}
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <View style={styles.container}>
                        <View style={styles.containerLoading}>
                            <Image source={{uri:this.state.itemSchool.urlIconeContexto}} style={{width, height:300}}/>
                            <Image source={loading} />
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    containerLoading:{
        width,
        height: height - 80,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.white
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
