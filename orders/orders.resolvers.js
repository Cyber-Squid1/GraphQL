const ordersModel = require('./orders.model');

module.exports = {
    Query: {
        orders: () => {
            console.log('Get all orders...');
            return ordersModel.getAllOrders();
        }
    }
};