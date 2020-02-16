/**
 * Created by Francisco Junior on 15/12/17.
 *
 * @flow
 */


import BaseClient from "./base-client";
import DropDownHolder from '../helpers/dropdownholder';
import Strings from "../helpers/localization";


class SchoolService extends BaseClient {

    getDataBody(method = "POST", bodyJson, token) {
        let data =  {
            method: method,
            body: bodyJson,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            }
        }
        return data;
    }

    getUrl(context, path) {
        return `http://${context}${path}`;
    }


    async listLastMessage(dispatch, navigate, replace, onChange, school) {
        onChange({ loaderVisible: true });

        try {

            var data = this.getDataBody("POST", JSON.stringify({}), school.token);
            const dataMessage = await this.doRequest(this.getUrl(school.contexto,"/mensagem/ultimas-noticias/v3"), data);
            if (dataMessage && dataMessage.feed) {
                if (dataMessage.feed.length > 0) {
                    onChange({loaderVisible: false});
                    navigate("MessageScreen", {"feed": dataMessage.feed});
                } else {
                    DropDownHolder.alert('error', Strings.titleHeadSchool, Strings.errorFeedSchool);
                }

            } else {
                DropDownHolder.alert('error', Strings.titleHeadSchool, Strings.errorFeedSchool);
            }

            onChange({ loaderVisible: false });

        } catch (error) {
            console.log(error);
        }
    }

}

export default SchoolService;
