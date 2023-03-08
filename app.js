
let rollFunc;
let selectBox = document.getElementById("char-select");
let selectBox2 = document.getElementById("char-select2")

selectBox.addEventListener("change", e =>{
  document.getElementById("char-image").src = selectBox.value;
  
})
selectBox2.addEventListener("change", e =>{
  document.getElementById("char-image2").src = selectBox2.value;
  
})

  function roll(){

  console.log('hi') //check to see if roll function fires
  
  let div1=Math.ceil(Math.random()*6); //There are 3 die so 3 different random numbers
  let div2=Math.ceil(Math.random()*6); 
  let div3=Math.ceil(Math.random()*6);

  // console.log(div1,div2,div3); //check if random num works

  document.getElementById('1d1').innerHTML=div1; //put the values of roll into divs
  document.getElementById('1d2').innerHTML=div2;
  document.getElementById('1d3').innerHTML=div3;

  let rolledDie1 = [div1,div2,div3]; //make the rolled number into array

  // console.log(rolledDie1); //check if array shows
   let score;


   let sorted = [...rolledDie1].sort((a, b) => a - b).join('');

   console.log(sorted);

  if (sorted === '456') {
    console.log('YOU WIN')
  }
  
  if (sorted === '123') {
    console.log('YOU LOSE')
  }

  if (rolledDie1[0] === rolledDie1[1]){
        score = rolledDie1[2];
     } else if ( rolledDie1[0] === rolledDie1[2]){
        score = rolledDie1[1];
     } else if (rolledDie1[1] === rolledDie1[2]){
         score = rolledDie1[0];
     } else {score ='roll again';}
    console.log(score);
  
  

    console.log(score);
  
  let finScore1=document.getElementById('p1score').innerHTML=score
    
}

function roll2(){

  console.log('hi') //check to see if roll function fires
  
  let div1=Math.ceil(Math.random()*6); //There are 3 die so 3 different random numbers
  let div2=Math.ceil(Math.random()*6);
  let div3=Math.ceil(Math.random()*6);

  // console.log(div1,div2,div3); //check if random num works

  document.getElementById('2d1').innerHTML=div1; //put the values of roll into divs
  document.getElementById('2d2').innerHTML=div2;
  document.getElementById('2d3').innerHTML=div3;

  let rolledDie1 = [div1,div2,div3]; //make the rolled number into array

  // console.log(rolledDie1); //check if array shows
   let score;


   let sorted = [...rolledDie1].sort((a, b) => a - b).join('');

  
   console.log(sorted);

  if (sorted === '456') {
    document.getElementById('p2score').innerHTML="YOU WIN!";;
    alert('Player 2 wins!')
    console.log('YOU WIN')
  }
  

  if (sorted === '123') {
    document.getElementById('p2score').innerHTML="YOU LOSE!";
     alert('Player 1 Wins!');
    console.log('YOU LOSE')
  }
 
  // let loseCon = document.getElementById('p2score').innerHTML;
  // let winCon = document.getElementById('p2score').innerHTML;
 
  
    
  
    if (rolledDie1[0] === rolledDie1[1]){
      score = rolledDie1[2];
   } else if ( rolledDie1[0] === rolledDie1[2]){
      score = rolledDie1[1];
   } else if (rolledDie1[1] === rolledDie1[2]){
       score = rolledDie1[0];
   }  else {score ='roll again';}

  

    //  if (rolledDie1[0] === rolledDie1[1]){
    //     score = rolledDie1[2];
    //  } else if ( rolledDie1[0] === rolledDie1[2]){
    //     score = rolledDie1[1];
    //  } else if (rolledDie1[1] === rolledDie1[2]){
    //      score = rolledDie1[0];
    //  }  else {score ='roll again';}
    // console.log(score);
  
  

    console.log(score);
  
  let finScore2=document.getElementById('p2score').innerHTML=score
    
}
      
    
document.getElementById
 
  document.getElementById('btn1').addEventListener('click', roll);
  
   document.getElementById('btn2').addEventListener('click', roll2);

  //  let finScore2=document.getElementById('p2score').innerHTML;
  //  let finScore1=document.getElementById('p1score').innerHTML;
   

  