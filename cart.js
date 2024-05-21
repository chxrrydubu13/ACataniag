function updateCartSummary() {
    const itemPrices = document.querySelectorAll('.item-price');
    const quantities = document.querySelectorAll('.quantity');
    const totalPrices = document.querySelectorAll('.item-total');

    let subtotal = 0;

    itemPrices.forEach((itemPrice, index) => {
        const price = parseFloat(itemPrice.textContent.replace('₱', ''));
        const quantity = parseInt(quantities[index].textContent);
        const totalPrice = price * quantity;

        totalPrices[index].textContent = `₱${totalPrice.toFixed(2)}`;
        subtotal += totalPrice;
    });

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `₱${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₱${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₱${total.toFixed(2)}`;
}

function increaseQuantity(button) {
    const quantitySpan = button.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity += 1;
    quantitySpan.textContent = quantity;
    updateCartSummary();
}

function decreaseQuantity(button) {
    const quantitySpan = button.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 1) {
        quantity -= 1;
        quantitySpan.textContent = quantity;
        updateCartSummary();
    }
}

function placeOrder() {
    alert("Your order has been placed successfully!");
    // Here you can add additional functionality for order processing
}

document.addEventListener('DOMContentLoaded', updateCartSummary);