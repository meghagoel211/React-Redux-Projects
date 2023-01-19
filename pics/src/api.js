import axios from 'axios';

const searchImages= async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID RgI4BDCqLrn5K-JkuF6fbDC8TDQ3Noe4KQw2b4qUDiE'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;