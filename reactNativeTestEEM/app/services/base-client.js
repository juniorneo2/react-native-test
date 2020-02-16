/**
 * Created by Francisco Junior on 16/02/20.
 *
 * @flow
 */


export default class BaseClient {

    doRequest(url, data) {
        return fetch(url, data)
            .then(response => response.json() )
            .then(data => { return data } )
            .catch(error =>{ return error });
    }

    request(url, data) {

        return this.doRequest(url, data);
    }
}
