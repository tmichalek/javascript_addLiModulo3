const btn = document.querySelector("button");
    let number = 1;
    btn.addEventListener("click", () => {
      const li = document.createElement("li");

      if (number % 3 == 0) {


        li.classList.add("big");
      }
      li.textContent = number;
      number++;
      const ul = document.querySelector("ul");
      ul.appendChild(li);
    });