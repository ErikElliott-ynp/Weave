import axios from 'axios'
const clientId = '3f9aba6c3eff4420bc5b9c48eea5f163'

const clientSecret = 'xxxxxxxxxxxx'


export const getAuthToken = () => {
    axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        params: {
            grant_type: 'client_credentials'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            username: '3f9aba6c3eff4420bc5b9c48eea5f163',

            password: 'xxxxxxxxxxxx'

        }
    }).then(function (response) {
    }).catch(function (error) {
    });

}

// PLZ DONT NOT COMMIT WITH THE KEY 
export const fetchTrack = queryString => {


    let query = queryString.split(' ').join('%20')


    axios({
        url: 'https://api.spotify.com/v1/tracks',
        method: 'get',
        params: {

            q: `${query}`,

            type: 'track'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            username: '3f9aba6c3eff4420bc5b9c48eea5f163',

            password: 'xxxxxxxxxxxx'

        }
    }).then(function (response) {
    }).catch(function (error) {
    });

}


