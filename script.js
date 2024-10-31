document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const productId = urlParams.get('id'); // Ajuste para obter o ID do produto

    if (query) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = query;
            searchItems(query);
        }
    }

    if (productId) {
        const product = items.find(item => item.id == productId);
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-description').textContent = product.description;

            document.getElementById('add-to-cart').addEventListener('click', () => {
                addToCart(product);
            });
        }
    }
});

const items = [
    { id: 1, name: 'Pizza Margherita', description: 'Pizza clássica com tomates e mussarela', image: 'assets/images/pizza_margherita.jpg' },
    { id: 2, name: 'Pizza Pepperoni', description: 'Pepperoni picante com queijo', image: 'assets/images/pizza_pepperoni.jpg' },
    { id: 3, name: 'Pizza Vegetariana', description: 'Carregada com vegetais', image: 'assets/images/pizza_vegetariana.jpg' },
    // Adicione mais itens conforme necessário
];

function searchItems(query) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'result-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        itemElement.addEventListener('click', () => {
            window.location.href = `detalhes.html?id=${item.id}`;
        });
        resultsContainer.appendChild(itemElement);
    });
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
}