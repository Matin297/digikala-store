import axios from 'axios';
import { requestErrorHandler } from 'utils/helpers';

const base_url = 'https://www.digikala.com/front-end/';
axios.defaults.baseURL = base_url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function request(method = 'get', url, params = {}) {

    const headers = {
        'token': 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv'
    };

    switch (method) {
        case 'get':
            return axios
                .get(url, { headers, params })
                .then(response => {
                    return {
                        ...response,
                        status_name: 'success'
                    };
                })
                .catch(err => {
                    return requestErrorHandler(err?.response);
                });

        default:
            return {};
    }
}

export default request;
