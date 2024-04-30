let currentOrder = [];
let currentOrderNumber = localStorage.getItem('currentOrderNumber') ? parseInt(localStorage.getItem('currentOrderNumber')) : 1;
let dailySales = localStorage.getItem('dailySales') ? parseFloat(localStorage.getItem('dailySales')) : 0;


document.getElementById('order-number-display').textContent = `Bestillingsnummer: ${currentOrderNumber}`;
document.getElementById('daily-sales-display').textContent = `Dagens Omsætning: ${dailySales} DKK`;
document.getElementById('total-display').textContent = `Total: ${total} DKK`;

function addToOrder(item, price) {
    currentOrder.push({ item, price });
    total();
    alert(`Added ${item} - ${price} DKK`);

}
function total() {
    var total = currentOrder.reduce((acc, { price }) => acc + price, 0);
    document.getElementById('total-display').textContent = `Total: ${total} DKK`;
}

function completeOrder() {
    var total = currentOrder.reduce((acc, { price }) => acc + price, 0);
    dailySales += total;
    console.log(dailySales);
    localStorage.setItem('dailySales', dailySales);
    document.getElementById('daily-sales-display').textContent = `Dagens Omsætning: ${dailySales} DKK`;
    currentOrder = [];
    incrementOrderNumber();
    alert(`Order #${currentOrderNumber} completed. Total: ${total} DKK`);
    document.getElementById('total-display').textContent = 'Total: ';
}

function addToOrder(item, price) {
    currentOrder.push({ item, price });
    total();
    alert(`Added ${item} - ${price} DKK`);
}

function incrementOrderNumber() {
    currentOrderNumber++;
    localStorage.setItem('currentOrderNumber', currentOrderNumber);
    document.getElementById('order-number-display').textContent = `Bestillingsnummer: ${currentOrderNumber}`;
}

window.onbeforeunload = () => {
    localStorage.setItem('currentOrderNumber', currentOrderNumber);
    localStorage.setItem('dailySales', dailySales);
}