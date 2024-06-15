
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

        if (item.isPlayableCharacter) {

            let elem = document.createElement('a');
            elem.className = 'card';
            const arrayColors = item.backgroundGradientColors;
            elem.style.background = `linear-gradient(#${arrayColors[0]} 0%, #${arrayColors[3]} 100%)`;
            elem.href = './details.html';

            elem.innerHTML = `
            <div class="card">
                <div class="content">
                    <p class="some">${item.description}</p>
                </div>
                <div class="thumb">
                    <img src="${item.displayIcon}" alt="${item.displayName}">
                </div>
                <div class="detial">
                    <div class="title">
                        <p class="name">${item.displayName}</p>
                    </div>
                </div>
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