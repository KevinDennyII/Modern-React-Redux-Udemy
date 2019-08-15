import axios from 'axios';

const KEY = 'AIzaSyCEhy-odPi0Gr40YMAIs-BSzb4CkJPFZi8';

export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

