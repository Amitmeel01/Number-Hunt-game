


  const btn=document.querySelector(".submit")
  const remain=document.querySelector(".remain")
  let span=document.querySelector(".span")
  let arr=[];
  let input=document.querySelector("input");
   console.log(input.value)
    let x=Math.floor(Math.random()*100+1);
   console.log("guess",x)
   let count=0;

    btn.addEventListener("click",()=>{


   
 
   

   if(input.value>0){

    count++;
 
     if(count<10){
   arr.push(input.value);
   console.log(arr)

   if(x==input.value){
    document.querySelector(".right").textContent=`Congratulations, you guess right in ${count} attempt`
    input.value=""
    restart()
    
   }else if(x>input.value){
    document.querySelector(".right").textContent="Number is to low"
    input.value=""
   }else{
    document.querySelector(".right").textContent="Number is to high"
    input.value=""
   }
  
  

   span.innerHTML=arr
   remain.innerHTML=`${10-count}`
  }else{
    input.value=""
    remain.innerHTML=`${-1}`
    document.querySelector(".right").textContent="Game Over!!"
    
  }
   }else{
    document.querySelector(".right").textContent="enter valid number!!"
    input.value=""
   }
    })


   function restart(){
count=0;
remain.innerHTML=10
// arr=""

    }
 