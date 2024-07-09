(()=>{"use strict";const e={};function t(n,d=null){const o=n,a=document.querySelector(".main-content"),i=document.querySelector(".todo-Box-Container"),s=document.createElement("div"),c=document.createElement("div"),l=document.querySelector(".newToDoButton");i&&a.removeChild(i),s.classList.add("todo-Box-Container"),c.classList.add("toDoBox"),c.classList.contains("hidden")||c.classList.add("hidden"),"far fa-edit"===o.target.className&&(a.appendChild(s),c.classList.toggle("hidden"));const r=document.createElement("div");r.classList.add("itemHeading");const u=document.createElement("h3");u.textContent="TO-DO ITEM",r.appendChild(u);const p=document.createElement("div"),m=document.createElement("form");m.id="todo-form";const h=document.createElement("div");h.classList.add("form-group");const C=document.createElement("input");C.type="text",C.id="title",C.name="title",C.required=!0,C.placeholder="Title";const v=document.createElement("textarea");v.id="description",v.name="description",v.placeholder="Description",h.appendChild(C),h.appendChild(v);const E=document.createElement("div");E.classList.add("form-group");const L=document.createElement("input");L.type="date",L.id="due-date",L.name="due-date",L.required=!0,L.placeholder="DD-MM-YYYY";const f=document.createElement("select");f.id="priority",f.name="priority";const g=document.createElement("option");g.value="low",g.textContent="Low";const y=document.createElement("option");y.value="medium",y.textContent="Medium";const x=document.createElement("option");x.value="high",x.textContent="High",f.appendChild(g),f.appendChild(y),f.appendChild(x),E.appendChild(L),E.appendChild(f);const b=document.createElement("div");b.classList.add("addCancelButtons");const k=document.createElement("button");k.type="submit",k.classList.add("submitBox"),k.textContent="Submit";const D=document.createElement("button");D.type="submit",D.classList.add("cancel"),D.textContent="Cancel",b.appendChild(k),b.appendChild(D),m.appendChild(h),m.appendChild(E),m.appendChild(b),p.appendChild(m),c.appendChild(r),c.appendChild(p),s.appendChild(c),"ADD TASK"===o.target.innerText&&(console.log(o.target.innerText),l.disabled=!0,c.classList.toggle("hidden"),a.appendChild(s)),d&&(C.value=d.title,v.value=d.description,L.value=d.dueDate,f.value=d.priority),D.addEventListener("click",(e=>{C.value="",L.value="",l.disabled=!1,v.value="",c.classList.toggle("hidden"),a.removeChild(s),e.preventDefault()})),m.addEventListener("submit",(n=>{n.preventDefault(),l.disabled=!1;const d={title:C.value,description:v.value,dueDate:L.value,priority:f.value};"far fa-edit"===o.target.className&&console.log(d),function(n,d){const{title:o,description:a,dueDate:i,priority:s}=d,c=document.querySelector(".mainheading"),l=document.querySelector(".todo-list"),r=Date.now(),u=document.createElement("div");u.classList.add("todo-item"),u.setAttribute("data-id",r);const p=document.createElement("div");p.classList.add("title"),p.textContent=o,u.appendChild(p),"low"===s?u.style.border="2px solid red":"medium"===s?u.style.border="2px solid orange":"high"===s&&(u.style.border="2px solid green");const m=document.createElement("div");m.classList.add("description-container");const h=document.createElement("div");h.classList.add("description"),h.textContent=a,m.appendChild(h),u.appendChild(m);const C=document.createElement("div");C.classList.add("due-date"),C.textContent=i,u.appendChild(C);const v=document.createElement("button");v.classList.add("far","fa-edit"),u.appendChild(v);const E=document.createElement("button");E.classList.add("fas","fa-trash"),u.appendChild(E),l.appendChild(u),console.log(c.children[0]);const L=c.children[0].innerHTML;e[L]||(e[L]={tasks:[]}),e[L].tasks.push({id:r,title:o,description:a,dueDate:i,priority:s}),E.addEventListener("click",(t=>{t.preventDefault(),u.remove();const n=u.getAttribute("data-id"),d=e[L].tasks.findIndex((e=>String(e.id)===n));e[L].tasks.splice(d,1),console.log(e,"lolpochka")})),v.addEventListener("click",(n=>{n.preventDefault();const d={title:p.textContent,description:h.textContent,dueDate:C.textContent,priority:s};t(n,d),p.textContent=d.title,h.textContent=d.description,C.textContent=d.dueDate,"low"===d.priority?u.style.border="2px solid red":"medium"===d.priority?u.style.border="2px solid orange":"high"===d.priority&&(u.style.border="2px solid green");const o=e[L];o.value=o.value.filter((e=>e!==u))})),console.log(e,u)}(0,d),c.classList.toggle("hidden"),a.removeChild(s)}))}!function(){const n=document.querySelector("form"),d=(document.querySelector(".main-content"),document.querySelector(".newButton")),o=document.querySelector(".newTaskInput"),a=document.querySelector(".projectList");var i=document.createElement("button"),s="";d.addEventListener("click",(()=>{n.classList.toggle("hidden")})),o.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),function(){const e=document.createElement("span"),t=document.createElement("button"),d=document.createElement("button"),c=document.createElement("div");i=document.createElement("button"),""!==(s=(s=o.value).toUpperCase())&&(e.classList.add("content"),t.classList.add("fas","fa-trash"),d.classList.add("far","fa-edit"),i.classList.add("newTaskItem"),c.classList.add("itemIcons"),e.textContent=s,c.appendChild(d),c.appendChild(t),i.appendChild(e),i.appendChild(c),a.appendChild(i),o.value="",n.classList.add("hidden"))}())}));var c=!0;document.addEventListener("click",(function(e){if(e.target.classList.contains("fa-trash")){const t=e.target.closest(".newTaskItem");t&&t.remove()}else if(e.target.classList.contains("fa-edit")&&c){const t=e.target.closest(".newTaskItem");c=!1;const n=t.querySelector("span.content"),d=document.createElement("input");d.type="text",d.classList.add("newTaskInput"),d.value=n.textContent,n.replaceWith(d),d.addEventListener("keydown",(t=>{"Enter"===t.key&&(e.preventDefault(),n.textContent=d.value.toUpperCase(),d.replaceWith(n),c=!0)}))}})),document.addEventListener("click",(n=>{"newTaskItem"===n.target.className&&function(n){const d=document.querySelector(".main-content"),o=document.querySelector(".todo-list");o.innerHTML="";const a=d.querySelector(".mainheading div");if(a)a.textContent=n;else{const e=document.createElement("div");e.textContent=n,d.querySelector(".mainheading").appendChild(e)}e[n]&&e[n].tasks?e[n].tasks.forEach((t=>{const d=function(t,n){const{id:d,title:o,description:a,dueDate:i,priority:s}=t,c=document.createElement("div");c.classList.add("todo-item"),c.setAttribute("data-id",d);const l=document.createElement("div");l.classList.add("title"),l.textContent=o,c.appendChild(l);const r=document.createElement("div");r.classList.add("description"),r.textContent=a,c.appendChild(r);const u=document.createElement("div");u.classList.add("due-date"),u.textContent=i,c.appendChild(u);const p=document.createElement("button");p.classList.add("far","fa-edit"),c.appendChild(p);const m=document.createElement("button");return m.classList.add("fas","fa-trash"),c.appendChild(m),"low"===s?c.style.border="2px solid red":"medium"===s?c.style.border="2px solid orange":"high"===s&&(c.style.border="2px solid green"),p.addEventListener("click",(()=>{})),m.addEventListener("click",(()=>{c.remove();const t=e[n].tasks.findIndex((e=>e.id===d));-1!==t&&e[n].tasks.splice(t,1)})),c}(t,n);o.appendChild(d),console.log("po ra pooka")})):console.log("No tasks found for project:",n,e);let i=d.querySelector(".newToDoButton");i||(i=function(){const e=document.createElement("button");e.classList.add("newToDoButton");const n=document.createElement("h3");n.textContent="ADD TASK",n.style.fontSize="medium",n.style.paddingRight="13px";const d=document.createElement("i");return d.classList.add("fas","fa-plus"),d.style.padding="2px",d.style.fontSize="small",e.appendChild(n),e.appendChild(d),e.addEventListener("click",(e=>{t(e)})),e}(),d.querySelector(".mainheading").appendChild(i))}(n.target.innerText)}))}()})();