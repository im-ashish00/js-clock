console.log('%c Tik tok.. ⏰', 'font-size: 16px; color: #999;');

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  // For seconds
  const seconds = now.getSeconds();
  const secondsInDegrees = (seconds / 60) * 360 + 90;
  if (secondsInDegrees == '90') {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = ' all .2s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  // For minutes
  const minutes = now.getMinutes();
  const minutesInDegrees = (minutes / 60) * 360 + 90;
  if (minutesInDegrees == '90') {
    minuteHand.style.transition = 'none';
  } else {
    minuteHand.style.transition = ' all .2s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  // For hour
  const hours = now.getHours();
  const hoursInDegrees = (hours / 12) * 360 + 90;
  if (hoursInDegrees == '90') {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = ' all .2s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

// Each seconds it updates
setInterval(setDate, 1000);
