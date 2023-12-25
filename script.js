const memories = {
    '2502': 'It\'s okay to feel negative emotions, it\'s okay to cry, as long as you keep going',
    '0506': 'Quand j\'étais petite et que tu écrivais ton livre sur l\'ancien ordinateur. Tu m\'avais montré comment écrire mon nom et changer la couleur du texte.',
    '0309': 'Quand tu me conduisais à l\'école secondaire avec la Civic et que je faisais jouer mes chansons. Ça me faisait plaisir quand il y avait des chansons que tu aimais.',
    '1112': 'Quand on allait à la bibliothèque d\'Anjou, de Saint-Léonard parce que celle d\'Anjou était en rénovation, parce qu\'on n\'avait pas de wi-fi à la maison.',
    '2709': 'Quand je te regardais jouer à School Days et Hard Time sur ta tablette et qu\'on se tapait des marathons de Danny Phantom et Adventure Time avec les CDs de la Grande Bibliothèque.'
};

function showMemory() {
    const passwordInput = document.getElementById('password').value;
    const memoryContainer = document.getElementById('memory');
    const form = document.getElementById('form');
    const titre = document.getElementById('titre');

    // Check if the password is in the memories object
    if (memories.hasOwnProperty(passwordInput)) {
        memoryContainer.textContent = memories[passwordInput];
        form.style.opacity = 0; // Hide the form
        memoryContainer.style.opacity = 1; // Show the memory
        titre.style.opacity = 1;
    } else {
        memoryContainer.style.opacity = 1;
        memoryContainer.textContent = "Il y a un imposteur parmi nous...";
    }
}

// Add event listener to the button
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', showMemory);

// You can also submit the form when Enter is pressed
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        showMemory();
    }
});
