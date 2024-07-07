document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    // Function to update the total price
    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Add event listeners to the quantity buttons
    cartItems.forEach(item => {
        item.querySelector('.plus').addEventListener('click', () => {
            const quantityElement = item.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });

        item.querySelector('.minus').addEventListener('click', () => {
            const quantityElement = item.querySelector('.quantity');
            if (parseInt(quantityElement.textContent) > 0) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotalPrice();
            }
        });

        // Add event listener to the delete button
        item.querySelector('.delete-btn').addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Add event listener to the like button
        item.querySelector('.like-btn').addEventListener('click', (event) => {
            const icon = event.currentTarget.querySelector('i');
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
        });
    });

    // Initial call to set the total price
    updateTotalPrice();
});