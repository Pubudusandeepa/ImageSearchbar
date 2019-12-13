import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
        'Client-ID a51192bf13898c11d86c94888ef926dc0d68ef121eb6114acb08d2acb557fc01'
    }
})