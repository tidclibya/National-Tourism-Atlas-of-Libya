setTimeout(()=>{
  let total=0,done=0;
  layers.forEach(l=>{
    l.eachLayer(m=>{
      total++;
      let d=m.feature?.properties?.description||"";
      if(d.includes("مكتمل")) done++;
    });
  });
  document.getElementById("kpi-total").innerText=total;
  document.getElementById("kpi-completed").innerText=done;
  document.getElementById("kpi-progress").innerText=Math.round((done/total)*100)+"%";
},3000);
