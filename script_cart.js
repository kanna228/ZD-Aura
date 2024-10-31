function addToCart() {
    const selectedSize = document.querySelector('.size-buttons.active')?.dataset.size;

    if (!selectedSize) {
        alert('Please select a size before adding to the cart.');
        return;
    }

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        name: 'Slim fit jeans',
        price: '49.99$',
        size: selectedSize
    };

    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Display message with the selected size
    alert(`${selectedSize} size added to cart!`);
}
// Size selection setup
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.size-buttons').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.size-buttons').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Load cart items if on cart.html
    if (window.location.href.includes('cart.html')) {
        loadCartItems();
    }
});
