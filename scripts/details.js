
document.addEventListener('DOMContentLoaded', () => {
    const agentDetailsContainer = document.getElementById('details');
    const selectedAgent = JSON.parse(localStorage.getItem('item-selected'));

    if (selectedAgent) {
        const divInfo = document.createElement('div');
        divInfo.className = 'info';

        const agentName = document.createElement('h2');
        agentName.textContent = selectedAgent.displayName;

        const agentDescription = document.createElement('p');
        agentDescription.textContent = selectedAgent.description;

        const agentImage = document.createElement('img');
        agentImage.src = selectedAgent.fullPortrait;
        agentImage.alt = selectedAgent.displayName;

        // agentDetailsContainer.appendChild(agentName);
        divInfo.appendChild(agentName);
        // agentDetailsContainer.appendChild(agentDescription);
        divInfo.appendChild(agentDescription);

        agentDetailsContainer.appendChild(agentImage);
        agentDetailsContainer.appendChild(divInfo);
        const arrayColors = selectedAgent.backgroundGradientColors;
        agentDetailsContainer.style.background = `linear-gradient(#${arrayColors[0]} 0%, #${arrayColors[3]} 100%)`;
    } else {
        agentDetailsContainer.textContent = 'No agent selected.';
    }
});
