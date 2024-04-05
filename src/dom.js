const dom=()=>{
console.log('a');
const contentdiv=document.querySelector(".content");
const innerH1=document.createElement("h1");
innerH1.textContent="HELLO WORLD";
contentdiv.appendChild(innerH1);
}
export default dom