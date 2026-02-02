function generateReport(){
  let text=`تقرير أسبوعي
التاريخ: ${new Date().toLocaleDateString('ar-LY')}`;
  let b=new Blob([text]);
  let a=document.createElement("a");
  a.href=URL.createObjectURL(b);
  a.download="weekly-report.txt";
  a.click();
}
