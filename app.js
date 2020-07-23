       //                    CHAPTER #1 (ALERT) :

        // Question#1:
        alert("Well Come");


        // Question#2:
  alert("Error! Please enter a valid password");
 
         // Question#3:
  alert(" Welcom to JS Land.. \n Happy Coding!");
 
          // Question#4:
  // part#1:
  alert("Welcome to JS Land... ");
 
  // part#2
  alert("Happy Coding!");
 
          // Question#5:
  var a =("Hellow... I can run JS through my web browser's console");
  alert(a);
 
          // Question#6:
 
//   done on index.html page.
 
          // Question#7:
//   done on index.html page.
 
 
 
 
 
                           //    CHAPTER#2 (VARIABLES FOR STRING):
 
          //    Question#1:  
 
  var username =("username");
  alert(a);
 
          // Question#2:
 
  var myName =("your Full Name");
  alert(myName);
 
           // Question#3:
 
  var message =("Hello World");
  alert(message);
 
 
 
            // Question#4:
  var yourName =("Jhone Doe");
  alert(yourName);
 
  var yourAge =("15 years old");
  alert(yourAge);
 
  var courseName =("Certified Mobile Application Development");
  alert(courseName);
 
 
            // Question#5:
 
  var a =("PIZZA \nPIZZ \nPIZ \nPI \nP");
  alert(a);
 
 
 
            // Question#6:
  var email=( "gulrukhsiddiqui246@gmail.com");
  alert("My email Address is " + email);
 
 
            // Question#7:
  var book=(  " A smarter way to learn javascript");
  var a=("I am trying to learn from the book");
  var b= a +  book
  alert( b);
 
             // Question#8:
  var a=("Yah! I can write HTML content through javascript");
  document.write(a);
 
 
 
             // Question#9:
   var a =( "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
   alert(a);
 
 
 
 
 
                               // CHAPTER#3 (VARIABLES FOR NUMBERS):
 
 
 
 
            //   Question#1:  
  var age = prompt("Your age");
  alert("I am "  +age + " years old ");     
 
              //   Question#2:
  for(var a=1; a<=14; a++){
      alert("You have visited this file "+a+" time(s)")
  }
 
 
          //   Question#3:  
  var birthYear =1990 ;
  document.write("My birth year is " + birthYear +" <br> " + "Data type of declared variale is number "); 
 
 
             //   Question#4:
  var visitorsName =("Jhon Doe");
  var productTitle =(" on XYZ clothing store");
  var Quantity =(" ordered 5 T-shirt(s)")
  document.write(visitorsName + Quantity +productTitle  );
 
 
 
                                    // CHAPTER#4 (VARIABLE NAMES: LEGAL&ILLEGAL):
 
 
 
          //   Question#1: 
   var variable1 =("Hello World");
       variable2 =(" I learnt HTML & CSS");
       variable3 =(" Now I am laerning JS");                          
 
 
 
       //   Question#2:
 
 //  legal variable. 
 
  var $a =("ali");
  var Name =(" Gulrukh");
  var COURSE =("WEB & Mobile application course");
  var fatherName =("M.Haroon Siddiqui");
  var section2 =("biology");
 
 
  // Illegal variable.
 
  var 4name  =("ali");
  var ?a =(" Gulrukh");
  var COURSE* =("WEB & Mobile application course");
  var father Name =("M.Haroon Siddiqui");
  var 2section =("biology");
 
 
 
        // Question#3:
  var 
  b =("Variablenamescanonlycontain______,______,______and______.Forexample$my_1stVariable");
  c =("Variablesmustbeginwitha______,______or____.Forexample$name,_nameorname");
  d =("Variablenamesarecase_________");
  e =("VariablenamesshouldnotbeJS_________");
 
  document.write("<h1>Rules for naming JS variables</h1>" +b  +" <br> "+c +" <br> "+d +" <br> "+e+" <br> ");
 
 
 
                                         //  CHAPTER#5 (MATH EXPRESSIONS):
 
          //  Question#1:
  var a = 3;
  var b = 5;
  var c = a+b;
  document.write(" sum of "+ a + " and " + b + " is " +c);  
 
 
             // Question#2:
 
  // subtration.
 
  var a = 3;
  var b = 5;
  var c = a-b;
  document.write(" subtraction of "+ a + " and " + b + " is " +c);
 
  // multiplication.
 
  var a = 3;
  var b = 5;
  var c = a*b;
  document.write(" multiplication of "+ a + " and " + b + " is " +c);
 
  // division.
 
  var a = 3;
  var b = 5;
  var c = a/b;
  document.write(" division of "+ a + " and " + b + " is " +c);
 
  // modulus.
 
  var a = 3;
  var b = 5;
  var c = a%b;
  document.write(" modulus of "+ a + " and " + b + " is " +c);
 
 
 
               // Question#3:
  var a 
  var b = 5; 
  document.write("value after variable decleration is " + a +"<br>"+ "Initial value is: " +b +"<br>" );
 
  var c= ++b;
  document.write("Value after increment is: " +c +"<br>");
 
   var d =c+7;
  document.write("Value after addition is: " +d +"<br>" );
 
  var e =--d;
  document.write("Value after decrement is: " + e +"<br>");
 
  var f =e/3;
 
  document.write("The remainder is: 0" );
 
 
 
            // Question#4:
   var ticketPrice = 600;
   var noOfTickets = 5;
   var cost = ticketPrice*noOfTickets ;
   document.write("Total cost to buy "+noOfTickets+" tickets to a movie is "+ cost+ " PKR");
 
 
 
              // Question#5:
  var a =("<h4>Table of 4:</h4>");
  document.write(a );
  for(var i=1 ; i<=10; i++){
      document.write("4"+"x"+i+"="+4*i+ " <br> ");
  }
 
 
 
                 // Question#6:
 
  var celciusTemperature = 25;
  var convertFarenheit = (celciusTemperature *9/5) +32;
  document.write(celciusTemperature  + " oC is "+convertFarenheit +" oF" + " <br> ");
 
  var farenheitTemperature = 70;
  var convertCelcius = (farenheitTemperature - 32)* 5/9;
  document.write(farenheitTemperature +" oF is"+convertCelcius  + " oC  ");
 
 
 
 
               // Question#7:
  var heading = ("<h1>shopping cart</h1>");
  var priceOfItem1 = 650;
  var priceOfItem2 = 100;
  var orderedQuantitiyOfItem1 = 3;
  var orderedQuantitiyOfItem2 = 7;
  var shippingCharges = 100;
  var totalCost = (priceOfItem1*orderedQuantitiyOfItem1)+(priceOfItem2*orderedQuantitiyOfItem2)+shippingCharges
 
  document.write(heading + "Price of item 1 is "+priceOfItem1+ " <br> "+ "Quantity of item 1 is "+ orderedQuantitiyOfItem1+ " <br> "+"Price of item 2 is "+priceOfItem2+ " <br> "+ "Quantity of item 2 is "+ orderedQuantitiyOfItem2+ " <br> "+"Shipping charges "+shippingCharges + " <br> "+ "Total cost of your order is "+totalCost);
 
 
 
 
               // Question#8:
  var heading = ("<h1>Mark Sheet</h1>");
  var totalMarks = 980;
  var obtainedMarks = 804;
  var percentage = (804/980)*100;
  document.write(heading+ "Total marks; "+totalMarks+ " <br> "+ "Marks obtained: "+obtainedMarks+ " <br> "+"Percentage: "+percentage + "%");
 
 
 
                // Question#9:
  var heading =(" <h1>Currency in PKR</h1>");
  var a =(10*104.80)+(25*28);
  document.write(heading+"Total currency in PKR: "+a);
 
 
 
               // Question#10:
  var a =((3+5)*10)/2;
  alert(a);
 
 
 
                 // Question#11:
  var a = 2016;
  var b = 1992;
  var yourAge = a-b;
  document.write("<h1>Age Calculator</h1>" +"Current year:"+ a+ " <br> "+"Birth year:"+b+" <br> "+"Your age is:"+yourAge);
 
 
 
               // Question#12:
  var radius = 20;
  var cercumferience = 2*3.142*radius;
  var area =3.142*radius*2;
  document.write("<h1>The Geometrizer</h1>" +"Radius of a circle:"+radius+ " <br> "+"The circumference is:"+cercumferience+ " <br> "+"The area is:"+area);
 
 
 
 
             // Question#13:
  var favSnack =("Chocolate chips");
  var currentAge = 15;
  var maxAge = 65;
  var restage =maxAge-currentAge;
  var perDay = 3;
  var totalSnacksforRestOfLife = restage*perDay;
  document.write("<h1>The Lifetime Supply Calculator</h1> " +"Favourite Snacks:"+favSnack+ " <br> "+"Current Age:"+currentAge+ " <br> "+ "Estimated maximum age: "+maxAge + " <br> "+"You will need "+totalSnacksforRestOfLife+ " chocolate chips to last you until the ripe old age of "+maxAge );
 
 
 
 
 
 
                                   //    CHAPTERS#6-9: (MATH EXPRESSIONS):
 
            // Question#1:    
 
  var a = 10;
  document.write("Result"+" <br> "+"The value of a is:  "+ a +" <br> ");
 
  var b = ++a;
  var c = a;
  document.write("The value of ++a is:"+b +" <br> "+"Now the value of a is:"+c+" <br> ");
 
  var d = a++;
  var e = a;
  document.write("The value of a++ is:"+d +" <br> "+"Now the value of a is:"+e+" <br> ");
 
 
  var f =--a;
  var g = a;
  document.write("The value of --a is:"+f +" <br> "+"Now the value of a is:"+g+" <br> ");
 
 
  var h = a--;
  var i = a;
 document.write("The value of a-- is:"+h +" <br> "+"Now the value of a is:"+i+" <br> ");
 
 
 
 
              // Question#2:
  // explanation:
 
  //  a = 2 ,b = 1;
  // --a =1;
  // --a - --b = 1;
  // --a - --b + ++b = 2;
  // --a - --b + ++b + b-- = 3;
 
  var a =2, b =1;
  document.write("a is " +a+ " <br> ");
  document.write("b is " +b+ " <br> ");
  var result = --a - --b + ++b + b--;
  document.write("Result is " +result);
 
 
            // Question#3:
  var a =prompt("Enter your name","Your name is:");
  alert( "congratulations!");
 
 
 
           // Question#4:
  // missing from pdf
 
 
             // Question#5:
  var a =+prompt("Enter a number");
   if (a<=100){for(var i=1 ; i<=10; i++){
          document.write(a+"x"+i+"="+a*i+ " <br> ");
      }
 
  }
  else
      {for(var i=1 ; i<=10; i++){
           document.write(5+"x"+i+"="+5*i+ " <br> ");
      }
  }
 
 
 
            // Question#6:
  document.write("<h3>Subject TotalMarks ObtainedMarks Percentage</h3>"+" <br> ");
  var subjectName1 =prompt("Enter subject name");
  var totalMarks = 100;
  var obtainMarks1 =+prompt("Enter your obtained marks");
  var percentage1 =(obtainMarks1*totalMarks)/100
  document.write(subjectName1 + totalMarks + obtainMarks1 + percentage1+"%"+" <br> ");
 
  var subjectName2 =prompt("Enter 2nd subject name");
  var totalMarks = 100;
  var obtainMarks2 =+prompt("Enter your obtained marks");
  var percentage2 =(obtainMarks2*totalMarks)/100
  document.write(subjectName2 + totalMarks + obtainMarks2 + percentage2+"%"+" <br> ");
 
  var subjectName3 =prompt("Enter 3rd subject name");
  var totalMarks = 100;
  var obtainMarks3 =+prompt("Enter your obtained marks");
  var percentage3 =(obtainMarks3*totalMarks)/100
  document.write(subjectName3 + totalMarks + obtainMarks3 + percentage3+"%"+" <br> ");
 
 
  var totalmarks3Subjects = 300;
  var totalObtainedmarks = obtainMarks1+obtainMarks2+obtainMarks3;
  var totalpercentages = percentage1+percentage2+percentage3;
  document.write(totalmarks3Subjects + totalObtainedmarks + totalpercentages +" <br> ")
 
 
 
            // Question#7:
  // missing from pdf
 
 
 
 
                                          // CHAPTERS#9-11: (USERS INPUT AND CONDITIONal STATEMENTS):
 
 
                // Question#1:
  var cityName =prompt("Enter your city name","Your city name is:");
  if(cityName === "karachi"){
      alert("Welcome to city of light")
  }
 
 
 
             // Question#2:
  var a =prompt("Enter your gender", "Your gender is:");
  if(a === "male"){
      alert("Good morning sir")
  }
  else if(a === "female") {
      alert("Good morning ma'am")
  }
 
 
                // Question#3:
 
  var color1 =prompt("Enter a color of road traffic signal");
  document.write("Signal color "+"Message "+" <br> " );
  if( color1 === "Red"){
      document.write("Red "+" Must stop"+" <br> ")
  }
  if(color1 === "Yellow"){
      document.write("Yellow "+"Ready to move"+" <br> ")
  }
  if(color1 === "Green"){
      document.write(" Green "+" Move now"+" <br> ")
  }
  var color2 =prompt("Enter a color of road traffic signal");
  if( color2 === "Red"){
      document.write("Red "+" Must stop"+" <br> ")
  }
  if(color2 === "Yellow"){
      document.write("Yellow "+"Ready to move"+" <br> ")
  }
  if(color2 === "Green"){
      document.write(" Green "+" Move now"+" <br> ")
   }
  var color3 =prompt("Enter a color of road traffic signal");
 
   if( color3 === "Red"){
      document.write("Red "+" Must stop"+" <br> ")
  }
  if(color3 === "Yellow"){
      document.write("Yellow "+"Ready to move"+" <br> ")
  }
  if(color3 === "Green"){
      document.write(" Green "+" Move now"+" <br> ")
  }
 
 
 
              // Question#4:
  var fuel =prompt("Enter the amount of remaining fuel in your car(in liters)");
  if(fuel<0.25 +"liters"){
      alert("Please refill the fuel in your car")
  }
 
               // Question#5:  
  // check alerts messages.
  // a)
  var a = 4;
  if(++a === 5){
      alert("given condition for variable a is true")
  }
  //  output: displayed.
 
  // b)
  var b = 82;
  if(b++ === 83){
      alert("given condition for variable b is true")
  }
  // output: not display.
 
 
  // c)
  var c = 12;
  if(c++ === 13){
  alert("condition 1 is true");
  }
  if(c === 13){
  alert("condition 2 is true");
   }
  if(++c<14){
  alert("condition3istrue");
  }
  if(c === 14){
  alert("condition 4 is true");
  }
 
  // output:conditin 2 and cindition 4 are displayed.
 
  // d)
  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost+laborCost;
  if(totalCost === laborCost + materialCost){
  alert("The cost equals");
  }
  // output:displayed
 
  // e)
  if(true){
      alert("True");
      }
      if(false){
      alert("False");
      }
 
  //  output: "true" displayed  
 
 
  // f)
  if("car"<"cat"){
      alert("car is smaller than cat")
  }
  // output: displayed
 
 
                // Question#6:
  var sub1 = 70;
  var sub2 = 95;
  var sub3 = 54;
  var totalMarks = 300;
  var obtainedMarks =sub1+sub2+sub3;
  var percentage = (obtainedMarks/totalMarks)*100;
  document.write("<h1>Marksheet</h1>"+" <br> ");
  document.write("Total Marks: "+ totalMarks+" <br> "+"Marks Obtained: "+ obtainedMarks+" <br> "+"Percentage: "+ percentage+"%" +" <br> ");
  if(percentage>=80&&percentage<=99){
      document.write("Grade: A-one"+" <br> "+"Remarks: Excellent")
  }
  else if(percentage>=70&&percentage<=79){
      document.write("Grade: A-one"+" <br> "+"Remarks: Good")
  } 
  else if(percentage>=60&&percentage<=69){
      document.write("Grade: B"+" <br> "+"Remarks: You need to improve")
  }
  else if(percentage<60){
      document.write("Grade: Fail"+" <br> "+"Remarks: sorry")
  }  
 
 
 
             // Question#7:
  var num = 2;
  var input =+prompt("Guess the secret number");
  if(input == num){
      alert("Bingo! Correct answer")
  }
  else if(input+1 == num){
      alert("Close enough to the correct answer")
  }
  else{
      alert("Wrong answer")
  }
 
 
              // Question#8:
  var a =+prompt("Enter your number");
 
  if(a % 3 == 0 ){
      alert("It is divisible by 3")
  }
  else{
      alert("it is not divisible by 3")
  }
 
 
               // Question#9:
  var a =+prompt("Enter your number");
 
  if(a % 2 == 0 ){
      alert("It is even number")
  }
  else{
      alert("it is odd number")
  }
 
                // Question#10:
  var T =+prompt("Enter temperature");
  if(T>=40){
      alert("It is too hot outside.")
  }
  else if(T>= 30){
      alert("The weather today is normal.")
  }
  else if(T>=20){
      alert("Today's weather is cool.")
  }
  else if(T>=10) {
      alert("OMG! Today's weather is so cool.")
  }
 
               // Question#11:
  var a =+prompt("First number");
  var operations =prompt("Operation");
  var b =+prompt("Second number");
  if(operations === "+"){
      alert(a+b)
  }
  else if(operations === "-"){
      alert(a-b)
  }
  else if(operations === "*"){
      alert(a*b)
  }
  else if(operations === "/"){
      alert(a/b)
  }
  else if(operations === "%"){
      alert(a%b)
  }
 
 
 
 
                                                    //  CHAPTERS#12-13 
                                                 //  (IF..ELSE&ELSE IF STATEMENTS,
                                                  //   TESTING SET OF CONDITIONS  ):
                 // Question#1:
  // 1st Method
  var ch =prompt("Enter a character");
  if(ch >='A'&& ch<= 'Z'){
      alert("It is Upper case letter")
  }   
  else if(ch >='a'&& ch<= 'z'){
      alert("It is Lower case letter")
  }       
   else if(+ch){
       alert("It is number")
  }
 
  // 2nd method
  var name =+prompt("Enter a character");
  if(name>=65 && name<=90){
      alert("It is Upper case letter")
 
  }
  else if (name>=97 && name<=112){
      alert("It is lower case letter")
  }
  else {
      alert("It is number")
 
  } 
 
 
            // Question#2:
  var a =+prompt("Enter first integer");
  var b =+prompt("Enter second integer");
  if(a>b){
      alert(a+" is larger value")
  }
  else if(b>a){
      alert(b+" is larger value")
  }
  else if(a==b){
      alert("Both values are equals")
  }
 
 
              // Question#3:
  var a =+prompt("Enter a number");
  if(a>0){
      alert("The number is positive")
  }
  else if(a<0){
      alert("The number is negative")
  }
  else if(a==0){
      alert("The number is zero")
  }
 
 
 
                // Question#4:
  var a =prompt("Enter a character");
  var lowercasevowel =(a =='a'|| a =='e'||a =='i'|| a=='o'||a =='u');
  var uppercasevowel =(a =='A'|| a =='E'||a =='I'|| a=='O'||a =='U');
  if(lowercasevowel ||uppercasevowel){
      alert("true")
  }
  else{
      alert("False")
  }
 
 
           // Question#5:
  var password1 =prompt("Enter your password");
  var password2 =prompt("Rewrite your password");
  if(password1 =="" && password2 == ""){
      alert("Please enter your password")
  }
  else if(password1 == password2){
      alert("Correct! the password you entered matches the original password")
  }
  else{
      alert("Incorrect password")
  }
 
 
 
             // Question#6:
  var  greeting;
  var hour =13;
  if(hour < 18){
      alert(greeting ="Good day");
 
  }
  else{
      alert(greeting ="Good day");
  }
 
 
 
              // Question#7:
  var time =1900;
  if(time == 1900){
  if(time >=0000 && time<1200){
      alert("Good morning")
  }
  else if(time >=1200 && time<1700){
      alert("Good afternoon")
  }
  else if(time >=1700 && time<2100){
      alert("Good evening")
  }
  else if(time >=2100 && time<2359){
      alert("Good night")
  }
  }
 
 
 
 
 
                                     //    CHAPTERS#14-16 (ARRAYS);
 
         //  Question#1:
  var arr =[];   
 
            //  Question#2:
  var objectA =[];
  var objectB = new object();
 
             //  Question#3:
  var cities =["karachi","Islamabad","Lahore", "Faislabad"];
 
 
              //  Question#4:
  var arr =[1,2,3,4,5,6,7,8,9];
 
 
              //  Question#5:
  var a =[];
  var b =5;
  for(var i=0; i<b; i++){
      alert("false")
  }
 
 
 
                //  Question#6:
  var mixArr=[2,"Ahmed",4,"Khalid"];
 
 
              //  Question#7:
  var qualification =["<h3> 1) SSC<br> "," 2)HSC <br>"," 3) BCS <br>"," 4) BS <br>"," 5) B.COM <br>"," 6) MS <br>"," 7) MPHIL. <br>"," 8) PHD <br>"];
  document.write("<h1>Qualifications:</h1>")
 
  for(var i=0; i<qualification.length ; i++  ){
      break
  }
  {
      document.write(qualification)
  }
 
 
            //  Question#8:
  var names =["Micheal", "Jhon","Tony"];
  var scores =[320,230,480];
  var totalM =500;
  var percentage = [(scores[0] /totalM)*100,(scores[1] /totalM)*100,(scores[2] /totalM)*100] ;
  document.write("<h2>Score of "+names[0]+" is "+scores[0]+" .Percentage "+percentage[0]+"%");
  document.write("<h2>Score of "+names[1]+" is "+scores[1]+" .Percentage "+percentage[1]+"%");
  document.write("<h2>Score of "+names[2]+" is "+scores[2]+" .Percentage "+percentage[2]+"%");
 
 
 
 
              //  Question#9:
  // part a):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
  var addcolor =prompt("Enter a color that you want to add to the beginning of array");
  color.unshift(addcolor)
  document.write("<h3>Updated Color Names</h3>"+color);
 
  // part b):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
  var addcolor =prompt("Enter a color that you want to add to the end of array");
  color.push(addcolor)
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
  // part c):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
  var addcolor1 =prompt("Enter a color that you want to add to the beginning of array");
  var addcolor2 =prompt("Enter a color that you want to add to the beginning of array");
  color.unshift(addcolor1 ,addcolor2 )
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
  // part d):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
 
  color.shift()
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
  // part e):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
 
  color.pop()
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
  // part f):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
   document.write("<h3>Color Names</h3>"+color)
  var position =prompt("Enter your desier position/index of array (0-5)");
  var addcolor =prompt("Enter a color that you want to add to the  array");
  color.splice(position,0,addcolor)
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
  // part g):
  var color =[" red ","  yellow "," green "," purple "," black "," white "];
  document.write("<h3>Color Names</h3>"+color)
  var position =prompt("Enter your desier position/index of array (0-5)");
  var numdelete =prompt("How many color(s) you want to delete");
  color.splice(position,numdelete)
  document.write("<h3>Updated Color Names</h3>"+color);
 
 
 
 
                // Question#10:
  var scores =[320 , 230 , 480 , 120];
  document.write("<h2>Scores of Students: "+scores);
  scores.sort()
  document.write("<h2>Ordered Scores of Students: "+scores)
 
 
 
            // Question#11:
  var cities =[" Karachi ", " Lahore "," Islamabad ", " Quetta ", "Peshawar"];
  document.write("<h2>Cities list:</h2>"+cities);
  var selectedCities =cities.slice(1,4);
  document.write("<h2>Selected cities list</h2> "+selectedCities);
 
           // Question#12:
  var arr=[" This "," is "," my "," cat "];
  document.write("<h2>Array:</h2>"+arr)
  var arr1=arr.join(""," This "," is "," my "," cat ");
  document.write("<h2>String:</h2>"+arr1);
 
 
              // Question#13:
  var names =["keyboard", "mouse", "printer ", "monitor "];
  document.write("<H2>Devices</h2>"+names+"<br>");
      document.write("<h3>out:</h3>"+ names[0]);
      document.write("<h3>out:</h3>"+ names[1]);
      document.write("<h3>out:</h3>"+ names[2]);
      document.write("<h3>out:</h3>"+ names[3]);
 
 
 
              // Question#14:
  var names =["keyboard", "mouse", "printer ", "monitor "];
  document.write("<H2>Devices</h2>"+names+"<br>");
  for(var i=names.length-1;i>=0;i--){
      document.write("<h3>out:</h3>"+ names[i])
  }
 
 
 
                // Question#15:
  var arr =["Apple","Nokia", "Samsung", "Motorola","Sony&Haier"];
  document.write("<select>")
  for(var i=0; i<arr.length;i++){
      document.write("<option>"+arr[i]+"</option>")
  }
  document.write("</select>");
 
 
 
 
 
 
 
                            //    CHAPTERS#17-20 (ARRAYS AND LOOP):
 
          // Question#1: 
  var a =[[],[],[]];
  document.write(a);
 
 
 
          // Question#2: 
  var c =["<h2>"+ [ 0,1,2,3]+"<br>",[1,0,1,2]+"<br>",[2,1,0,1]] ;
  document.write(c);
 
 
          // Question#3:
 
  var a =[1]
  for(a=1; a<=10; a++){
      document.write(a+"<br>")
  }
 
 
              // Question#4: 
  var table =+prompt("Enter a number to show its miltiplication table.");
  var lenght =+prompt("Enter length multiplication table.");
  for(var i=1; i<=lenght; i++){
      document.write(table+" X "+i+"="+table*i+"<br>")
  }
 
 
 
 
             // Question#5:
  var fruit =["apple","banana","mango","orange","strawberry"];
  for(i=0; i<fruit.length;i++){
      document.write(fruit[i]+"<br>")
  } 
  document.write("Element at index 0 is "+fruit[0]+"<br>");
   document.write("Element at index 1 is "+fruit[1]+"<br>");
  document.write("Element at index 2 is "+fruit[2]+"<br>");
  document.write("Element at index 3 is "+fruit[3]+"<br>");
  document.write("Element at index 4 is "+fruit[4]);
 
 
 
 
             // Question#6:
  // a. Counting:
  var counting =[1];
  document.write(" <h2>Counting:</h2> ")
  for(counting=1; counting<=15; counting++){
          document.write(counting+",\n")
      }
 
 
  //     // b. Reverse Counting:   
      var counting =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      document.write(" <h2>Reverse Counting:</h2> ")
      for(var i=counting.length-1;i>=0;i--){
              document.write(counting[i]+",\n")
          }    
 
 
  //         // c. Even:       
  document.write("<br>"+" <h2>Even:</h2> ")
  var i;
   for(var i=0; i<=20; i++ ){
       if((i % 2) === 0){
          document.write(i+",\n")
       }    
  }       
 
 
  //     // d. Odd:
   document.write("<br>"+" <h2>Odd: </h2>")
  var i;
   for(var i=0; i<20; i++ ){
       if((i % 2) !== 0){
          document.write(i+",\n")
       }
  }
 
 
  //     //  e. Series:
   document.write("<br>"+"<h2>Series:</h2> ")
  var i;
   for(var i=2; i<=20; i++ ){
       if((i % 2) === 0){
          document.write(i+"k,\n")
       } 
   }  
 
 
               // Question#7:
  var A=["cake","apple pie","cookie","chips","patties"];
  var search =prompt("Welcome to ABC Bakery,what do you want to order sir/ma'am");
  if(A.indexOf(search) !==-1){
      if(search==A[0]){
          alert(search+" is available at index 0 in our Bakery")
      }
      else if(search==A[1]){
          alert(search+" is available at index 1 in our Bakery")
      }
      else if(search==A[2]){
          alert(search+" is available at index 2 in our Bakery")
      }
      else if(search==A[3]){
          alert(search+" is available at index 3 in our Bakery")
      }
      else if(search==A[4]){
          alert(search+" is available at index 4 in our Bakery")
      }
 
  }
  else{
      alert("We are sorry. "+search+" is not available in our bakery")
  }
 
 
 
 
 
              // Question#8:
    var a =[24,53,78,91,12];
    document.write("The Array Items: "+a+"<br>")
    a=Math.max(24,53,78,91,12);
    document.write("The largest number is " +a);
 
 
 
 
              // Question#9:
 
    var a =[24,53,78,91,12];
    document.write("The Array Items: "+a+"<br>")
    a=Math.min(24,53,78,91,12);
    document.write("The Smallest number is " +a);
 
 
 
 
 
 
              // Question#10:
 
  for(var i =1 ; i<=20; i++){
      document.write(5*i+"\n")
  }







                             //    CHAPTERS# 21-25: (STRING METHOD):

      //   Question#1:              
 var firstName =prompt("Enter your first name","Your first name is:");
 var lastName =prompt("Enter your last name","Your last name is:");
    var fullName =firstName +" "+lastName;
 alert(fullName);


       //   Question#2:  
 var a =prompt("Enter your favorite mobile phone model");
 var a =("Samsung Galaxy S6 Edge plus ");
 document.write("My favorite phone is: "+ a+ "<br>" +"Length of string is: " +a.length);


      //   Question#3:
   var a=("Pakistani");
   document.write("String: "+a+"<br>" +"index of 'n': "+ a.indexOf("n"));



        //   Question#4:
 var a ="Hello World";
 document.write("String: "+a+ "<br>" );      
 var b =a.lastIndexOf("l");
 document.write("Last index of 'l': " +b);



         //   Question#5:

    var a="Pakistani";
    document.write("String: "+a+"<br>" +"Character at index 3: "+ a.charAt("3"));       


        //   Question#6:

    var firstName =prompt("Enter your first name","Your first name is:");
   var lastName =prompt("Enter your last name","Your last name is:");
   var fullName =firstName.concat(" ",lastName);
   alert(fullName);


          //   Question#7:

  var city ="Hyderabad";
  var rePlace =city.replace("Hyder","Islam");
  document.write("City: "+city +"<br>"+"Ater repalcement: "+rePlace);



           //   Question#8:

    var message ="Ali and Sami are best friends.They play circket and football together.";
    var change =message.replace(/and/g,"&");
    document.write(change);



       //   Question#9:

    var str ="472";
    var num =Number(str);
    document.write("Value: "+str+"<br>"+"Type: String"+"<br>"+"Value: "+num+"<br>"+"Type: Number");

     

     //   Question#10:
     var text =prompt("Enter your text");
     var convert =text.toUpperCase();
     document.write("User input: "+text +"<br>"+ "Upper case: "+convert);


    //   Question#11:
   var text =prompt("Enter your text");
   var firstLetter = text.slice(0,1);
   var firstLetConvert =firstLetter.toUpperCase();
   var otherText = text.slice(1);
   var otherTextConvert = otherText.toLowerCase();
   document.write(firstLetConvert+otherTextConvert);


   

        //   Question#12:

    var num =35.36;
    var convertStr=num.toString();
    document.write("Number: "+convertStr+"<br>");
    var removeDec =convertStr.replace(".","");
    document.write("Result: "+removeDec);




            //   Question#13:
      
        var userName=prompt("Enter your user name");
    for(var i=0; i<=userName.length; i++){
          if(userName[i]=="!"){
                alert("Please enter a valid username");
          }
          else if(userName[i]==","){
            alert("Please enter a valid username");
      }
      else if(userName[i]=="."){
            alert("Please enter a valid username");
      }
      else if(userName[i]=="@"){
            alert("Please enter a valid username");
      }
      else{
            alert("correct");
      }
    }

      



  

         //   Question#14:

      var A =["cake","apple pie","cookie","chips","patties"];
      var input =prompt("Welcome to ABC bakery. what do u want to order sir/ma'am?");
      var inputConvert =input.toLowerCase();  
      if(A.indexOf(inputConvert) !==-1){
       if(inputConvert==A[0]){
               alert(inputConvert+" is available at index 0 in our Bakery");
           }
           else if(inputConvert==A[1]){
               alert(inputConvert+" is available at index 1 in our Bakery");
           }
           else if(inputConvert==A[2]){
               alert(inputConvert+" is available at index 2 in our Bakery");
           }
           else if(inputConvert==A[3]){
               alert(inputConvert+" is available at index 3 in our Bakery");
           }
           else if(inputConvert==A[4]){
               alert(inputConvert+" is available at index 4 in our Bakery");
           }
      
    }
    else{
        alert("We are sorry. "+inputConvert+" is not available in our bakery")
    }
    





          //   Question#15:
          var password =prompt("Enter your password. it should be the combination of alphabates & Nums.");
          if(password.match(/^[a-zA-Z]\w{1,6}$/gi)){
            alert("Correct");
            
      }
      else{
            alert("incorrect");
            
      }





        //   Question#16:
   
        var university ="University of Karachi";
        var ar =university.split('');
      
        for(var i=0; i<ar.length; i++){
        document.write(ar[i]+"<br>");
      }
            

       
     //   Question#17:
     
    var userInput ="Pakistan";
   var b =userInput.length -1;
    
   document.write("User input: "+userInput+"<br>"+"Last character of input: "+userInput.charAt(b));
                              

          
          
      //   Question#18:
      
    var a ="The quick brown fox jumps over the lazy dog";
    var aConvert =a.toLowerCase();
    var b = aConvert.match(/the/g).length;

    document.write("Text: "+a+"<br>");
    
    document.write("There are "+b+" occurences of word 'the'" );
    






              //      CHAPTERS#26-30 (MATH METHODS):


     //   Question#1:         

     var num =3.45214;
     var round =Math.round(num);
     var floorValue =Math.floor(num);
     var ceilValue =Math.ceil(num);
     document.write("Number: "+num+"<br>");
     document.write("round of value: "+round+"<br>");
     document.write("floor value: "+floorValue+"<br>");
     document.write("ceil value: "+ceilValue);


  //   2nd Method:

      var num =+prompt("Enter the value");
     if(num>0){
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue);
     }
     else if(num<0){
            var num = num*(-1);
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue); 
     }





     
     

       //   Question#2: 

 //  1st Method:
      var num =-2.673;
     var round =Math.round(num);
     var floorValue =Math.floor(num);
     var ceilValue =Math.ceil(num);
     document.write("Number: "+num+"<br>");
     document.write("round of value: "+round+"<br>");
     document.write("floor value: "+floorValue+"<br>");
     document.write("ceil value: "+ceilValue);
     

 //  2nd Method:

 var num =+prompt("Enter the value");
     if(num<0){
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue);
     }
     else if(num>0){
            var num = num*(-1);
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue); 
     }


            //   Question#3: 

    var num = -4;
    var absNum= Math.abs(num);
    document.write("The absolute value of "+num+" is "+absNum);



        //   Question#4: 

      var dice1 =(Math.random()*6);
      var dice2 =(Math.random()*6);
      var ceil1 =Math.ceil(dice1);
      var ceil2 =Math.ceil(dice2);
      document.write("random dice value: " +ceil1+"<br>"+"random dice value: " +ceil2);  




       //   Question#5:
             var head =(Math.random()*2);
             var tails =(Math.random()*2);
             var headFloor =Math.ceil(head);
             var tailsFloor =Math.ceil(tails);
             document.write(headFloor+"<br>"+"random coin value: Head" +"<br>"+tailsFloor+"<br>"+"random coin value: Tails" );     



        //   Question#6:
      var randomNum =Math.random()*100;
      var ceil =Math.ceil(randomNum);
      document.write("Random number between 1-100: "+ceil);   



       //   Question#7: 
       var weight=prompt("Enter your weight in kilograms");
       var convert =parseFloat(weight);
       document.write("The weight of user is "+convert+" kilograms");



        //   Question#8:
        var input =+prompt("Enter a number between 1 and 10");
     var randomNum =Math.random()*10;
     var ceil =Math.ceil(randomNum);
     if(input==randomNum){
            alert("Congratulations!");
     }
     else{
            alert("Try again");
     }



         




              //     CHAPTERS#31-34 (DATE METHOD):
     //   Question#1:
    var a =new Date();
    document.write(a);          
    
        

      //   Question#2:
      var monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "november", "December"];
      var a =new Date();
      var month =a.getMonth();
      var presentMonth =monthNames[month];
      document.write("Current Month: "+presentMonth);
      


      //   Question#3:
      var dayNames=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var a =new Date();
      var day =a.getDay();
      var presentDay =dayNames[day];
      document.write("Today is: "+presentDay);
      
  



         //   Question#4:
       var dayNames=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var a =new Date();
      var day =a.getDay();
      var presentDay =dayNames[day];
      if((presentDay==dayNames[0])||(presentDay==dayNames[6])){
             document.write("It's Fun day");
      }
     
      


       //   Question#5:

      
      var a =new Date();
      var currentDate =a.getDate();
      if(currentDate<15){
             document.write("First fifteen days of the month");
      }
      else{
       document.write("Last days of the month");  
      }
      



         //   Question#6:
    var current =new Date();
    var millisec =current.getTime();
    var minute =millisec*1000*60;
    document.write("Current date: "+current+" <br>"+" Elapsed milliseconds since january 1, 1970: " +millisec+"<br>"+" Elapsed minutes since january 1, 1970: " +minute);




           //   Question#7:
           var a =new Date();
           var currentHour =a.getHours();
           if(currentHour<=12){
                           document.write("It's AM");
                    }
          else{
                     document.write("It's PM");  
                    }






         //   Question#8:

       //   1st Method:
         var latterDate = new Date()
       
         var year =latterDate.setFullYear(2020);
         var month =latterDate.setMonth(11);
         var date =latterDate.setDate(31);
         var hours =latterDate.setHours(00);
         var minute =latterDate.setMinutes(00);
         var sec = latterDate.setSeconds(00);
       document.write("Latter Date: "+latterDate);

       // 2nd Method:
       var a =new Date("Thus, Dec 31, 2020 ,00:00:00");
       document.write(a);
        





        //   Question#9:
        var today = new Date()
        var todayMilli =today.getTime();
        var latterDate = new Date()
       
         var year =latterDate.setFullYear(2015);
         var month =latterDate.setMonth(5);
         var date =latterDate.setDate(18);
         var latterMilli =latterDate.getTime();
         var diff =todayMilli-latterMilli;
         var accu =Math.round(diff/(1000*60*60*24));
       document.write(accu+" days have passed since 1st Ramadan, 2015");

       


         //   Question#10:
         var begining =new Date()
         var year = begining.setFullYear(2015);
         var month = begining.setMonth(0);
         var date = begining.setDate(1);
         var hours =  begining.setHours(00);
         var minute =  begining.setMinutes(00);
         var sec =   begining.setSeconds(00);
         var beginingMilli =begining.getTime();
          
         var latter =new Date()
         var year =latter.setFullYear(2015);
         var month =latter.setMonth(11);
         var date =latter.setDate(5);
         var hours = latter.setHours(22);
         var minute = latter.setMinutes(50);
         var sec =  latter.setSeconds(16); 
         var latterMilli =latter.getTime();
         
         var diff =latterMilli-beginingMilli;
         var accu =Math.ceil(diff/(1000));
         
         document.write("On reference date "+latter+"<br>");
           document.write(accu+" seconds had passed since begining of 2015");








            //   Question#11:
              
     var current =new Date(); 
     document.write("current date: "+current+"<br>");
     current.setMinutes(current.getMinutes() -60);  
  
     document.write("1 hour ago, it was " +current);
       
      



              //   Question#12:
              var current =new Date(); 
                   document.write("current date: "+current+"<br>");
                   current.setFullYear(current.getFullYear() -100);  
                
                   document.write("100 years back, it was " +current);




              //   Question#13:
      var input =+prompt("Enter your age  e.g 22", "Your age is:");
     var current =new Date();
     var year =current.getFullYear();
     var birthYear =year-input;
    document.write("Your age is "+input+"<br>");
    document.write("Your birth year is " +birthYear);


         
             //   Question#14:
       var cName =("ABC coustomer");
      var month ="February";
      var numOfUnit =410;
      var charPerUnit =16;
       var netAmount =numOfUnit*charPerUnit;
       var net =netAmount.toFixed(2);
      var latePaymentCharge =350;
      var grossAmount =netAmount+latePaymentCharge;
      var gross =grossAmount.toFixed(2);
     
      document.write("Coustomer Name: "+ cName +"<br>");
      document.write("Month: "+month+"<br>");
      document.write("Number of units: "+numOfUnit+"<br>");
      document.write("Charges per unit: "+charPerUnit+"<br>");
      document.write("Net amount payable(within Due Date): "+net+"<br>");
      document.write("Late payment surcharge: "+latePaymentCharge+"<br>");
      document.write("Gross amount payable(after Due Date) "+gross);






              //    CHAPTERS#35-38 (FUNCTION):



     
      //   Question#1:
      function date(current){
          document.write(current);
      }

    date(new Date());



      //   Question#2:
 
    function greet(firstName,lastName){
       var firstName =prompt("Enter your first name");
       var lastName =prompt("Enter your last name");
      alert(firstName+" "+lastName)
    }
   greet();



    
      //   Question#3:
  function add(a,b){
  var a=+prompt("Enter first number");
  var b=+prompt("Enter second number");
  alert(a+b);
 }
 add();




      //   Question#4:
      var num1 =+prompt("Enter first number");
      var opr =prompt("Enter a operator");
      var num2 =+prompt("Enter second number");
     
   function calculator(num1,opr,num2){
       if(opr=="+"){
              alert(num1+num2) 
         }
        else if(opr=="-"){
               alert(num1-num2) 
        }
       else if(opr=="*"){
           alert(num1*num2)
       }
       else if(opr=="/"){
             alert(num1/num2)
         }
       else{
         alert( "Incorrect operator")
       }
        

   }
 
 calculator();



   

 //   Question#5:
 function square (x){
  var a =Math.pow(x,2) ;
  alert(a)
  };
 square(12);
  


  //   Question#6:
  function factorail(n){
         var answer =1;
         if (n == 0 || n==1){
                return answer;
         }
         else{
                for(var i=n; i>=1; i--){
                       answer=answer*i;
                }
                return answer;
         }
  }
  var n=4;
  answer=factorail(n)
  document.write("the factorial of "+ n+" is " + answer);


  //   Question#7:

  function counting(num1,num2,i){
       var num1 =+prompt("enter a starting number");
       var num2 =+prompt("enter a ending number");
       var i;
       for(i=num1; i<=num2; i++){
              document.write(i+"<br>")  
       }
 }
  counting();


  


       //  Question#8:
     

      
      function outer(base,perpendicular,h){
       var base =+prompt("Enter base value");
       var perpendicular =+prompt("Enter perpendicular value");
       
       var h= Math.pow(base,2)+Math.pow(perpendicular,2);
       console.log(h);
      
      function innerFunction(h2){
       var h2 =Math.round(Math.sqrt(h));
       alert(h2); 
  }
  return innerFunction
       }
     
    outer()();
   




       //  Question#9:
      function area(width,height){
            var a= width*height;
            return a;
      }
     var A= area(12,15);
     alert(A);
     
  

       //  Question#10:

      function palindrome(word,check){

            var word =("madam");
            var check;
            for(var i=word.length-1; i>=0; i--){
                  document.write(word[i]+"<br>");
                  
            
            }
            if(word[i] == check){
                  document.write("<br>" +word+" is palindrome word");
            }
      }
     
      palindrome();


       //   Question#11:
       function capitalize(){
            var str=("the quick brown fox");
            var word1=str.replace("the","The");
            var word2=word1.replace("quick","Quick");
            var word3=word2.replace("brown","Brown");
            var word4=word3.replace("fox","Fox");

            document.write("Example stgring: "+str+"<br>");
            document.write("Expacted output: "+word4);
            
       }
       capitalize();
      



       //   Question#12:
       function find_longest_word(str)
   {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
   }
  
        document.write(find_longest_word('Web Development Tutorial'));




       //    Question#13:
    function findletter(str,letter){
      var str="JSResourceS.com";
      var letter="o";
      var a=0;
          for(var i=0; i<str.length; i++){
                if(str.charAt(i)===letter){
                      var a= a+1;
                      
                }
          }
          document.write(a); 
    }
    

     findletter();
    





       //   Question#14:
       
       function calcCircumference(radius){
             var calCir=2*34.1*radius;
             document.write("The circumference is "+calCir+"<br>");

       }
   
    calcCircumference(4);

    function calcArea(r){
        var calA= 34.1*(Math.pow(r,2));
        document.write("The Area of circle is "+calA);
    }

    calcArea(4);
     
       
           
      
             
            
            
            
            
            
            //   CHAPTERS# 38-42(FUNCTIONS, SWITCH
                //    STATEMENTS, WHILE… DOWHILE LOO):



    // Question#1:  
    var a =+prompt("Enter the value of a");
    var b=+prompt("Enter the value of b");
    function raised(){
        var c =Math.pow(a,b);
         alert(c);
    }          
   raised();
       


   // Question#2:  
   var year =+prompt("Enter a year");
   function leapYear(year){
    if((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return'yes this is a leap year';
        }else {
        return "it's not a leap year";
        }
   }
   alert(leapYear(year));





 // Question#3:
 var a=60;
 var b=60;
 var c=60;
 var S;
 var area;
 function calculateS(){
     var  S=(a+b+c)/2;
     return S;
   
 } 
 console.log(calculateS());
 
 function calculateArea(){
    var S=calculateS();
    var area= (S*(S-a)*(S-b)*(S-c));
    alert(Math.sqrt(area)) ;
} 
 
 
 calculateArea();


// Question#4:
var subject1=70;
var subject2=85;
var subject3=76;
var totalMarks=300;
var obtainedMarks= subject1+subject2+subject3

var average;
var per;
function Average(){
    var average= (subject1+subject2+subject3)/3;
    return average;
}
function Percentage(){
    var per= (obtainedMarks/totalMarks)*100;
    return per ;
}


 function mainFunction(){
     document.write("Average: "+Average()+"<br>");
     document.write("Percentage: "+Percentage()+" %");

 }
 mainFunction();




// Question#5:

var text = "A sentence is a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses. "
var indexNum= text.indexOf('typically');
alert(indexNum);



// Question#6:

var string = "This is my car it has four wheels. It is blue in colour.";
var vowel = ["a", "e", "i", "o", "u"];

 function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;           
                secondLoop--;  
            }

        }
    }
}
name();
document.write(string);





// Question#7:
function findOccurrences() {
   var str = "Pleases read this application and give me gratuity";
   var count = 0;
   let haveSeenVowel = false;
 
   for (const letter of str.toLowerCase()) {
     switch (letter) {
       case 'a':
       case 'e':
       case 'i':
       case 'o':
       case 'u':
         {
           if (haveSeenVowel) {
             count++;
             haveSeenVowel = false;
           } else {
             haveSeenVowel = true;
           }
           break;
         }
       default:
         haveSeenVowel = false
     }
   }
 
   return count
 }
 
 alert(findOccurrences());




// Question#8:
var cities=+prompt("Enter the distance between two cities in km");
//convert into meter
function meter(){
  var distanceInMeter = cities*1000;
  alert(" Distance between two cities in METER: "+distanceInMeter+"m");
}
meter();

//convert into feet:
function feet(){
   var distanceInFeet =cities*3280.84;
   alert(" Distance between two cities in FEET: "+distanceInFeet);
}
feet();

//convert into inches;:
function inches(){
   var distanceInInches =cities*39370.08;
   alert(" Distance between two cities in INCHES: "+distanceInInches);
}
inches();

//convert into centimeters:
function centiMeter(){
   var distanInCentiMeter =cities*100000;
   alert(" Distance between two cities in CENTIMETER: "+distanInCentiMeter+"cm");

}
centiMeter();



//Question#10:
function main()
{
    var amount=+prompt("Enter the amount to be withdrawn (in hundreds):");
    document.write("You will have   "+ Math.floor(amount / 100)+" hundred notes ");
    document.write( Math.floor((amount % 100) / 50)+" fifty notes ");
    document.write( Math.floor(((amount % 100) % 50) / 10)+" ten notes");
    
}

main();





                      //   CHAPTERS# 43-48(EVENTS):
   //Question#1:



   // Question#2:
   function pic(){
      alert("Thanks for purchasing a phone from us")
   }


   //Question#3:
  
   function SomeDeleteRowFunction(o) {
      var p=o.parentNode.parentNode;
          p.parentNode.removeChild(p);
     }



   //Question#4:
 function changeImage(id,src){
    var image=document.getElementById(id);
    image.src=src

 }



  //Question#5

   var clicks = 0;
   function increase() {
       clicks += 1;
       document.getElementById("value").innerHTML = clicks;
   }

   var clicks ;
   function decrease() {
       clicks -= 1;
       document.getElementById("value").innerHTML = clicks;
   }






        // <!-- CHAPTERS# 49-52(EVENTS): -->
      //Question#1:
      var modal = document.getElementById('id01');
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }


      // <!-- QUESTION#2: -->
        function ReadMore(){
           var heading=document.getElementsByTagName("h2")
           var heading= "<h2>Essay on Importance of Education for Students</h2>"
           var paragraph= document.getElementById("more")
           var paragraph="To say Education is important is an understatement. Education is a weapon to improve one’s life.<br> It is probably the most important tool to change one’s life. Education for a child begins at home.<br> It is a lifelong process that ends with death. Education certainly determines the quality of an individual’s life. <br> Education improves one’s knowledge, skills and develops the personality and attitude. Most noteworthy, Education affects the chances of employment for people.<br> A highly educated individual is probably very likely to get a good job. In this essay on importance of education, we will tell you about the value of education in life and society."
           document.write(heading+paragraph);
        }



      // QUESTION#3:
      function SomeDeleteRowFunction(o) {
      var p=o.parentNode.parentNode;
          p.parentNode.removeChild(p);
     }





                   // <!-- CHAPTERS# 52-57(modal.html): -->
     // <!-- QUESTION#1: -->
      function showImage(e){
      console.log(e.src)
      var modalImage= document.getElementById("modalImage")
      modalImage.src=e.src
      }
 


      // <!-- QUESTION#2: -->
      
      function zoomIn( )
      {
        demo_paragraph = document.getElementById( 'demo' );
        demo_paragraph.style.fontSize = "150%" ;
        
       
      }
      function zommOut(){
         demo_paragraph = document.getElementById( 'demo' );
            demo_paragraph.style.fontSize = "100%" ;
           
      } 

