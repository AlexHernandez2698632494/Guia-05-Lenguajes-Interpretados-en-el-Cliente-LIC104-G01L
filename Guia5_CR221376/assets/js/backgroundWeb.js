      const azulBtn = document.getElementById("azul");
      const rojoBtn = document.getElementById("rojo");
      const amarilloBtn = document.getElementById("amarillo");
      const verdeBtn = document.getElementById("verde");
      const body = document.querySelector("body");

      azulBtn.addEventListener("click", () => {
        body.style.backgroundColor = "blue";
      });

      rojoBtn.addEventListener("click", () => {
        body.style.backgroundColor = "red";
      });

      amarilloBtn.addEventListener("click", () => {
        body.style.backgroundColor = "yellow";
      });

      verdeBtn.addEventListener("click", () => {
        body.style.backgroundColor = "green";
      });