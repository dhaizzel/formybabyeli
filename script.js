document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('buttons-container').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('main-image').style.display = 'none';
    document.getElementById('image-container').style.display = 'block';
});

document.getElementById('no-button').addEventListener('mouseover', function() {
    const button = document.getElementById('no-button');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.getElementById('next-button').addEventListener('click', function() {
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('surprise-container').style.display = 'block';
});

document.getElementById('letter-button').addEventListener('click', function() {
    document.getElementById('surprise-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'block';
});

document.getElementById('flower-button').addEventListener('click', function() {
    document.getElementById('flower-button').addEventListener('click', function() {
        const music = document.getElementById('music');
        if (music.paused) {
            music.play();
        }
    });
});

document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('paper').style.display = 'block';
});

document.getElementById('back-button-letter').addEventListener('click', function() {
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('surprise-container').style.display = 'block';
    document.getElementById('paper').style.display = 'none';
});

document.getElementById('back-button-flower').addEventListener('click', function() {
    document.getElementById('flower-container').style.display = 'none';
    document.getElementById('surprise-container').style.display = 'block';
});
