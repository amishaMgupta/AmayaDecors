function addProduct(data){
    console.log(data);
    
    //  fetch('http://127.0.0.1:8080/Web/product', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });    
}

module.exports = {
    addProduct
}