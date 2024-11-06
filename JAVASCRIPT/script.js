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
    { id: 1, name: 'Pizza Margherita', description: 'Pizza clássica com tomates e mussarela', image: '../assets/images/pizza_margherita.jpg' },
    { id: 2, name: 'Pizza Pepperoni', description: 'Pepperoni picante com queijo', image: '../assets/images/pizza_pepperoni.jpg' },
    { id: 3, name: 'Pizza Vegetariana', description: 'Carregada com vegetais', image: '../assets/images/pizza_vegetariana.jpg' },
    { id: 4, name: 'Cheeseburger', description: 'Hambúrguer suculento com queijo', image: '../assets/images/cheeseburger.jpg' },
    { id: 5, name: 'Hambúrguer Vegetariano', description: 'Delicioso hambúrguer vegetariano', image: '../assets/images/hamburguer_vegetariano.jpg' },
    { id: 6, name: 'Philly Cheesesteak', description: 'Bife com queijo e cebolas', image: '../assets/images/philly_cheesesteak.jpg' },
    { id: 7, name: 'Presunto e Queijo', description: 'Presunto e queijo na baguete', image: '../assets/images/presunto_queijo.jpg' },
    { id: 8, name: 'Queijo Grelhado', description: 'Queijo derretido no pão torrado', image: '../assets/images/queijo_grelhado.jpg' },
    { id: 9, name: 'Sanduíche BLT', description: 'Bacon, alface e tomate', image: '../assets/images/sanduiche_blt.jpg' },
    { id: 10, name: 'Sanduíche Club', description: 'Sanduíche triplo com peru, bacon e alface', image: '../assets/images/sanduiche_club.jpg' },
    { id: 11, name: 'Sanduíche de Carne de Porco Desfiada', description: 'Sanduíche de carne de porco desfiada com molho BBQ', image: '../assets/images/sanduiche_carne_porco_desfiada.jpg' },
    { id: 12, name: 'Sanduíche de Frango', description: 'Sanduíche de frango grelhado com alface e tomate', image: '../assets/images/sanduiche_frango.jpg' },
    { id: 13, name: 'Sanduíche de Peru', description: 'Sanduíche de peru com molho de cranberry', image: '../assets/images/sanduiche_peru.jpg' },
    { id: 14, name: 'Sanduíche de Salada de Atum', description: 'Sanduíche de salada de atum com alface', image: '../assets/images/sanduiche_salada_atum.jpg' },
    { id: 15, name: 'Sub de Almôndegas', description: 'Almôndegas com molho marinara', image: '../assets/images/sub_almondegas.jpg' },
    { id: 16, name: 'Tacos de Carne', description: 'Tacos de carne moída com alface e queijo', image: '../assets/images/tacos_carne.jpg' },
    { id: 17, name: 'Tacos de Frango', description: 'Tacos de frango com salsa e queijo', image: '../assets/images/tacos_frango.jpg' },
    { id: 18, name: 'Pizza grande', description: 'massa de pizza, molho de tomate, queijo mussarela, 12 pedaços', image: '../assets/images/pizza_pepperoni.jpg' },
    { id: 19, name: 'Pizza media', description: 'massa de pizza, molho de tomate, queijo mussarela, 10 pedaços', image: '../assets/images/pizza_margherita.jpg' },
    { id: 20, name: 'X-Salada', description: 'pão brioche, carne bovina, alface, tomate, queijo, cebola, picles', image: '../assets/images/hamburguer_vegetariano.jpg' },
    { id: 21, name: 'X-Egg', description: 'pão brioche, carne bovina, alface, tomate, queijo, cebola, picles, ovo', image: '../assets/images/cheeseburger.jpg' },
    { id: 22, name: 'X-Bacon', description: 'pão brioche, carne bovina, alface, tomate, queijo, cebola, picles, ovo, bacon', image: '../assets/images/sanduiche_blt.jpg' },
    { id: 0, name: '345739 366', description: 'Easter Egg', image: '../assets/images/demoImg.jpeg' },

];

function searchItems(query) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = '<p>Resultado não Encontrado</p>';
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
            window.location.href = `/HTML/detalhes.html?id=${item.id}`;
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