// document.getElementById("dropdown").style.display = "none"
// document.getElementById("quote1").style.display = "block"
document.getElementById("signInpage").style.display = "none"
console.log("connected")
function navbar() {
    // var x = document.getElementById('dropdown');
    if (x.style.display === 'none') {
      // document.getElementById("quote1").style.display = "none"
      x.style.display = 'grid'
      setTimeout(()=>{
        document.getElementById("aware").style.cssText = "width:60vw;margin-left:30vw;"
      document.getElementById("awareH1").style.cssText="margin-left:12vw;"
      },500)
      
    } else {
      x.style.display = 'none';
      // document.getElementById("quote1").style.display = "block"
      document.getElementById("aware").style.cssText = "grid-area: aware;delay:0.5s;height: 100vh;width: 100%;background-color: rgb(44, 43, 43);"
      document.getElementById("awareH1").style.cssText="margin-top: 10vh;margin-left: 22vw;;"

    }
  }

  function formchange(){
    if(document.getElementById("signInpage").style.display === "none"){
      document.getElementById("logInpage").style.display = 'none'
      setTimeout(()=>{
        document.getElementById("signInpage").style.display = 'grid'
      },300)
      
    }
    else{
      document.getElementById("signInpage").style.display = 'none'
      setTimeout(()=>{
        document.getElementById("logInpage").style.display = 'grid'
      },300)
    }
  }