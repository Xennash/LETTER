const message = `hai babyyyyy! im srry that im not like your ex wuan that can make a roblox game for you.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);

    document.getElementById("gifBox").style.display = "block";
      }
    }

    typeWriter();
  }, 600);
}
