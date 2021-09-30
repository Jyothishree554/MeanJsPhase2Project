import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  myVar1:boolean=true;
  myVar2:boolean=false;
  resDis:boolean=false;
  public i:any=0;
  public questionNum: number= 1
  public question:string="Father of AngularJs"

   public questionBank:any=[
  {
    questionNum: 1,
      question:"Which of the following statement is correct for AngularJS?",
      option1: "AngularJS is an HTML framework",
      option2: "AngularJS is a Java framework",
      option3: "AngularJS is a JavaScript framework",
      option4: "AngularJS is a SQL framework",
      candidateAnswer: "",
      answer: "option3"
  },
  {
    questionNum: 2,
      question:" On which of the Architectural pattern AngularJS is based?",
      option1: "Observer Pattern",
      option2: "Decorator pattern",
      option3: "MVC Architecture pattern",
      option4: "MVVM Architectural pattern" ,
      candidateAnswer: "",
      answer: "option4"
  },
  {
    questionNum: 3,
      question:"AngularJS is perfect for?",
      option1: "SPAs",
      option2: "MPAs",
      option3: "DPAs",
      option4: "CPAs" ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 4,
      question:"Which of the following is the correct syntax for writing AngularJS expressions?",
      option1: "(expression)",
      option2: "{{expression}}",
      option3: "{{{expression}}}",
      option4: "[expression]" ,
      candidateAnswer: "",
      answer: "option2"
  },
  {
    questionNum: 5,
      question:"Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
      option1: "ng-app directive",
      option2: "ng-model directive",
      option3: "ng-bind directive",
      option4: "ng-init directive" ,
      candidateAnswer: "",
      answer: "option3"
  },
  {
    questionNum: 6,
      question:"Which of the following syntax is correct for applying multiple filters in AngularJS?",
      option1: "{{ expression | filter1 | filter2 | ... }}",
      option2: "{{ expression | {filter1} | {filter2} | ... }}",
      option3: "{{ expression - {filter1} - {filter2} - ... }}",
      option4: "{{ {filter1} | {filter2} | ...-expression}}" ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 7,
      question:"Which of the following statement is true about the lowercase filter?",
      option1: "The lowercase filter converts a text to lower case text.",
      option2: "The lowercase filter is a function that takes text as input.",
      option3: "Both of the above.",
      option4: "None of the above." ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 8,
      question:"Which of the following is an advantage of AngularJS?",
      option1: "AngularJS code is unit testable.",
      option2: "AngularJS provides reusable components.",
      option3: "AngularJS uses dependency injection and makes use of separation of concerns.",
      option4: "All of the above" ,
      candidateAnswer: "",
      answer: "option4"
  },
  {
    questionNum: 9,
      question:"Which of the following statement is true about $dirty flag?",
      option1: "$dirty flag is used to state that value has been changed.",
      option2: "$dirty flag is used to state that the form has invalid data.",
      option3: "Both of the above.",
      option4: "None of the above." ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 10,
      question:"What is the use of Angular Controllers in the application?",
      option1: "Angular controllers are used for controlling the data.",
      option2: "Angular controllers are used for displaying the data.",
      option3: "Both of the above are correct.",
      option4: "None of the above is correct." ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 11,
      question:"Which of the following statement is correct for AngularJS?",
      option1: "AngularJS is an HTML framework",
      option2: "AngularJS is a Java framework",
      option3: "AngularJS is a JavaScript framework",
      option4: "AngularJS is a SQL framework",
      candidateAnswer: "",
      answer: "option3"
  },
  {
    questionNum: 12,
      question:" On which of the Architectural pattern AngularJS is based?",
      option1: "Observer Pattern",
      option2: "Decorator pattern",
      option3: "MVC Architecture pattern",
      option4: "MVVM Architectural pattern" ,
      candidateAnswer: "",
      answer: "option4"
  },
  {
    questionNum: 13,
      question:"AngularJS is perfect for?",
      option1: "SPAs",
      option2: "MPAs",
      option3: "DPAs",
      option4: "CPAs" ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 14,
      question:"Which of the following is the correct syntax for writing AngularJS expressions?",
      option1: "(expression)",
      option2: "{{expression}}",
      option3: "{{{expression}}}",
      option4: "[expression]" ,
      candidateAnswer: "",
      answer: "option2"
  },
  {
    questionNum: 15,
      question:"Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
      option1: "ng-app directive",
      option2: "ng-model directive",
      option3: "ng-bind directive",
      option4: "ng-init directive" ,
      candidateAnswer: "",
      answer: "option3"
  },
  {
    questionNum: 16,
      question:"Which of the following syntax is correct for applying multiple filters in AngularJS?",
      option1: "{{ expression | filter1 | filter2 | ... }}",
      option2: "{{ expression | {filter1} | {filter2} | ... }}",
      option3: "{{ expression - {filter1} - {filter2} - ... }}",
      option4: "{{ {filter1} | {filter2} | ...-expression}}" ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 17,
      question:"Which of the following statement is true about the lowercase filter?",
      option1: "The lowercase filter converts a text to lower case text.",
      option2: "The lowercase filter is a function that takes text as input.",
      option3: "Both of the above.",
      option4: "None of the above." ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 18,
      question:"Which of the following is an advantage of AngularJS?",
      option1: "AngularJS code is unit testable.",
      option2: "AngularJS provides reusable components.",
      option3: "AngularJS uses dependency injection and makes use of separation of concerns.",
      option4: "All of the above" ,
      candidateAnswer: "",
      answer: "option4"
  },
  {
    questionNum: 19,
      question:"Which of the following statement is true about $dirty flag?",
      option1: "$dirty flag is used to state that value has been changed.",
      option2: "$dirty flag is used to state that the form has invalid data.",
      option3: "Both of the above.",
      option4: "None of the above." ,
      candidateAnswer: "",
      answer: "option1"
  },
  {
    questionNum: 20,
      question:"What is the use of Angular Controllers in the application?",
      option1: "Angular controllers are used for controlling the data.",
      option2: "Angular controllers are used for displaying the data.",
      option3: "Both of the above are correct.",
      option4: "None of the above is correct." ,
      candidateAnswer: "",
      answer: "option1"
  }

]
  //itemCheck: boolean=false;
  public itemChecked1:boolean=false;
  public itemChecked2:boolean=false;
  public itemChecked3:boolean=false;
  public itemChecked4:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showhideUtility():void{
    console.log("event triggered");
    this.myVar1=false;
    this.myVar2=true;
    this.display();

  }
  displaySubmit:boolean=false;
  displayNext:boolean=false;
  displayBoth:boolean=false;
  public queNum: any;
  public que:any;
  public opt1:any;
  public opt2:any;
  public opt3:any;
  public opt4:any;

  display(){
    this.queNum=this.questionBank[this.i].questionNum;
    this.que=this.questionBank[this.i].question;
    this.opt1=this.questionBank[this.i].option1;
    this.opt2=this.questionBank[this.i].option2;
    this.opt3=this.questionBank[this.i].option3;
    this.opt4=this.questionBank[this.i].option4;
    this.displayNext=true;
  }
  
  nextQuestion(){
    this.i++;
    this.display();
    if( this.questionBank[this.i].candidateAnswer==""){
      this.itemChecked1=false;
      this.itemChecked2=false;
      this.itemChecked3=false;
      this.itemChecked4=false;
    }
    else{
      this.answered(this.questionBank[this.i].candidateAnswer,this.queNum)
    }
    console.log("i value "+this.i)
    if(this.i==(this.questionBank.length-1)){
      this.displayNext=false;
      this.displayBoth=false;
      this.displaySubmit=true;
    }
    else{
      this.displayBoth=true;
      this.displayNext=false;
      this.displaySubmit=false;
    }
  }
  
  previousQuestion(){
    this.i--;
    this.display();
    if( this.questionBank[this.i].candidateAnswer==""){
      this.itemChecked1=false;
      this.itemChecked2=false;
      this.itemChecked3=false;
      this.itemChecked4=false;
    }
    else{
      this.answered(this.questionBank[this.i].candidateAnswer,this.queNum)
    }
    if(this.i==0){
      console.log("towards submit button")
      this.displayNext=true;
      this.displayBoth=false;
      this.displaySubmit=false;
    }
    else{
      this.displayBoth=true;
      this.displayNext=false;
      this.displaySubmit=false;
    }
  }
  public num:number=0;
  public score:number=0;
calculateScore():void{
  console.log("score card")
  for(this.num=0;this.num<this.questionBank.length;this.num++){
    console.log("inside for")
    if(this.questionBank[this.num].answer==this.questionBank[this.num].candidateAnswer){
      console.log("inside if")
      this.score++;
      console.log(this.score)
    }
  }
  console.log("outside for")
  console.log("score is"+this.score)
  this.myVar1=false;
  this.myVar2=false;
  this.resDis=true;
}

  answered(option:string, qNum:number){
    
    switch (option){
      case 'option1': console.log("Inside switch option1");
                      this.questionBank[this.i].candidateAnswer="option1"
                      console.log(this.questionBank[this.i].candidateAnswer)
                      this.itemChecked1=true;
                      this.itemChecked2=false;
                      this.itemChecked3=false;
                      this.itemChecked4=false;
                      break;

      case 'option2': console.log("Inside switch option2");
                      this.questionBank[this.i].candidateAnswer="option2"
                      console.log(this.questionBank[this.i].candidateAnswer)
                      this.itemChecked1=false;
                      this.itemChecked2=true;
                      this.itemChecked3=false;
                      this.itemChecked4=false;
                      break;
      
      case 'option3': console.log("Inside switch option3");
                      this.questionBank[this.i].candidateAnswer="option3"
                      this.itemChecked1=false;
                      this.itemChecked2=false;
                      this.itemChecked3=true;
                      this.itemChecked4=false;

                      break;

      case 'option4': console.log("Inside switch option4");
                      this.questionBank[this.i].candidateAnswer="option4"
                      this.itemChecked1=false;
                      this.itemChecked2=false;
                      this.itemChecked3=false;
                      this.itemChecked4=true;
                      break;
      default : console.log("none of the option selected");
      this.questionBank[this.i].candidateAnswer=""
                      break;

    }
}
}