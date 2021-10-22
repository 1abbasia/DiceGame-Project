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
  
  
  if( div1 === 1 && div2 === 3 && div3===3 ){
    var score =1;
  } else if(div1===1 && div2===2 && div3===2){
    var score=1;
  }
  
    else if(div1 ===1 && div2===4 && div3===4){
    var score = 1;
  } else if(div1===1 && div2===5 && div3===5){
    var score=1;
  } else if( div1===1 && div2===6 && div3===6){
    var score=1;
  } else if(div1===2 && div2===1 && div3===1){
    var score=2;
  } else if(div1===2 &&div2===3 && div3===3){
    var score=2;
  } else if(div1===2 &&div2===4 && div3===4){
    var score=2;
  } else if(div1===2 && div2===5 && div3===5){
    var score=2;
  } else if(div1===2 && div2===6 && div3===6){
    var score=2;
  } else if(div1===3 && div2===1 && div2===1 & div3===1){
    var score=3;
  } else if(div1===3 && div2===2 && div3===2){
    var score=3;
  } else if(div1===3 && div2===4 && div3===4){
    var score=3;
  } else if(div1===3 && div2===5 && div3===5){
    var score=3;
  } else if(div1===3 && div2===6 && div3===6){
    var score=3;
  }
    else if(div1===4 && div2===1 && div3===1){
      var score=4;
    } else if(div1===4 && div2===2 && div3===3){
       score =4;
    } else if(div1===4 && div2===3 && div3===3){
      var score= 4;
    } else if(div1===4 && div2===5 && div3===5){
      var score=4;
    } else if(div1===4 && div2===6 && div3===6){
      var score=4;
      
    } else if(div1===5 && div2==1 && div3===1){
      var score=5;
    } else if(div1===5 && div2===2 && div3===2){
      var score=5;}
      else if(div1===5 && div2===3 && div3===3){
        var score= 5;
      } else if(div1===5 && div2===4 && div3===4){
        var score=5;
      } else if(div1===5 && div2===6 && div3===6){
        var score=5;
      } else if(div1===6 && div2===1 && div3===1){
        var score=6;
      } else if(div1===6 && div2===2 && div3===2){
        var score=6;
      } else if(div1===6 && div2===3 && div3===3){
        var score=6;
      } else if(div1===6 && div2===4 && div3===4){
        var socre=6;
      } else if(div1===6 && div2===5 && div3===5){
        var score=6;
      }
      
      //If statements for second dice (div2)
      else if(div1===2 && div2===1 && div3===2){
        var sscore=1;
      } else if(div1===3 && div2===1 && div3===3){
        var score=1;
      } else if(div1===4 && div2===1 && div3===4){
        var score=1;
      } else if(div1===5 && div2===1 && div3===5){
        var score=1;
      } else if( div1===6 && div2===1 && div3===6){
        var score=1;
      } else if(div1===1 && div2===2 && div3===1){
        var score=2;
      } else if(div1===3 && div2===2 && div3===3){
        var score=2;
      } else if(div1===4 && div2===2 && div3===4){
        var score=2;
      } else if(div1===5 && div2===2 && div3===5){
        var score=2;
      } else if(div1===6 && div2===2 && div3===6){
        var score=2;
      } else if(div1===1 && div2===3 && div3===1){
        var score=3;
      } else if(div1===2 && div2===3 && div3===2){
        var score=3;
      } else if(div1===4 && div2===3 && div3===4){
        var score=3;
      } else if(div1===5 && div2===3 && div3===5){
        var score=3;
        
      } else if(div1===6 && div2===3 && div3===6){
        var score=3;
      } else if(div1===1 && div2===4 && div3===1){
        var score=4;
      } else if(div1===2 && div2===4 && div3===2){
        var score=4;
      } else if(div1===3 && div2===4 && div3===3){
        var score=4;
      } else if(div1===5 && div2===4 && div3===5){
        var score=4;
      } else if(div1===6 && div2===4 && div3===6){
        var score=4;
      } else if(div1===1 && div2===5 && div3===1){
        var score=5;
      } else if(div1===2 && div2===5 && div3===2){
        var score=5;
      } else if(div1===3 && div2===5 && div3===3){
        var score=5;
      } else if(div1===4 && div2===5 && div3===4){
        var score=5;
      } else if(div1===6 && div2===5 && div3===6){
        var score=5;
      } else if (div1===1 && div2===6 && div3===1){
        var score=6;
      } else if(div1===2 && div2===6 && div3===2){
        var score=6;
      } else if(div1===3 && div3===6 && div3===3){
        var score=6;
      } else if(div1===4 && div2===6 && div3===4){
        var score=6;
      } else if(div1===5 && div2===6 && div3===5){
        var score=6;
        
        //If statements for the third dice (div3)
        
      } else if(div1===1 && div2===1 && div3===2){
        var score=2;
      } else if(div1===3 && div2===3 && div3===2){
        var score=2;
      } else if(div1===4 && div2===4 && div3===2){
        var score=2;
      } else if(div1===5 && div2===5 && div3===2){
        var score=2;
      } else if(div1===6 && div2===6 && div3===2){
        var score=2;
      } else if(div1===2 && div2===2 && div3===1){
        var score=1;
      } else if(div1===3 && div2===3 && div3===1){
        var score=1;
      } else if(div1===4 && div2===4 && div3===1){
        var score=1;
      } else if(div1===5 && div2===5 && div3===1){
        var score=1;
      } else if(div1===6 && div2===6 && div3===1){
        var score=1;
      } else if(div1===1 && div2===1 && div3===3){
        var score=3;
      } else if(div1===2 && div2===2 && div3===3){
        var score=3;
      } else if(div1===4 && div2===4 && div3===3){
        var score=3;
      } else if(div1===5 && div2===5 && div3===3){
        var sscore=3;
      } else if(div1===6 && div2===6 && div3===3){
        var score=3;
      }  else if(div1===1 && div2===1 && div3===4){
        var score=4;
      } else if(div1===2 && div2===2 && div3===4){
        var score=4;
      } else if(div1===3 && div2===3 && div3===4){
        var score=4;
      } else if(div1===5 && div2===5 && div3===4){
        var sscore=4;
      } else if(div1===6 && div2===6 && div3===4){
        var score=4;
      }  else if(div1===1 && div2===1 && div3===5){
        var score=5;
      } else if(div1===2 && div2===2 && div3===5){
        var score=5;
      } else if(div1===4 && div2===4 && div3===5){
        var score=5;
      } else if(div1===3 && div2===3 && div3===5){
        var sscore=5;
      } else if(div1===6 && div2===6 && div3===5){
        var score=5;
      } else if(div1===1 && div2===1 && div3===6){
        var score=6;
      } else if(div1===2 && div2===2 && div3===6){
        var score=6;
      } else if(div1===3 && div2==3 && div3===6){
        var score=6;
      } else if(div1===4 && div2==4 && div3===6){
        var score=6;
      } else if(div1===5 && div2===5 && div3===6){
        var score=6;
        //Winnign combo statements. If the palyer get any combination of 4-5-6 they win!
      } else if (div1===4 && div2===5 && div3===6){
      console.log('you win!');
    } else if(div1===5 && div2===4 && div3===6){
      console.log('you win');
    } else if(div1===4 && div2===6 && div3===5){
      console.log('you iwn!');
    } else if(div1===5 && div2===6 && div3===4){
      console.log('you win!');
    } else if(div1===6 && div2===4 && div3===5){
      console.log('you win!')
    } else if(div1===6 && div2===5 && div3===4){
      console.log('you win');
    } else if(div1===5 && div2===4 && div3===6){
      console.log('you win');
    } else if(div1===4 && div2===6 && div3===5){
      console.log('you iwn!');
    } else if(div1===5 && div2===6 && div3===4){
      console.log('you win!')
    } else if(div1===6 && div2===4 && div3===5){
      console.log('you win!')
    } else if(div1===6 && div2===5 && div3===4){
      console.log('you win');
     
     //Statements for automatic loss 1-2-3 
    } else if(div1==1 && div2===2 && div3===3){
      console.log("You're a scrub!")
    } else if(div1===1 && div2===3 && div3===2){
      console.log("you're a scrub!")
    } else if(div1===2 && div2===1 && div3===3){
      console.log("you're a scrub!")
    } else if(div1===2 && div2===3 && div3===1){
      console.log("You're  a scrub!")
    } else if(div1===3 && div2===1 && div3===2){
      console.log("you're a scrub")
    } else if(div1===3 && div2===2 && div3===1){
      console.log("you're a scrub!")
    } 
    else{var score='Roll again!'}

    console.log(score);
  
  let finScore1=document.getElementById('p1score').innerHTML=score
    
}
      
    

 
   
  
  
 function roll2(){

    console.log('hi')
  
  let div1=Math.ceil(Math.random()*6);
  let div2=Math.ceil(Math.random()*6);
  let div3=Math.ceil(Math.random()*6);

  console.log(div1,div2,div3);

  

  let elem=document.getElementById('ply2d1');
  let elem2=document.getElementById('ply2d2');
   let elem3=document.getElementById('ply2d3');

  //  console.log(elem);

   elem.innerHTML=div1;
   elem2.innerHTML=div2;
   elem3.innerHTML=div3;
  
  
  if( div1 === 1 && div2 === 3 && div3===3 ){
    var score =1;
  } else if(div1===1 && div2===2 && div3===2){
    var score=1;
  }
  
    else if(div1 ===1 && div2===4 && div3===4){
    var score = 1;
  } else if(div1===1 && div2===5 && div3===5){
    var score=1;
  } else if( div1===1 && div2===6 && div3===6){
    var score=1;
  } else if(div1===2 && div2===1 && div3===1){
    var score=2;
  } else if(div1===2 &&div2===3 && div3===3){
    var score=2;
  } else if(div1===2 &&div2===4 && div3===4){
    var score=2;
  } else if(div1===2 && div2===5 && div3===5){
    var score=2;
  } else if(div1===2 && div2===6 && div3===6){
    var score=2;
  } else if(div1===3 && div2===1 && div2===1 & div3===1){
    var score=3;
  } else if(div1===3 && div2===2 && div3===2){
    var score=3;
  } else if(div1===3 && div2===4 && div3===4){
    var score=3;
  } else if(div1===3 && div2===5 && div3===5){
    var score=3;
  } else if(div1===3 && div2===6 && div3===6){
    var score=3;
  }
    else if(div1===4 && div2===1 && div3===1){
      var score=4;
    } else if(div1===4 && div2===2 && div3===3){
       score =4;
    } else if(div1===4 && div2===3 && div3===3){
      var score= 4;
    } else if(div1===4 && div2===5 && div3===5){
      var score=4;
    } else if(div1===4 && div2===6 && div3===6){
      var score=4;
      
    } else if(div1===5 && div2==1 && div3===1){
      var score=5;
    } else if(div1===5 && div2===2 && div3===2){
      var score=5;}
      else if(div1===5 && div2===3 && div3===3){
        var score= 5;
      } else if(div1===5 && div2===4 && div3===4){
        var score=5;
      } else if(div1===5 && div2===6 && div3===6){
        var score=5;
      } else if(div1===6 && div2===1 && div3===1){
        var score=6;
      } else if(div1===6 && div2===2 && div3===2){
        var score=6;
      } else if(div1===6 && div2===3 && div3===3){
        var score=6;
      } else if(div1===6 && div2===4 && div3===4){
        var socre=6;
      } else if(div1===6 && div2===5 && div3===5){
        var score=6;
      }
      
      //If statements for second dice (div2)
      else if(div1===2 && div2===1 && div3===2){
        var sscore=1;
      } else if(div1===3 && div2===1 && div3===3){
        var score=1;
      } else if(div1===4 && div2===1 && div3===4){
        var score=1;
      } else if(div1===5 && div2===1 && div3===5){
        var score=1;
      } else if( div1===6 && div2===1 && div3===6){
        var score=1;
      } else if(div1===1 && div2===2 && div3===1){
        var score=2;
      } else if(div1===3 && div2===2 && div3===3){
        var score=2;
      } else if(div1===4 && div2===2 && div3===4){
        var score=2;
      } else if(div1===5 && div2===2 && div3===5){
        var score=2;
      } else if(div1===6 && div2===2 && div3===6){
        var score=2;
      } else if(div1===1 && div2===3 && div3===1){
        var score=3;
      } else if(div1===2 && div2===3 && div3===2){
        var score=3;
      } else if(div1===4 && div2===3 && div3===4){
        var score=3;
      } else if(div1===5 && div2===3 && div3===5){
        var score=3;
        
      } else if(div1===6 && div2===3 && div3===6){
        var score=3;
      } else if(div1===1 && div2===4 && div3===1){
        var score=4;
      } else if(div1===2 && div2===4 && div3===2){
        var score=4;
      } else if(div1===3 && div2===4 && div3===3){
        var score=4;
      } else if(div1===5 && div2===4 && div3===5){
        var score=4;
      } else if(div1===6 && div2===4 && div3===6){
        var score=4;
      } else if(div1===1 && div2===5 && div3===1){
        var score=5;
      } else if(div1===2 && div2===5 && div3===2){
        var score=5;
      } else if(div1===3 && div2===5 && div3===3){
        var score=5;
      } else if(div1===4 && div2===5 && div3===4){
        var score=5;
      } else if(div1===6 && div2===5 && div3===6){
        var score=5;
      } else if (div1===1 && div2===6 && div3===1){
        var score=6;
      } else if(div1===2 && div2===6 && div3===2){
        var score=6;
      } else if(div1===3 && div3===6 && div3===3){
        var score=6;
      } else if(div1===4 && div2===6 && div3===4){
        var score=6;
      } else if(div1===5 && div2===6 && div3===5){
        var score=6;
        
        //If statements for the third dice (div3)
        
      } else if(div1===1 && div2===1 && div3===2){
        var score=2;
      } else if(div1===3 && div2===3 && div3===2){
        var score=2;
      } else if(div1===4 && div2===4 && div3===2){
        var score=2;
      } else if(div1===5 && div2===5 && div3===2){
        var score=2;
      } else if(div1===6 && div2===6 && div3===2){
        var score=2;
      } else if(div1===2 && div2===2 && div3===1){
        var score=1;
      } else if(div1===3 && div2===3 && div3===1){
        var score=1;
      } else if(div1===4 && div2===4 && div3===1){
        var score=1;
      } else if(div1===5 && div2===5 && div3===1){
        var score=1;
      } else if(div1===6 && div2===6 && div3===1){
        var score=1;
      } else if(div1===1 && div2===1 && div3===3){
        var score=3;
      } else if(div1===2 && div2===2 && div3===3){
        var score=3;
      } else if(div1===4 && div2===4 && div3===3){
        var score=3;
      } else if(div1===5 && div2===5 && div3===3){
        var sscore=3;
      } else if(div1===6 && div2===6 && div3===3){
        var score=3;
      }  else if(div1===1 && div2===1 && div3===4){
        var score=4;
      } else if(div1===2 && div2===2 && div3===4){
        var score=4;
      } else if(div1===3 && div2===3 && div3===4){
        var score=4;
      } else if(div1===5 && div2===5 && div3===4){
        var sscore=4;
      } else if(div1===6 && div2===6 && div3===4){
        var score=4;
      }  else if(div1===1 && div2===1 && div3===5){
        var score=5;
      } else if(div1===2 && div2===2 && div3===5){
        var score=5;
      } else if(div1===4 && div2===4 && div3===5){
        var score=5;
      } else if(div1===3 && div2===3 && div3===5){
        var sscore=5;
      } else if(div1===6 && div2===6 && div3===5){
        var score=5;
      } else if(div1===1 && div2===1 && div3===6){
        var score=6;
      } else if(div1===2 && div2===2 && div3===6){
        var score=6;
      } else if(div1===3 && div2==3 && div3===6){
        var score=6;
      } else if(div1===4 && div2==4 && div3===6){
        var score=6;
      } else if(div1===5 && div2===5 && div3===6){
        var score=6;
        //Winnign combo statements. If the palyer get any combination of 4-5-6 they win!
      } else if (div1===4 && div2===5 && div3===6){
      console.log('you win!');
    } else if(div1===5 && div2===4 && div3===6){
      console.log('you win');
    } else if(div1===4 && div2===6 && div3===5){
      console.log('you iwn!');
    } else if(div1===5 && div2===6 && div3===4){
      console.log('you win!');
    } else if(div1===6 && div2===4 && div3===5){
      console.log('you win!')
    } else if(div1===6 && div2===5 && div3===4){
      console.log('you win');
    } else if(div1===5 && div2===4 && div3===6){
      console.log('you win');
    } else if(div1===4 && div2===6 && div3===5){
      console.log('you iwn!');
    } else if(div1===5 && div2===6 && div3===4){
      console.log('you win!')
    } else if(div1===6 && div2===4 && div3===5){
      console.log('you win!')
    } else if(div1===6 && div2===5 && div3===4){
      console.log('you win');
     
     //Statements for automatic loss 1-2-3 
    } else if(div1==1 && div2===2 && div3===3){
      console.log("You're a scrub!")
    } else if(div1===1 && div2===3 && div3===2){
      console.log("you're a scrub!")
    } else if(div1===2 && div2===1 && div3===3){
      console.log("you're a scrub!")
    } else if(div1===2 && div2===3 && div3===1){
      console.log("You're  a scrub!")
    } else if(div1===3 && div2===1 && div3===2){
      console.log("you're a scrub")
    } else if(div1===3 && div2===2 && div3===1){
      console.log("you're a scrub!")
    } 
    else{var score='Roll again!'}

    console.log(score);

    let finScore2=document.getElementById('p2score').innerHTML=score;

  
} 

  document.getElementById('btn1').addEventListener('click', roll);
  
   document.getElementById('btn2').addEventListener('click', roll2);

   let finScore2=document.getElementById('p2score').innerHTML;
   let finScore1=document.getElementById('p1score').innerHTML;
   

   console.log(finScore1);