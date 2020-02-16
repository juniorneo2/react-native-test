/**
 * Created by Francisco Junior on 15/12/17.
 *
 * @flow
 */


import BaseClient from "./base-client";
import DropDownHolder from '../helpers/dropdownholder';
import Strings from "../helpers/localization";
import * as Constants from '../constants';
import * as Storage from '../helpers/storage';


const URL_API = "http://apiteste.escolaemmovimento.com.br/api/v1";


class LoginService extends BaseClient {

    getDataBody(method = "POST", bodyJson) {
        let data =  {
            method: method,
            body: bodyJson,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return data;
    }

    getUrl(path) {
        return `${URL_API}${path}`;
    }


    async login(dispatch, navigate, replace, onChange, username, password) {
        onChange({ loaderVisible: true });

        try {

            var data = this.getDataBody("POST", JSON.stringify({"login": username, "senha": password}));
            const dataLogin = await this.doRequest(this.getUrl("/Acesso/login"), data);
            if (dataLogin && dataLogin.conteudo) {
                if (dataLogin.conteudo.length > 0) {
                    Promise.all([
                        Storage.put(Constants.CONTENT_LOGIN_DATA, JSON.stringify(dataLogin.conteudo)),

                    ]).then(() => {
                        onChange({loaderVisible: false});
                        navigate("ListSchool", {"conteudo": dataLogin.conteudo});
                    })
                } else {
                    DropDownHolder.alert('error', Strings.titleHeadLogin, Strings.errorLogin);
                }

            } else {
                DropDownHolder.alert('error', Strings.titleHeadLogin, Strings.errorLogin);
            }

            onChange({ loaderVisible: false });

        } catch (error) {
            console.log(error);
        }
    }

}

export default LoginService;
