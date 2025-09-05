const musicIcon = document.getElementById("musicIcon");
const backgroundMusic = document.getElementById("backgroundMusic");
musicIcon.addEventListener("click", function () {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicIcon.classList.remove("icon-mute", "mute");
    musicIcon.classList.add("icon-volume", "unmute");
  } else {
    backgroundMusic.pause();
    musicIcon.classList.remove("icon-volume", "unmute");
    musicIcon.classList.add("icon-mute", "mute");
  }
});
swal({
  title: "Chiroyli musiqa ostida davom etamizmi?",
  buttons: ["Yo'q, shart emas (", "Ha, Albatta )"],
}).then((willDelete) => {
  if (willDelete) {
    backgroundMusic.play();
    musicIcon.classList.remove("icon-mute", "mute");
    musicIcon.classList.add("icon-volume", "unmute");
  } else {
  }
});
