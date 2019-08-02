import axios from 'axios';

// creating a customized instance
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d85132b98125be73c0a6c2ce435204dd69bb0a4f579d3960a929de4435bc6981'
    }
});
