// ******************validation*******************************************
  var x1, x2;
  function validateName(x) {
    var re = /[A-Za-z]$/;
    if (re.test(document.getElementById(x).value)) {
      document.getElementById(x).style.background = '#ccffcc';
      document.getElementById(x + "_Error").style.display = "none";
      if(x2==true){
        document.getElementById('submit').style.display = "block";
      }
      x1 = true;
      return true;
    } else {
      document.getElementById(x).style.background = '#FA9494';
      document.getElementById(x + "_Error").style.display = "block";
      x1 = false;
      document.getElementById('submit').style.display = "none";
      return false;
    }
  }
  function validateEmail(x) {
    var re = new RegExp('[a-z0-9]+@vitstudent.ac.in');
    if (re.test(document.getElementById(x).value)) {
      document.getElementById('email').style.background = '#ccffcc';
      document.getElementById('emailError').style.display = "none";
      if(x1==true){
        document.getElementById('submit').style.display = "block";
      }
      x2 = true;
      return true;
    } else {
      document.getElementById('email').style.background = '#FA9494';
      document.getElementById('emailError').style.display = "block";
      document.getElementById('submit').style.display = "none";
      x2 = false;
      return false;
    }
  }

      // ****************************quiz*******************************************
      const quizDB=[
      {
      question: "Q1: In which of the following regions, maize is used as staple food ?",
      a:"Western Europe",
      b:"Russia",
      c:"Middle Africa",
      d:"South-East Asia",
      ans:"ans4"
      },
      {
      question: "Q2: Which of the following statements is incorrect about the Lysosome?",
      a:"It acts as a dispatch station of protein products received from the endoplasmic reticulum (ER)",
      b:"It helps in the synthesis of protein",
      c:"It is also called the suicidal bag of the cell",
      d:"It is a membrane-bound organelle found in plant as well as animal cells",
      ans:"ans4"
      },
      {
      question: "Q3: In context with biology, which among the following is a Zoophyte?",
      a:"An animal that grows on a plant",
      b:"A plant that grows on an animal",
      c:"An animal that resembles a plant",
      d:"A plant that resembles an animal",
      ans:"ans4"
      },
      {
      question: "Q4: Which among the following qualities of iron ore is best based upon iron content?",
      a:"Magnetite",
      b:"Hematite",
      c:"Limonite",
      d:"Siderite",
      ans:"ans4"
      },
      {
      question: "Q5:Which among the following is popularly called Hypo?",
      a:"Silver Bromide",
      b:"Silver nitrate",
      c:"Sodium thiosulphate",
      d:"Sodium phosphate",
      ans:"ans4"
      },
      {
      question: "Q6: Which among the following clearly describes a Silver Fish?",
      a:"A Fish",
      b:"A wingless Insect",
      c:"An Anthropod",
      d:"A frog",
      ans:"ans4"
      },
      {
      question: "Q7: Which among the following makes the Cornea Transplantation easy and used more widely ?",
      a:"Cornea are easily available",
      b:" Cornea does not link up with blood vessels",
      c:"both of the above reasons",
      d:"none of the above",
      ans:"ans4"
      },
      {
      question: "Q8: Which of these pairs has the same unit of measurement?",
      a:"Rate of flow and Acceleration",
      b:"Impulse and Moment of Force",
      c:"Rydberg constant and Gas constant",
      d:"Pressure and Coefficient of Elasticity?",
      ans:"ans4"
      },
      {
      question: "Q9:Which of these is the cause of Friction?",
      a:"Roughness of surfaces in contact",
      b:"Force of adhesion between the molecules of the surfaces in contact",
      c:"Both a and b",
      d:"None of the above",
      ans:"ans4"
      },
      {
      question: "Q10: What is the time period for a satellite orbiting close to the surface of earth?",
      a:"84.6 minutes",
      b:"72.4 minutes",
      c:"44.8 minutes",
      d:"24 hours",
      ans:"ans4"
      },
      {
      question: "Q1: MS-Word is an example of _____?",
      a:"An operating system",
      b:"A processing device",
      c:"Application software",
      d:"An input device",
      ans:"ans4"
      },
      {
      question: "Q2: Ctrl, Shift and Alt are called .......... keys.",
      a:"adjustment",
      b:"modifier",
      c:"function",
      d:"alphanumeric",
      ans:"ans4"
      },
      {
      question: "Q3: A computer cannot boot if it does not have the _____",
      a:"Assembler",
      b:"Operating system",
      c:"Loader",
      d:"Compiler",
      ans:"ans4"
      },
      {
      question: "Q4: ________ is the process of dividing the disk into tracks and sectors",
      a:"Allotting",
      b:"Crashing",
      c:"Formatting",
      d:"Tracking",
      ans:"ans4"
      },
      {
      question: "Q5:Junk e-mail is also called ______",
      a:"Spool",
      b:"Sniffer script",
      c:"Spam",
      d:"Spoof",
      ans:"ans4"
      },
      {
      question: "Q1:Identify the Logo",
      a:"NIT",
      b:"IIT",
      c:"Sri Ramaswamy Memorial Institute of Science and Technology",
      d:"Vellore Institute of Technology",
      ans:"ans4",
      url:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png"
      },
      {
      question: "Q2:Identify the Logo?",
      a:"NIT",
      b:"IIT",
      c:"Vellore Institute of Technology",
      d:"Sri Ramaswamy Memorial Institute of Science and Technology",
      ans:"ans4",
      url:"https://scet.berkeley.edu/wp-content/uploads/8.-SRM-Logo.png"
      },
      {
      question: "Q3:Identify the Logo?",
      a:"Vellore Institute of Technology",
      b:"Sri Ramaswamy Memorial Institute of Science and Technology",
      c:"NIT",
      d:"Birla Institute of Technology and Science",
      ans:"ans4",
      url:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
      },
      {
      question: "Q4:Identify the Logo?",
      a:"Birla Institute of Technology and Science",
      b:"Sri Ramaswamy Memorial Institute of Science and Technology",
      c:"Vellore Institute of Technology",
      d:"National Institute of Technology Goa",
      ans:"ans4",
      url:"https://nitgoa.ac.in/second%20convocation/img/nitg.png"
      },
      {
      question: "Q5:Identify the Logo",
      a:"National Institute of Technology",
      b:"Sri Ramaswamy Memorial Institute of Science and Technology",
      c:"Vellore Institute of Technology",
      d:"Indian Institute of Technology, Kanpur",
      ans:"ans4",
      url:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png"
      }
      ];
      const question=document.querySelector(".question");
      const heading=document.querySelector(".heading");
      const option1=document.querySelector("#option1");
      const option2=document.querySelector("#option2");
      const option3=document.querySelector("#option3");
      const option4=document.querySelector("#option4");
      const submit=document.querySelectorAll("#submit");
      const answers=document.querySelectorAll(".answer");
      const showScore=document.querySelector("#showScore");
      const pa=document.querySelector(".pa");
      var questionCount=0;
      var score=0;
      let k;
      let campus="";
      let l,s1=0,s2=0,s3=0,st=0,p=0;
          const loadQuestion=()=>{
      if(questionCount<10){
        k=0;
      var n=quizDB[questionCount];
      heading.innerText="Quiz Round 1";
      question.innerText=n.question;
      option1.innerText=n.a;
      option2.innerText=n.b;
      option3.innerText=n.c;
      option4.innerText=n.d;
      }
      else if(questionCount>9 && questionCount<15){
        heading.style.display="block";
        if(k==0){
        k++;
        l=0;
        onTimesUp();
        startTimer(15);
                        var elems = document.getElementsByTagName("ul");
                        for (var i=0;i<elems.length;i+=1){
                          elems[i].style.display = 'block';
                        }
                        var but = document.getElementsByTagName("button");
                        for (var i=0;i<(but.length-5);i+=1){
                          but[i].style.display = 'block';
                          but[i].style.float = 'left';
                        }
        }
      var n=quizDB[questionCount];
      heading.innerText="Quiz Round 2";
      question.innerText=n.question;
      option1.innerText=n.a;
      option2.innerText=n.b;
      option3.innerText=n.c;
      option4.innerText=n.d;
      }
      else if(questionCount>14 && questionCount<20){
        heading.style.display="block";
        if(l==0){
        l++;
        onTimesUp();
        startTimer(15);
        var elems = document.getElementsByTagName("ul");
        for (var i=0;i<elems.length;i+=1){
          elems[i].style.display = 'block';
        }
        var but = document.getElementsByTagName("button");
        for (var i=0;i<(but.length-5);i+=1){
          but[i].style.display = 'block';
        }
        }
      var n=quizDB[questionCount];
      var img = '<img style="width:10rem;height:10rem;" src="'+n.url+'" />';
      pa.innerHTML = img;
      heading.innerText="Quiz Round 3";
      question.innerText=n.question;
      option1.innerText=n.a;
      option2.innerText=n.b;
      option3.innerText=n.c;
      option4.innerText=n.d;
      }
      }
      loadQuestion();
      const deselectAll=()=>{
        answers.forEach((currAnsElement)=>currAnsElement.checked=false);
      }
      const getCheck=()=>{
        var answer;
        answers.forEach((currAnsElement)=>{
          if(currAnsElement.checked)
          {
            answer=currAnsElement.id;
          }
        });
        if(answer===quizDB[questionCount].ans){
          if(questionCount<10){
            s1=s1+2;
          }
          else if(questionCount>9 && questionCount<15){
            s2=s2+2;
          }
          else if(questionCount>14 && questionCount<20){
            s3=s3+4;
          }
          score++;
        }
        questionCount++;
        deselectAll();
        if(questionCount<quizDB.length){
          loadQuestion();
        }
        else{
          st=s1+s2+s3;
          p=st*(10/50);
        p=  Math.round(p * 100) / 100;

          if(p>=9.5){
            campus="You got Adimmission in VELLORE";
          }
          else if(p<9.5 && p>=7.5){
            campus="You got Adimmission in CHENNAI";

          }else if(p<7.5 && p>=6.5){
            campus="You got Adimmission in AMRAVATI";
          }
          else{
            campus="Better Luck Next Time!";
          }
          showScore.innerHTML=`
            <h3>Total number of questions Attempted ${score}/${quizDB.length}</h3>
            <h3>Score: ${st}/${50}</h3>
            <h3>Percentage: ${p}/10</h3>
            <h3><strong>${campus}</strong></h3>
          `;
          showScore.classList.remove("scoreArea");
        }
      }
      // ********************timer*******************************8
      let timePassed ;
      let timeLeft ;
      let timerInterval ;
      let m=0;
      startTimer(15);
      function onTimesUp() {
        clearInterval(timerInterval);
      }
      function startTimer(x) {
        timePassed = 0;
        timeLeft=x;
        timerInterval = null;
        document.getElementById("app").innerHTML = `
        <div class="base-timer">
          <span id="base-timer-label" class="base-timer__label">${formatTime(
            timeLeft
          )}</span>
        </div>
        `;
        timerInterval = setInterval(() => {
          timePassed = timePassed += 1;
          timeLeft = x - timePassed;
          document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
          );
          if (timeLeft == 0) {
            onTimesUp();
            startTimer(5);
            setTimeout(loadQuestion(), 5*1000);
            m=m+1;
            console.log(m);
            if(k==0){
              heading.style.display="none";
              questionCount=10;
              question.innerText="Round 2 starts in 5sec";
              var elems = document.getElementsByTagName("ul");
              for (var i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
              }
              var but = document.getElementsByTagName("button");
              for (var i=0;i<but.length;i+=1){
                but[i].style.display = 'none';
              }
            }
            else if (k!=0 && l==0 && m==3) {
              heading.style.display="none";
              questionCount=15;
              question.innerText="Round 3 starts in 5sec";
              var elems = document.getElementsByTagName("ul");
              for (var i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
              }
              var but = document.getElementsByTagName("button");
              for (var i=0;i<but.length;i+=1){
                but[i].style.display = 'none';
              }
            }
            else if(k!=0 && l!=0 && m==5){
              questionCount=19;
              question.style.display="none";
              document.getElementById("app").style.display="none";
              heading.innerText="RESULT";
              var elems = document.getElementsByTagName("ul");
              for (var i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
              }
              var but = document.getElementsByTagName("button");
              for (var i=0;i<but.length;i+=1){
                but[i].style.display = 'none';
              }
              getCheck();
            }
          }
        }, 1000);
      }
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
      }
