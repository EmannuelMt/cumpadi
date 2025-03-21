// Animação ao rolar para as seções
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
});

// Efeito de rolagem suave para a navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Carrinho
const cart = [];
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

// Adicionar item ao carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

// Atualizar carrinho
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <span class="item-name">${item.name}</span>
                <div class="item-quantity">
                    <button onclick="changeQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
                <span class="item-price">R$ ${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Alterar quantidade de item
function changeQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart.splice(cart.indexOf(item), 1);
        }
    }
    updateCart();
}

// Finalizar compra (simulação)
if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio.');
        } else {
            alert('Compra finalizada! Obrigado por escolher o Restaurante 5 Estrelas.');
            cart.length = 0;
            updateCart();
        }
    });
}

// Alternar visibilidade das formas de pagamento
const paymentMethods = document.getElementById('payment-methods');
if (paymentMethods) {
    document.getElementById('checkout').addEventListener('click', function () {
        if (paymentMethods.style.display === 'none') {
            paymentMethods.style.display = 'block'; 
        } else {
            paymentMethods.style.display = 'none'; 
        }
    });
}
document.querySelector('.opening-hours').addEventListener('click', function() {
    this.classList.toggle('expanded');
});


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Executar a função ao carregar a página para verificar elementos já visíveis
revealOnScroll();
function lightGrill() {
    const grill = document.querySelector('.grill');
    const smoke = document.querySelector('.smoke');

    // Muda a cor da churrasqueira para "acesa"
    grill.style.backgroundColor = '#FF4500';
    grill.style.boxShadow = '0 0 10px #FF4500';

    // Mostra a fumaça
    smoke.style.opacity = '1';

    // Após 3 segundos, "desliga" a churrasqueira
    setTimeout(() => {
        grill.style.backgroundColor = '#808080';
        grill.style.boxShadow = 'none';
        smoke.style.opacity = '0';
    }, 3000);
}