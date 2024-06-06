document.addEventListener('DOMContentLoaded', function() {
    const topThreeContainer = document.querySelector('.top-three');
    const lowerCardsContainer = document.querySelector('.lower-cards');

    const participants = [
        { name: 'Jin Doe', points: '13,020 pts', img: 'https://via.placeholder.com/132x132' },
        { name: 'John Doe', points: '13,020 pts', img: 'https://via.placeholder.com/132x132' },
        { name: 'Alex Doe', points: '13,020 pts', img: 'https://via.placeholder.com/132x132' },
        { name: 'Participant 4', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 5', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 6', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 7', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 8', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 9', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' },
        { name: 'Participant 10', points: '13,020 pts', img: 'https://via.placeholder.com/76x76' }
    ];

    participants.slice(0, 3).forEach((participant, index) => {
        const rank = index + 1;
        const cardClass = rank === 1 ? 'first-place' : rank === 2 ? 'second-place' : 'third-place';
        const participantCard = `
            <div class="card ${cardClass}">
                <div class="card-background"></div>
                <div class="card-content">
                    
                    <img class="profile-pic" src="${participant.img}" />
                    <div class="name">${participant.name}</div>
                    <div class="points">${participant.points}</div>
                </div>
                <div class="ranking">
                    <div class="ranking-circle"></div>
                    <div class="ranking-position">${rank}</div>
                </div>
            </div>`;
        topThreeContainer.innerHTML += participantCard;
    });

    participants.slice(3).forEach((participant, index) => {
        const rank = index + 4;
        const participantCard = `
            <div class="lower-card">
                <div class="profile-pic-container">
                    <img class="profile-pic" src="${participant.img}" />
                    <div class="ranking-circle">
                        <div class="ranking-position">${rank}</div>
                    </div>
                </div>
                <div class="name">${participant.name}</div>
                <div class="points">${participant.points}</div>
            </div>`;
        lowerCardsContainer.innerHTML += participantCard;
    });
});
