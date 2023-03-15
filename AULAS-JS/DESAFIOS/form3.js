(function(){
  'use strict';
  
  let $btn = document.getElementById('btn');
  let $chk = document.getElementById('chk');
  
  toggleBtn();
  
  $chk.addEventListener('change', function(){        
      toggleBtn();        
  });
  
  function toggleBtn(){
      $btn.disabled = !$chk.checked;
  }
})()
