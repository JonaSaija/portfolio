    let menuClose = false;
  
      const button = document.getElementById(menuButton)
      const div = document.getElementById(navMenuParent)
  
      button.onclick = function()
      {
          menuClose = !menuClose;
      }
  
      function buttonClick(pageName)
      {
          console.log("Button is clicked for page: " + pageName)
      }
  
      if(menuClose){
          div.className = "closeNav"
      }else{
          div.className = "openNav"
      }
  
      console.log(menuClose);