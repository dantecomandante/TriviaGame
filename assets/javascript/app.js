
let questions = [{
    question: "In a roundabout, you must drive?",
    answers: ["A counterclockwise direction", "Clockwise direction", "The direction of oncoming vehicles"],
    correctAnswer: "A counterclockwise direction",
  }, {
    question: "To avoid tailgating, one should follow the",
    answers: ["3 second rule", "4 second rule", "2 second rule"],
    correctAnswer: "3 second rule",
  }, {
    question: "A(n) __________ sign on a truck means that the truck's load is potentially dangerous.",
    answers: ["diamond shape", "octagonal", "rectangular white"],
    correctAnswer: "diamond shape",
  }, {
    question: "If your parked car rolls away and hits another unattended vehicle, you should",
    answers: ["Drive away fast", "Make a report to the cops", "leave a sorry note on the window"],
    correctAnswer: "Make a report to the cops",
  }, {
    question: "A ___ painted curb is designated for disabled persons who display their placards.",
    answers: ["White", "Blue", "Green"],
    correctAnswer: "Blue",
  }, {
    question: "You must turn on your headlights __________ after sunset.",
    answers: ["20 minutes", "immediatly", "30 minutes"],
    correctAnswer: "30 minutes",
  }, {
    question: "When you want to enter a freeway, you should",
    answers: ["stop before merging onto the freeway traffic", "stop and yield to the freeway traffic", "enter the freeway at or near the speed of the traffic"],
    correctAnswer: "enter the freeway at or near the speed of the traffic",
  }];
  
  
  let Quizer = document.getElementById('questions'),
      timerStart = 30,
      correct=0,
      wrong=0,
      theQuestion=0,

  function clicked(e){
      clearInterval(timer);
      if(e.target.value===questions[theQuestion].correctAnswer){
          answeredRight();
      }
      else{
          answeredWrong();
      }
  }
  
  
  function loadQuestion(){
      timer=setInterval(countdown,1000);
      document.getElementById('second_wrapper').innerHTML='<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>';
      document.getElementById('questions').innerHTML=`<h2>${questions[theQuestion].question}</h2>`
      
      for(let i=0;i<4;i++){
          let g = document.createElement("button");
          g.setAttribute("class","answer-button")
          g.setAttribute("id","button")
          g.setAttribute("value",`${questions[theQuestion].answers[i]}`)
          g.innerHTML=`<h4>${questions[theQuestion].answers[i]}</h4>`
          document.getElementById('questions').appendChild(g)
      }
  }
  
  counter=timerStart;
  function countdown(){
      counter--;
      document.getElementById('counter-number').innerHTML=counter;
      if(counter===0){
          console.log('Times Up!');
          timeUp();
      }
  }
  
  function nextQuestion(){
      counter=timerStart;
      document.getElementById('counter-number').innerHTML=counter;
      theQuestion++;
      loadQuestion();
  }
  
  function timeUp(){
      clearInterval(timer);
      document.getElementById('counter-number').innerHTML=counter;
      Quizer.innerHTML='<h2>Times Up!</h2>';
      Quizer.append('<h3>Answer: ' + questions[theQuestion].correctAnswer+'</h3>');
      if(theQuestion===questions.length-1){
          setTimeout(results,3*1000);
      }
      else{
          setTimeout(nextQuestion,3*1000);
      }
  }
  
  function results(){
      clearInterval(timer);
      Quizer.innerHTML='<h2>All done, heres how you did!</h2>';
      document.getElementById('counter-number').innerHTML=counter;
      Quizer.append('<h3>Correct Answers: ' + correct + '</h3>');
      Quizer.append('<h3>wrong Answers: ' + wrong + '</h3>');
      Quizer.append('<h3>No Answer: ' + (questions.length - (wrong + correct)) + '</h3>');
  }
  
  
  
  function answeredRight(){
      clearInterval(timer);
      correct++;
      Quizer.innerHTML='<h2>Correct!</h2>';
      if(theQuestion===questions.length-1){
          setTimeout(results,3*1000);
      }
      else{
          setTimeout(nextQuestion,3*1000);
      }
  }
  function answeredWrong(){
      wrong++;
      clearInterval(timer);
      Quizer.innerHTML='<h2>Wrooooong!!</h2>';
      Quizer.append('<h3>Answer: ' + questions[theQuestion].correctAnswer + '</h3>');
      if(theQuestion===questions.length-1){
          setTimeout(results,3*1000);
      }
      else{
          setTimeout(nextQuestion,3*1000);
      }
  
  }
  