function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const secondHand = document.querySelector(".second-hand") as HTMLDivElement;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const minutesHand = document.querySelector(".min-hand") as HTMLDivElement;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  const hourHand = document.querySelector(".hour-hand") as HTMLDivElement;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
