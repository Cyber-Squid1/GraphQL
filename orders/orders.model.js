const orders = [
    {
        date: '2021-09-09',
        subtotal: 27.98,
        items: [
            {
                product: {
                    id: 'basketball',
                    description: 'Nike Basketball size 7',
                    price: 13.99
                },
                quantity: 2
            }
        ]
    }
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
};