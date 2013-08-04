document.body.classList.remove("with-eyebrow");

var e = document.querySelector("#eyebrow");
if (e) e.style.display = "none";

document.addEventListener("DOMSubtreeModified", function() {
  var e = document.querySelector(".img-wrap a");
  if (e) e.addEventListener("click", function(e) { e.stopPropagation(); }, true);

  var e = document.querySelector(".bottom-controls");
  if (e) e.style.display = "none";
});
