const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
  })

 
 
  const service=document.getElementById('click-s');
  const learning=document.getElementById('click-l');
  const aducation=document.getElementById('click-a');
  service.addEventListener("click",(e)=>{
    const tab4=document.getElementById('tab-4');
    const tab5=document.getElementById('tab-5');
    const tab6=document.getElementById('tab-6');
  
   return console.log(e);
  })