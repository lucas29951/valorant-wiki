
const URL = 'https://valorant-api.com/v1/';
const main = document.querySelector('.main');
const contenedor = document.querySelector('.container');


document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(URL + 'maps');
    const res = await response.json();

    const title = document.createElement('h2');
    title.textContent = 'Maps';
    main.appendChild(title);

    displayItems(res.data);
});


function displayItems(items) {

    items.forEach(item => {

        if (item.displayIcon) {

            let elem = document.createElement('a');
            elem.className = 'map-card';
            elem.href = './details.html';

            elem.innerHTML = `
            <div class="section_our_solution">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                                <div class="solution_card">
                                    <div class="hover_color_bubble"></div>
                                    <div class="so_top_icon">
                                        <img src="${item.listViewIcon}" alt="${item.displayName}">
                                    </div>
                                    <div class="solu_title">
                                        <div>${item.displayName}</div>
                                    </div>
                                    <div class="solu_description">
                                        <p>${item.coordinates}</p>
                                        <button class="read_more_btn" type="button">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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