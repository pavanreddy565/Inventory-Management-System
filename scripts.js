// scripts.js
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

window.addEventListener('load', function() {
  const percDiv = document.getElementById('out');
  const circleSvg = percDiv.querySelector('.circle-svg');
  const circle = circleSvg.querySelector('.circle');

  function setCircleCenter() {
      const divWidth = percDiv.offsetWidth;
      const divHeight = percDiv.offsetHeight;

      // Set the cx and cy attributes of the circle to half of the div's width and height
      circle.setAttribute('cx', divWidth / 2);
      circle.setAttribute('cy', divHeight / 2);
  }

  // Call the function once on load
  setCircleCenter();

  // Call the function again if the window is resized
  window.addEventListener('resize', setCircleCenter);
});

