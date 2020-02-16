import React, {Component, Fragment} from 'react';

import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from './helpers/dropdownholder';
import Navigator from './navigators';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigator/>
                <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} closeInterval={3000}/>
            </Fragment>
        )
    }
};
