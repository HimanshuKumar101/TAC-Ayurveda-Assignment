const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const toast = document.getElementById('toast');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        showToast('Item added to cart!');
    });
});

function showToast(message) {
    toast.textContent = message; 
    toast.style.display = 'block'; 
    toast.style.opacity = 1; 
    toast.style.bottom = '20px'; 

    setTimeout(() => {
        toast.style.opacity = 0; 
        toast.style.bottom = '30px'; 
    }, 3000); 

    setTimeout(() => {
        toast.style.display = 'none'; 
    }, 3500); 
}
