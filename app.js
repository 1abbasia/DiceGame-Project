// let div1 = Math.ceil(Math.random()*6);
// let div2 =  Math.ceil(Math.random()*6); 
// let div3 = Math.ceil(Math.random()*6);



  // if((div1 === div2) || (div1 === div3)){
  //   console.log(div1)
  //   }else{console.log('not true')}
  
  // console.log(div1,div2,div3);
  
 
 //Score 1 
  // if((div1 === 1) && (div2 === 2) && (div3 === 2)) {
  //   var score = 1;
  // } else
  
  //if statements for first dice(div1);

  function roll(){

    console.log('hi')
  
  let div1=Math.ceil(Math.random()*6);
  let div2=Math.ceil(Math.random()*6);
  let div3=Math.ceil(Math.random()*6);

  console.log(div1,div2,div3);

  document.getElementById('1d1').innerHTML=div1;
  document.getElementById('1d2').innerHTML=div2;
  document.getElementById('1d3').innerHTML=div3;
//  console.log(el);
  
  

    console.log(score);
  
  let finScore1=document.getElementById('p1score').innerHTML=score
    
}
      
    

 
  document.getElementById('btn1').addEventListener('click', roll);
  
   document.getElementById('btn2').addEventListener('click', roll2);

   let finScore2=document.getElementById('p2score').innerHTML;
   let finScore1=document.getElementById('p1score').innerHTML;
   

   console.log(finScore1);