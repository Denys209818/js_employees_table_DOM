function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=null,r=document.getElementsByTagName("tbody")[0],a=document.getElementsByTagName("thead")[0],i=document.getElementsByClassName("new-employee-form")[0],o=null,c={title:"",asc:!0},l=[],u=a.querySelectorAll("th"),d=r.querySelectorAll("tr");a.addEventListener("click",function(e){var n=e.target.closest("th");if(n){var a=n.innerText;c.title!==a?(c.title=a,c.asc=!0):c.asc=!c.asc;var i=t(l).sort(function(e,t){return s(e[a],t[a])});("age"===a.toLowerCase()||"salary"===a.toLowerCase())&&(i=t(i).sort(function(e,t){return e[a].toString().length-t[a].toString().length})),r.innerHTML="",(i=c.asc?i:t(i.reverse())).forEach(function(e){var t=document.createElement("tr");for(var n in e){var a=document.createElement("td");a.innerText=e[n],t.appendChild(a)}return r.appendChild(t),t})}});var s=function(e,t){return e.toString().localeCompare(t.toString())};r.addEventListener("click",function(e){var t=e.target.closest("tr");t&&(t.classList.add("active"),null!==n&&n.classList.remove("active"),n=t)}),r.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t){var n=t.innerText;t.innerHTML="";var r=document.createElement("input");r.classList.add("cell-input"),r.value=n,t.appendChild(r),r.focus(),r.addEventListener("blur",function(){g(r,t,n)}),r.addEventListener("keydown",function(e){"Enter"===e.key&&g(r,t,n)})}}),i.addEventListener("submit",function(e){e.preventDefault(),e.stopPropagation();var t=new FormData(i),n={Name:t.get("name"),Position:t.get("position"),Office:t.get("office"),Age:parseInt(t.get("age")),Salary:parseInt(t.get("salary"))};if(f(n)){var a=document.createElement("tr"),o=document.createElement("td"),c=document.createElement("td"),u=document.createElement("td"),d=document.createElement("td"),s=document.createElement("td");o.innerText=n.Name||"",c.innerText=n.Position||"",u.innerText=n.Office||"",d.innerText=n.Age||0,s.innerText=v(n.Salary||0),a.append(o),a.append(c),a.append(u),a.append(d),a.append(s),l.push(n),r.appendChild(a)}});var f=function(e){return e.Name.length<4?(p("error","Error happened with Name","Your name has too low length"),!1):e.Position?!e.Age||e.Age<18||e.Age>90?(p("error","Error happened with Age","Your age is out of range"),!1):(p("success","Success!","An item is successfuly added!"),!0):(p("error","Error happened with Position","Position field mustn't be empty"),!1)},m=function(e,t){switch(t){case 1:return e.length>4;case 2:case 3:case 5:return e.length;case 4:var n=parseInt(e);if(!n)return!1;return n>=18&&n<=90;default:return!1}},p=function(e,t,n){var r=document.createElement("div");null!==o&&o.remove(),r.classList.add("notification"),r.classList.add(e),r.setAttribute("data-qa","notification");var a=document.createElement("h2");a.classList.add("title"),a.innerText=t;var i=document.createElement("span");i.innerText=n,r.appendChild(a),r.appendChild(i),document.body.appendChild(r),o=r},v=function(e){for(var n=e.toString(),r="",a=1,i=n.length-1;i>=0;i--)r+=n[i],a%3==0&&(r+=","),a++;return"$"+t(r).reverse().reduce(function(e,t){return e+t},"")},g=function(e,t,n){var r=e.value,a=Array.from(t.parentNode.children).indexOf(t)+1;if(!e.value||!m(e.value,a)){t.innerHTML=n,p("error","Field written incorrectly!","Check your answer");return}var i=r;5===a&&(i=(i=i.replace(",","")).replace("$","")),t.innerHTML=v(i),h()},h=function(){l=[],d.forEach(function(e){for(var t={},n=e.querySelectorAll("td"),r=0;r<n.length;r++)t[u[r].innerText]=n[r].innerText;l.push(t)})};h();
//# sourceMappingURL=index.0b168332.js.map