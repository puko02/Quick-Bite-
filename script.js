document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = query;
            searchItems(query);
        }
    }
});

const items = [
    { name: 'Cheeseburger', description: 'Hambúrguer suculento com queijo', image: 'assets/images/cheeseburger.jpg' },
    { name: 'Hambúrguer Vegetariano', description: 'Delicioso hambúrguer vegetariano', image: 'assets/images/hamburguer_vegetariano.jpg' },
    { name: 'Philly Cheesesteak', description: 'Bife com queijo e cebolas', image: 'assets/images/philly_cheesesteak.jpg' },
    { name: 'Pizza Margherita', description: 'Pizza clássica com tomates e mussarela', image: 'assets/images/pizza_margherita.jpg' },
    { name: 'Pizza Pepperoni', description: 'Pepperoni picante com queijo', image: 'assets/images/pizza_pepperoni.jpg' },
    { name: 'Pizza Vegetariana', description: 'Carregada com vegetais', image: 'assets/images/pizza_vegetariana.jpg' },
    { name: 'Presunto e Queijo', description: 'Presunto e queijo na baguete', image: 'assets/images/presunto_queijo.jpg' },
    { name: 'Queijo Grelhado', description: 'Queijo derretido no pão torrado', image: 'assets/images/queijo_grelhado.jpg' },
    { name: 'Sanduíche BLT', description: 'Bacon, alface e tomate', image: 'assets/images/sanduiche_blt.jpg' },
    { name: 'Sanduíche Club', description: 'Sanduíche triplo com peru, bacon e alface', image: 'assets/images/sanduiche_club.jpg' },
    { name: 'Sanduíche de Carne de Porco Desfiada', description: 'Sanduíche de carne de porco desfiada com molho BBQ', image: 'assets/images/sanduiche_carne_porco_desfiada.jpg' },
    { name: 'Sanduíche de Frango', description: 'Sanduíche de frango grelhado com alface e tomate', image: 'assets/images/sanduiche_frango.jpg' },
    { name: 'Sanduíche de Peru', description: 'Sanduíche de peru com molho de cranberry', image: 'assets/images/sanduiche_peru.jpg' },
    { name: 'Sanduíche de Salada de Atum', description: 'Sanduíche de salada de atum com alface', image: 'assets/images/sanduiche_salada_atum.jpg' },
    { name: 'Sub de Almôndegas', description: 'Almôndegas com molho marinara', image: 'assets/images/sub_almondegas.jpg' },
    { name: 'Tacos de Carne', description: 'Tacos de carne moída com alface e queijo', image: 'assets/images/tacos_carne.jpg' },
    { name: 'Tacos de Frango', description: 'Tacos de frango com salsa e queijo', image: 'assets/images/tacos_frango.jpg' },
   
];

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function searchItems(query) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const normalizedQuery = normalizeString(query);

    const filteredItems = items.filter(item => 
        normalizeString(item.name).includes(normalizedQuery) || 
        normalizeString(item.description).includes(normalizedQuery)
    );

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
        resultsContainer.appendChild(itemElement);
    });
}

