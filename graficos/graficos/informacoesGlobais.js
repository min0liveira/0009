const url = 'https://example.com/lung-cancer-stats.json'; // Replace with the actual URL

async function displayCancerStatistics() {
    const res = await fetch(url);
    const data = await res.json();

    // Replace with appropriate data fields from your JSON
    const totalPeopleAffected = data.total_people_affected;
    const totalPeopleExposed = data.total_people_exposed;
    const percentageAffected = ((totalPeopleAffected / totalPeopleExposed) * 100).toFixed(2);

    const paragraph = document.createElement('p');
    paragraph.classList.add('graphs-container__text');
    paragraph.innerHTML = `Did you know that there are approximately <span>${totalPeopleExposed}</span> people exposed to e-cigarettes, and about <span>${totalPeopleAffected}</span> of them have developed lung cancer.<br>This means that approximately <span>${percentageAffected}%</span> of people exposed to e-cigarettes have developed lung cancer.`;

    const container = document.getElementById('graphs-container');
    container.appendChild(paragraph);
}

displayCancerStatistics();
