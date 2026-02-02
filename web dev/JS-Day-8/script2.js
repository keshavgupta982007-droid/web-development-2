function highlightText() {
  let text = document.getElementsByClassName("important");

  for (let i = 0; i < text.length; i++) {
    text[i].classList.add("highlight");
    text[i].style.fontSize = "24px";
  }
}
