
document.addEventListener('DOMContentLoaded', () => {
    const agentDetailsContainer = document.getElementById('details');
    const selectedAgent = JSON.parse(localStorage.getItem('item-selected'));

    if (selectedAgent) {
        const divInfo = document.createElement('div');
        divInfo.className = 'info';

        const subtitle = document.createElement('h3');
        subtitle.textContent = 'Abilities';

        const agentName = document.createElement('h1');
        agentName.textContent = selectedAgent.displayName;

        const agentNameShow = document.createElement('h1');
        agentNameShow.className = 'subname';
        agentNameShow.textContent = selectedAgent.displayName;

        const agentDescription = document.createElement('p');
        agentDescription.textContent = selectedAgent.description;

        const agentImage = document.createElement('img');
        agentImage.src = selectedAgent.fullPortrait;
        agentImage.alt = selectedAgent.displayName;

        const abilities = document.createElement('ul');

        selectedAgent.abilities.forEach(ability => {
            let elem = document.createElement('li');
            elem.textContent = `${ability.displayName}`;
            abilities.appendChild(elem);
        });

        divInfo.appendChild(agentName);
        divInfo.appendChild(agentDescription);
        divInfo.appendChild(subtitle);
        divInfo.appendChild(abilities);

        agentDetailsContainer.appendChild(agentNameShow);
        agentDetailsContainer.appendChild(agentImage);
        agentDetailsContainer.appendChild(divInfo);
        const arrayColors = selectedAgent.backgroundGradientColors;
        agentDetailsContainer.style.background = `linear-gradient(#${arrayColors[0]} 0%, #${arrayColors[3]} 100%)`;
    } else {
        agentDetailsContainer.textContent = 'No agent selected.';
    }
});
