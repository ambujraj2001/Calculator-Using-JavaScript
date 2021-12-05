
/*CSS*/
let light = document.querySelector(".light");
let darker = document.querySelector(".darker");
let standard = document.querySelector(".standard");

function lightcss() {
  if (document.getElementById("css").getAttribute("href") != "light.css") {
    document.getElementById("css").setAttribute("href", "light.css");
    console.log("light");
  }
}
function darkercss() {
  if (document.getElementById("css").getAttribute("href") != "darker.css") {
    document.getElementById("css").setAttribute("href", "darker.css");
    console.log("darker");
  }
}
function standardcss() {
  if (document.getElementById("css").getAttribute("href") != "standard.css") {
    document.getElementById("css").setAttribute("href", "standard.css");
    console.log("standard");
  }
}


/*Calculator*/
function clearscreen()
{
  document.querySelector(".result").value=" ";
}
function adddata(data)
{
  document.querySelector(".result").value+=data;
}
function compute()
{
  let x = document.querySelector(".result").value;
  let ans=eval(x);
  document.querySelector(".result").value=ans;
}
function deletelast()
{
  let s = document.querySelector(".result").value;
  let b=s.slice(0,-1);
  document.querySelector(".result").value=b;
}

