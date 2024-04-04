let but;
function done(){
    but = document.getElementById('budget').value
    if(but == ""){
        show.style.display="block"
        setTimeout(() => {
   show.style.display="none"
        }, 5000);
    }
    else{
        show.style.display='none'
        hidden.style.display='none'
        document.getElementById('show2').innerHTML =`<div class="p-3 border-danger fw-bold text-white" > 
         <div class="" style="background-color:  rgb(102, 98, 93); border: solid 1px grey; border-radius: 6px;">you have budgeted <span style="font-size: 25px; " class="text-info">#${but}:00 </span> to spend <p> ${time} , ${okay} </div>
          </div>`
        document.getElementById('show2').style.color = '#fff'
        document.getElementById('budget').value=''
        budAll.style.display='block'
    }
}
var time= new Date().toLocaleTimeString()
var okay=  new Date().toLocaleDateString()

// function displayA() {
    
//     let a = itemP.value
//     let b = itemQ.value
//     let c = a*b
//     let result = but-c
//     document.getElementById('show2').innerHTML =`<div class="p-3 border-danger fw-bold text-white" > 
//     <div class=" border-info">you have budgeted <span style="font-size: 25px; " class="text-info">#${result}:00 </span> to spend <p> ${time} , ${okay} </div>
//      </div>`
// }
let money = but
  function displayAll(){
b
   
  }
 

function submit(){
    if(itemN.value =='' || itemP.value=='' ||itemQ.value ==''){
   show3.style.display="block"
   setTimeout(()=>{
    show3.style.display="none"

   },5000)
    } else if(Number(itemP.value * itemQ.value) > 0 && Number(itemP.value * itemQ.value) > but ){
          showError.style.display='block'
          setTimeout(()=>{
            showError.style.display="none"
        
           },5000)
    }
    else{
      
     let a = itemP.value
     let b = itemQ.value
     let c = a*b
     let price=c
     let money = but -price
     show2.innerHTML= 'available money is ' + money
     show2.innerHTML=  `available money is <span class=" text-info fw-bold fs-3" > #${+ money}:00</span>   `
     but = money
        let n = itemN.value
        show3.style.display="none"
        document.getElementById('itemN').value=""
        document.getElementById('itemP').value=""
        document.getElementById('itemQ').value=""
        showAll.innerHTML+=` <div  style="background-color:  rgb(102, 98, 93); border: solid 1px grey; border-radius: 6px; margin-top: 10px;"><p class="text-white fw-bold"> you bought <span style="color:red;"class=" text-info" >${n}</span> at the price of <span style="color:red ;" class=" text-info" >#${a}:00 </span> at Quantity  <span style="color:red;" class=" text-info"> ${b}</span>, which total cost is  <span style="color:red;"class=" text-info" >#${c}:00 </span><br>
        and You have <span class=" text-info fw-bold fs-3" > #${money}:00</span>  left  to spend <br></div>
        `
        
    }
    
}
