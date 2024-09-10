let toggleButton = false
  
function toggle(){
  let nav = document.getElementById("navMenuParent")

  toggleButton = !toggleButton
  if(toggleButton){
    nav.className = 'closeNav'
  }else{
    nav.className = 'openNav'
  }
}