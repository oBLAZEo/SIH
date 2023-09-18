var loader;
      function myFunction(){
        loader =setTimeout(showPage,1000);
      }
      function showPage(){
        document.getElementById("preloader").style.display='none';
        document.getElementById("myDiv").style.display='block';
        
      }