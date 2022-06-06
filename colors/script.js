const color_time = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16); // generate random color
    document.body.style.backgroundColor = "#" + randomColor;  // generating bacground color for the body
    //color.innerHTML = "#" + randomColor;
  }

genNew.addEventListener("click", color_time);
color_time();
