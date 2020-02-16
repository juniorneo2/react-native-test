// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let Strings = new LocalizedStrings({
    pt:{
        fillTheFields: "Informe o usuário e a senha encaminhados pela escola",
        fillTheFieldsAccessAccount: "Preencha todos os campos para acessar sua conta",
        user: "Usuário",
        password: "Senha",
        login: "Entrar",
        loginPhone: "Entrar com celular",
        forgetPassword: "Esqueceu a minha senha",
        privacyPolicy: "Política de Privacidade",
        searchBar: "Buscar",
        titleHeadListSchool: "Selecione a sessão principal",
        titleHeadListMessage: "Mensagens",
        titleHeadLogin: "Login",
        titleHeadSchool: "Escola",
        errorLogin: "Ocorreu um erro ao fazer o login",
        errorFeedSchool: "Ocorreu um erro ao trazer o feed de notícias"
    }
});

export default Strings
