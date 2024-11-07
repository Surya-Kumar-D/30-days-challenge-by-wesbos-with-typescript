const playSound = (e: KeyboardEvent) => {
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  ) as HTMLAudioElement;
  const key = document.querySelector(
    `.key[data-key="${e.keyCode}"]`
  ) as HTMLDivElement;
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key?.classList.add("playing");
};

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  (key as HTMLDivElement).addEventListener("transitionend", removeTransition)
);
function removeTransition(this: HTMLDivElement, e: TransitionEvent) {
  if (e.propertyName !== "transform") return;
  console.log(e);
  this.classList.remove("playing");
}
