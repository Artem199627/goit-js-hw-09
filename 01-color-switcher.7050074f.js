!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.body;e.addEventListener("click",(function(){t=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.toggleAttribute("disabled")})),n.addEventListener("click",(function(){clearInterval(t),e.toggleAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.7050074f.js.map