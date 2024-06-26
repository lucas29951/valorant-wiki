
const URL = 'https://valorant-api.com/v1/';
const main = document.querySelector('.main');
const contenedor = document.querySelector('.container');


document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(URL + 'weapons');
    const res = await response.json();

    const title = document.createElement('h2');
    title.textContent = 'Weapons';
    main.appendChild(title);

    displayItems(res.data);
});


function displayItems(items) {

    items.forEach(item => {

        if (item.displayIcon) {

            let elem = document.createElement('a');
            elem.className = 'unique-card';
            elem.href = './details.html';

            elem.innerHTML = `
                <div class="background-overlay"></div>
                <div class="card-content">
                    <img class="img-content" src="${item.displayIcon}" alt="${item.displayName}">
                    <div class="card-title">${item.displayName}</div>
                </div>
        `;

            elem.addEventListener('click', () => {
                const data = JSON.parse(elem.getAttribute("data-item"));
                localStorage.setItem('item-selected', JSON.stringify(item));
            });

            contenedor.appendChild(elem);
        }
    });
}