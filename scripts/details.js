
document.addEventListener('DOMContentLoaded', () => {
    const agentDetailsContainer = document.getElementById('details');
    const selectedAgent = JSON.parse(localStorage.getItem('item-selected'));

    if (selectedAgent) {
        const divInfo = document.createElement('div');
        divInfo.className = 'info';
        const divAbilities = document.createElement('div');
        divAbilities.className = 'abilities-container';

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

        const abilities = document.createElement('div');
        abilities.className = 'abilities';

        selectedAgent.abilities.forEach(ability => {
            if (ability.displayIcon) {
                let elem = document.createElement('div');
                elem.className = 'ability-item';
                let elemName = document.createElement('p');
                elemName.textContent = `${ability.displayName}`;
                let elemIcon = document.createElement('img');
                elemIcon.src = `${ability.displayIcon}`;
                elemIcon.alt = `${ability.displayName}`;
                elem.appendChild(elemName);
                elem.appendChild(elemIcon);
                abilities.appendChild(elem);
            }
        });

        divInfo.appendChild(agentName);
        divInfo.appendChild(agentDescription);
        divAbilities.appendChild(subtitle);
        divAbilities.appendChild(abilities);

        agentDetailsContainer.appendChild(agentNameShow);
        agentDetailsContainer.appendChild(agentImage);
        agentDetailsContainer.appendChild(divInfo);
        divInfo.appendChild(divAbilities);
        const arrayColors = selectedAgent.backgroundGradientColors;
        agentDetailsContainer.style.background = `linear-gradient(#${arrayColors[0]} 0%, #${arrayColors[3]} 100%)`;
    } else {
        agentDetailsContainer.textContent = 'No agent selected.';
    }
});
