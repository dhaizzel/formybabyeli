document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');
  audio.play();

  audio.addEventListener('ended', function() {
    window.location.href = 'index.html';
});
});

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };