const grpc = require('grpc')
const PROTO_PATH = './src/product.proto'
const ProductService = grpc.load(PROTO_PATH).ProductService

const client = new ProductService('localhost:50051',
    grpc.credentials.createInsecure())
    client.list({}, (error, products) => {
        if (!error) {
            console.log('successfully fetch List products')
            console.log(products)
        } else {
            console.error(error)
        }
    })