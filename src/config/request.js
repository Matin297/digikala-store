import axios from 'axios';

const base_url = 'http://localhost:4000';
axios.defaults.baseURL = base_url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function request(method = 'get', url) {

    const headers = {
        'Content-Type': 'application/json'
        // 'Authorization': localStorage.getItem('token')
    };

    switch (method) {
        case 'get':
            return axios
                .get(url, { headers })
                .then(response => {
                    return {
                        ...response,
                        status_name: 'success'
                    };
                })
                .catch(err => {
                    return err?.response;
                });

        default:
            return {};
    }
}
