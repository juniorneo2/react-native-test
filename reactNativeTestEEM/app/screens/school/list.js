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
    ScrollView
} from 'react-native';

import { ListItem, Avatar, SearchBar } from 'react-native-elements'

import Strings from '../../helpers/localization';
import Colors from '../../helpers/color';



const { width } = Dimensions.get("window");


export default class ListScreen extends Component {

    constructor(props) {
        super(props);
        console.log("Tela Lista");

        this.state = {
                    listItem: [] ,
                    listItemFirst: [],
                    search: ''
              };

    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.conteudo);
        this.setState({
            listItem: this.props.navigation.state.params.conteudo,
            listItemFirst: this.props.navigation.state.params.conteudo
        });

    }

    _searchFilterFunction(text) {
        if(text.length > 0) {
            const newData = this.state.listItem.filter(function (item) {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            this.setState({
                listItem: newData,
                search: text
            });

        } else {
            this.setState({
                listItem: this.state.listItemFirst,
                search: text
            });
        }

    }

    render() {

        return (
            <Fragment>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <View style={styles.container}>
                        <View>
                            <SearchBar
                                placeholder={Strings.searchBar}
                                onChangeText={text => this._searchFilterFunction(text)}
                                containerStyle={styles.containerSearchBar}
                                inputContainerStyle={styles.inputContainerSearchBarStyle}
                                value={this.state.search}

                            />
                        </View>
                        <View style={styles.containerListItem}>
                            {
                                this.state.listItem.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        title={l.nomeAplicacao}
                                        subtitle={l.contexto}
                                        containerStyle={styles.contentContainerStyle}
                                        onPress={() => {this.props.navigation.navigate("LoadingScreen", {"school": l})}}
                                        leftAvatar={<Avatar rounded large source={{uri: l.urlIconeContexto}} height={60} width={60} />}
                                        bottomDivider
                                        chevron
                                    />
                                ))
                            }

                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        );
    }

}

const styles = StyleSheet.create({
    containerSearchBar: {
        backgroundColor: Colors.searchBar,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputContainerSearchBarStyle: {
        backgroundColor: Colors.white,
        borderRadius: 5
    },
    containerListItem: {
        width,
        justifyContent: "flex-start",
    },
    contentContainerStyle: {
        height: 100
    }

});
