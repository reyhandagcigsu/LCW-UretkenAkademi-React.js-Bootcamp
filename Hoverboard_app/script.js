const container = document.getElementById('container');
const colors = ['#056CF2', '#05AFF2', '#F28705', '#F2E205', '#A62103'];
const SQUARES = 800;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (square) => {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (square) => {
    square.style.background = '#1d1d1d';
    square.style.boxShadow = "0,0,2px #000"
}

for (let i=0; i<SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener('mouseover',  ()=>setColor(square));
    square.addEventListener("mouseout", ()=>removeColor(square));
    container.appendChild(square)
}