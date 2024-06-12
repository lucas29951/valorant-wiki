
const URL = 'https://valorant-api.com/v1/';
const main = document.querySelector('.main');
const contenedor = document.querySelector('.container');


document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch(URL + 'agents');
        const res = await response.json();

        const title = document.createElement('h2');
        title.textContent = 'Agents';
        main.appendChild(title);

        displayItems(res.data);
});


function displayItems(items) {
    
    items.forEach(item => {

        let elem = document.createElement('div');
        elem.className = 'card';

        elem.innerHTML = `
            <img class="img" src="${item.displayIcon}" alt="${item.displayName}">
                <div class="textBox">
                  <p class="text head">${item.displayName}</p>
                </div>
        `;

        contenedor.appendChild(elem);
    });
}