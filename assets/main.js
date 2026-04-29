document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav a').forEach(function(a){
    if(a.getAttribute('href')===path||a.getAttribute('href').endsWith(path)){
      a.classList.add('active');
    }
  });
});
