function search() {
  const headings = document.querySelectorAll(".heading");
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  headings.forEach((heading) => {
    const productContainer = heading.nextElementSibling;
    const products = productContainer.querySelectorAll(".product");
    let visible = false;

    products.forEach((product) => {
      const textValue = product.querySelector("small").textContent || "";
      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product.style.display = "";
        visible = true;
      } else {
        product.style.display = "none";
      }
    });

    if (visible) {
      heading.style.display = "";
    } else {
      heading.style.display = "none";
    }
  });
}

/*const hamburger = document.querySelector(" .hamburger");
const navbar = document.querySelector(" ul");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});*/



var btnvar = document.getElementById("btn");

function Toggle() {
  if (btnvar.style.color == "red") {
    btnvar.style.color = "grey";
  } else {
    btnvar.style.color = "red";
  }
}
var btnvar2 = document.getElementById("btn2");

function Toggle2() {
  if (btnvar2.style.color == "red") {
    btnvar2.style.color = "grey";
  } else {
    btnvar2.style.color = "red";
  }
}
var btnvar3 = document.getElementById("btn3");

function Toggle3() {
  if (btnvar3.style.color == "red") {
    btnvar3.style.color = "grey";
  } else {
    btnvar3.style.color = "red";
  }
}
var btnvar4 = document.getElementById("btn4");
function Toggle4() {
  if (btnvar4.style.color == "red") {
    btnvar4.style.color = "grey";
  } else {
    btnvar4.style.color = "red";
  }
}
var btnvar5 = document.getElementById("btn5");

function Toggle5() {
  if (btnvar5.style.color == "red") {
    btnvar5.style.color = "grey";
  } else {
    btnvar5.style.color = "red";
  }
}
var btnvar6 = document.getElementById("btn6");

function Toggle6() {
  if (btnvar6.style.color == "red") {
    btnvar6.style.color = "grey";
  } else {
    btnvar6.style.color = "red";
  }
}
var btnvar7 = document.getElementById("btn7");

function Toggle7() {
  if (btnvar7.style.color == "red") {
    btnvar7.style.color = "grey";
  } else {
    btnvar7.style.color = "red";
  }
}
var btnvar8 = document.getElementById("btn8");

function Toggle8() {
  if (btnvar8.style.color == "red") {
    btnvar8.style.color = "grey";
  } else {
    btnvar8.style.color = "red";
  }
}
var btnvar9 = document.getElementById("btn9");

function Toggle9() {
  if (btnvar9.style.color == "red") {
    btnvar9.style.color = "grey";
  } else {
    btnvar9.style.color = "red";
  }
}
var btnvar10 = document.getElementById("btn10");

function Toggle10() {
  if (btnvar10.style.color == "red") {
    btnvar10.style.color = "grey";
  } else {
    btnvar10.style.color = "red";
  }
}
var btnvar11 = document.getElementById("btn11");

function Toggle11() {
  if (btnvar11.style.color == "red") {
    btnvar11.style.color = "grey";
  } else {
    btnvar11.style.color = "red";
  }
}
var btnvar12 = document.getElementById("btn12");

function Toggle12() {
  if (btnvar12.style.color == "red") {
    btnvar12.style.color = "grey";
  } else {
    btnvar12.style.color = "red";
  }
}
var btnvar13 = document.getElementById("btn13");

function Toggle13() {
  if (btnvar13.style.color == "red") {
    btnvar13.style.color = "grey";
  } else {
    btnvar13.style.color = "red";
  }
}
var btnvar14 = document.getElementById("btn14");

function Toggle14() {
  if (btnvar14.style.color == "red") {
    btnvar14.style.color = "grey";
  } else {
    btnvar14.style.color = "red";
  }
}
var btnvar15 = document.getElementById("btn15");

function Toggle15() {
  if (btnvar15.style.color == "red") {
    btnvar15.style.color = "grey";
  } else {
    btnvar15.style.color = "red";
  }
}
var btnvar16 = document.getElementById("btn16");

function Toggle16() {
  if (btnvar16.style.color == "red") {
    btnvar16.style.color = "grey";
  } else {
    btnvar16.style.color = "red";
  }
}
var btnvar17 = document.getElementById("btn17");

function Toggle17() {
  if (btnvar17.style.color == "red") {
    btnvar17.style.color = "grey";
  } else {
    btnvar17.style.color = "red";
  }
}
var btnvar18 = document.getElementById("btn18");

function Toggle18() {
  if (btnvar18.style.color == "red") {
    btnvar18.style.color = "grey";
  } else {
    btnvar18.style.color = "red";
  }
}
