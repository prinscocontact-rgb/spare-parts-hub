document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart Logic
    const cartBtns = document.querySelectorAll('.add-cart');
    const cartCount = document.querySelector('.cart-btn span');
    let count = 0;

    cartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation if within an anchor
            
            // Animation effect
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    btn.style.transform = 'none';
                }, 100);
            }, 100);

            count++;
            cartCount.textContent = count;
            
            // Simple notification (In production use a toast library)
            showToast('Item added to cart!');
        });
    });

    // Simple Toast Notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // CSS for toast
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.background = 'var(--primary)';
        toast.style.color = 'white';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        toast.style.zIndex = '10000';
        toast.style.animation = 'fadeIn 0.3s ease-out';

        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-in forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2000);
    }

    // Add CSS animation for toast
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);


    // Optional: Search bar functionality (Mock)
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if(searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if(searchInput.value.trim() !== '') {
                window.location.href = `shop.html?search=${encodeURIComponent(searchInput.value)}`;
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter' && searchInput.value.trim() !== '') {
                window.location.href = `shop.html?search=${encodeURIComponent(searchInput.value)}`;
            }
        });
    }
});
