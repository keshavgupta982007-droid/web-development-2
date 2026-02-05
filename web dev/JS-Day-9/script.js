const para = document.getElementsByTagName("p");

for (let i = 0; i < para.length; i++) {
  if (i % 2 === 0) {
    para[i].style.color = "blue";   // even index
  } else {
    para[i].style.color = "red";    // odd index
  }
}
para[para.length - 1].style.fontWeight = "bold";



// const para = document.getElementsByTagName("p");

// para.forEach((para, index) => {
//   if (index % 2 === 0) {
//     para.style.color = "blue";
//   } else {
//     para.style.color = "green";
//   }
// });

// para[para.length - 1].style.fontWeight = "bold";



const content = document.getElementById("content");
const paragraphs = content.querySelectorAll("p");

paragraphs.forEach(p => {
  p.style.color = "purple";
  p.style.lineHeight = "1.8";
});
