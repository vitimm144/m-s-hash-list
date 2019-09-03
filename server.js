const grpc = require('grpc');
const uuid = require('uuid/v1');
const productProto = grpc.load('src/product.proto')

const server = new grpc.Server()

var products = [
    {
        "id":uuid(),
        "price_in_cents": 100, 
        "title":"pear",
        "description": "A Fruit",
        "discount": {
            "pct": 0.05,
            "value_in_cents": 5
        }
    }
]

server.addService(productProto.ProductService.service,{
    list : (_,callback) =>{
        callback(null,products)
    },
})

server.bind('127.0.0.1:50051',
grpc.ServerCredentials.createInsecure())
console.log('server is running at http://127.0.0.1:50051')
server.start()