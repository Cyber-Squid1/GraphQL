const schema1 = require('./product.mongo');
let productByNameOutput;
// const products = [
//     {
//         id: 'basketball',
//         description: 'Nike Basketball size 7',
//         price: 13.99,
//         reviews: []
//     },
//     {
//         id: 'football',
//         description: 'Adidas Football',
//         price: 11.99,
//         reviews: []
//     }
// ];

async function getAllProducts() {
    return await schema1.products.find({}, {}).populate('review');
    // return products;
}

async function getProductById(id) {
    return await schema1.products.findById(id);
}

function getProductByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

async function getProductByName(name) {
    productByNameOutput = await schema1.products.find({ Name: name }, {});
    console.log(productByNameOutput);
    // return productByNameOutput;
}

async function addNewProduct(Name, description, price) {
    const newProduct = {
        Name,
        description,
        price,
        reviews: []
    };
    try {
        await schema1.products.updateOne(
            { Name: newProduct.Name },
            newProduct,
            { upsert: true }
        )
        getProductByName(Name)
    } catch (error) {
        console.error(`Could not add new product! Error: ${error}`);
    }
}
// todo complete this function
function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById(id);

    if (matchedProduct) {
        schema1.reviews.insertOne({
            rating: rating,
            comment: comment
        })
        matchedProduct.reviews.push(newProductReview);

        return newProductReview;
    }
}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    getProductByName,
    addNewProduct,
    addNewProductReview
}