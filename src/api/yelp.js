import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer RfVKSdgUPQ4mPGmw5N_krhN_fqTi7hJbr0YdKOtGPh5aOONakZNpMlk3m4b3Bx20Gka02T5McDh33hCC3Khjeoq3rvTdLVQ12B7lzLPoFQbN3paJz83yTSgzn3OhXnYx'
    }
});


