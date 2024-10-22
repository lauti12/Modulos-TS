export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Home</h1>";
    footer.innerHTML = "<h2>kiosco.com</h2>";
    footer.style.border = "solid 3px black";
    footer.style.padding = "12px";
    return footer;
  }