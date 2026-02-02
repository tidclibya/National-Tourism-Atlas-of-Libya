document.addEventListener("DOMContentLoaded",()=>{
  fetch("partials/nav.html")
    .then(r=>r.text())
    .then(html=>{
      document.getElementById("nav-placeholder").innerHTML=html;
      const page=document.body.dataset.page;
      document.querySelectorAll(".main-nav a").forEach(a=>{
        if(a.dataset.page===page){a.classList.add("active")}
      });
    });
});
