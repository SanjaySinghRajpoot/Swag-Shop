import 'whatwg-fetch';

class HttpService{
    getProducts = () => {
        var promise = new promise((resolve, reject) => {
            fetch('http://localhost:27017/product')
            .then(response => {
                console.log(response.json());  
            })               
        })

        return promise;

    }
}

export default HttpService;
