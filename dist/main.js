(()=>{"use strict";!function(){const e=document.querySelector("form"),t=document.querySelector(".newTaskButton"),n=document.querySelector(".newTaskInput"),d=document.querySelector(".taskList"),a=document.querySelector(".addTask");t.addEventListener("click",(()=>{e.classList.toggle("hidden")})),n.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),function(){const t=document.createElement("button"),c=n.value.toUpperCase();if(""!==c){const s=document.createElement("span"),o=document.createElement("button"),l=document.createElement("button"),r=document.createElement("div");s.classList.add("content"),o.classList.add("fas","fa-trash"),l.classList.add("far","fa-edit"),t.classList.add("newTaskItem"),r.classList.add("itemIcons"),s.textContent=c,r.appendChild(l),r.appendChild(o),t.appendChild(s),t.appendChild(r),d.appendChild(t),n.value="",e.classList.add("hidden"),t.addEventListener("click",(()=>{a.classList.remove("hidden")}))}}())}));var c=!0;d.addEventListener("click",(e=>{const t=e.target.parentNode;if("fas fa-trash"===e.target.className)t.previousElementSibling.parentNode.remove();else if("far fa-edit"===e.target.className&&c){c=!1;const n=t.parentNode.childNodes[0],d=document.createElement("input");d.type="text",d.classList.add("newTaskInput"),d.value=n.textContent,n.replaceWith(d),d.addEventListener("keydown",(t=>{"Enter"===t.key&&(e.preventDefault(),n.textContent=d.value,d.replaceWith(n),c=!0)}))}}))}(),function(){const e=document.querySelector(".addTask"),t=document.getElementById("title"),n=(document.querySelector("#description"),document.getElementById("due-date")),d=(document.querySelector("#priority"),document.querySelector(".cancel")),a=document.querySelector(".toDoBox"),c=document.querySelector(".submitBox"),s=document.querySelector(".todo-Box-Container");e.addEventListener("click",(()=>{console.log(a.classList),s.style.backdropFilter="blur(2px)",a.classList.toggle("hidden")})),d.addEventListener("click",(e=>{t.value="",n.value="",s.style.backdropFilter="blur(0px)",a.classList.toggle("hidden"),e.preventDefault()})),c.addEventListener("click",(e=>{a.classList.toggle("hidden"),s.style.backdropFilter="blur(0px)",e.preventDefault()}))}()})();