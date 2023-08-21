const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            console.log('Get all products...');
            return await productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            console.log('Filter products by price...');
            return productsModel.getProductByPrice(args.min, args.max);
        },
        productsById: (_, args) => {
            console.log('Get product by ID...');
            return productsModel.getProductById(args.id);
        },
        productByName: (_, args) => {
            console.log('Get product by Name...');
            return productsModel.getProductByName(args.Name);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            console.log('Adding new product...');
            return productsModel.addNewProduct(args.Name, args.description,args.price);
        },
        addNewProductReview: (_, args) => {
            console.log("Adding new Review...");
            return productsModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
};