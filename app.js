/////////////////////////////////////////////////////// chap 38-42
// task 1 ////////////////////////////////////////////////
// var a = prompt("Enter value 1")
// var b = prompt("Enter value 2")
// var rasied = a**b
// alert(rasied)

// task 2 ////////////////////////////////////////////////
// var b;
// b = prompt("Enter Year ");
// var text;
// switch (true){
//    case b < "2020":
//       text = "leap";
//       break;
//       default :
//       text = "not leap";
//    }
// alert(text);

// task 3 ////////////////////////////////////////////////
// var a = +prompt("Enter side A value");
// var b = +prompt("Enter side B value");
// var c = +prompt("Enter side C value");

// var S = (a+b+c)/2;
// var area = S*(S-a)*(S-b)*(S-c);
// document.write("Area of Triangle is " + area)

// task 4 ////////////////////////////////////////////////
// function main(){
// var marks1 = +prompt("Enter Your Sub 1 Marks");
// var fmarks1 = +prompt("Enter full marks of Sub 1 ");
// var marks2 = +prompt("Enter Your Sub 2 Marks");
// var fmarks2 = +prompt("Enter full marks of Sub 2 ");
// var marks3 = +prompt("Enter Your Sub 3 Marks");
// var fmarks3 = +prompt("Enter full marks of Sub 3 ");
// document.write(per)
// avg()
// per()
// }

// function avg(){
//     var total = marks1+marks2+marks3;
//     var ftotal = fmarks1+fmarks2+fmarks3;
//     return;
//     }

//     function per(){
        // var per = total * 100 / ftotal ;
//         return;
//     }

// main()

// task 5 ////////////////////////////////////////////////
// var Val = prompt("Enter full val","Value")
// var findVal = prompt("Enter value you want to find in previous line","Value")
// for(i = 0 ; i < Val.length ; i++){

// }if(findVal = Val.length){
//         document.write("Your Value has been Found at " + findVal + " index")
//  }else{
//          document.write("Your Value " + findVal + " has not been Find")
//  }

// task 6 ////////////////////////////////////////////////
// var a = "a";
// var e = "e";
// var i = "i";
// var o = "o";
// var u = "u";

// var vall = prompt("enter your value here")
// for(i = 0 ; i < Val.length ; i++){
// if(a.slice)
// }

/////////////////////////////////////////////////////// chap 43-48
// task 1 ////////////////////////////////////////////////
// function clickk(){
//     alert("Click")
// }

// task 2 ////////////////////////////////////////////////
// function buy(){
//     alert("Thanks For Purchasing a phone from us")
// }

// task 3 ////////////////////////////////////////////////
// function removejh(){
//     document.getElementById("jhone").remove()
// }
// function removed(){
//     document.getElementById("Doe").remove()
// }
// function removem(){
//     document.getElementById("Mark").remove()
// }
// function removej(){
//     document.getElementById("James").remove()
// }

// task 4 ////////////////////////////////////////////////
// function pic1() {
//    var picture1 =  document.getElementById("pics1")
//    picture1.src='2.jpg'
// }
// function pic2() {
//     var picture1 =  document.getElementById("pics1")
//     picture1.src='1.jpg'
//  }

// task 5 ////////////////////////////////////////////////
// var counter = 0;
// document.getElementById("counter").innerHTML = counter
// function increment(){
//     ++counter ;
//     console.log(counter)
// document.getElementById("counter").innerHTML = counter
// }
// function decrement(){
//     --counter;
// document.getElementById("counter").innerHTML = counter
// }

/////////////////////////////////////////////////////// chap 49-52
// task 1 ////////////////////////////////////////////////
// function submitt(){
//     var name = document.getElementById("name");
//     var Number = document.getElementById("number");
//     var Address = document.getElementById("address");
//     var Email = document.getElementById("email");
//     var password = document.getElementById("password");
//     var nval = name.value;
//     var Nval = Number.value;
//     var Aval = Address.value;
//     var Eval = Email.value;
//     var pval = password.value;

//     var para = document.getElementById("info")
//     para.innerHTML = "Name : " + nval +  " </br> Number : " + Nval +  " </br> Address : " + Aval +  " </br> Email : " + Eval +  " </br> password : " + pval 
   
// }

// task 2 ////////////////////////////////////////////////
// var text = document.getElementById("content")
// function fulltext(){
//     text.innerHTML = "This Text is written through javascript"
// }



 /////////////////////////////////////////////////////// chap 58-67  
// task 1 //////////////////////////////////////////////// 
// var main = document.getElementById("main-content");
// console(main.children)  ////--------------------------------display in console 

// var render = document.getElementsByClassName("render")
// console.log(render) ////--------------------------------display in console 

// var nameinput = document.getElementById("first-name")
// nameinput.setAttribute("value","yes I can put name value thrugh js")

// var lastnameinput = document.getElementById("last-name")
// lastnameinput.setAttribute("value","yes I can put last name value thrugh js")

// var emailinput = document.getElementById("email")
// emailinput.setAttribute("value","yes I can put email value thrugh js")


// task 2 //////////////////////////////////////////////// 
// var formContent = document.getElementById("form-content")
// alert(" node type of  element having id 'form-content' is " + formContent.nodeType)

// var lastNametype = document.getElementById("last-name")
// alert(" node type of  element having id 'last-name' is " + lastNametype.nodeType + "<br/>" + " Child node is " + lastNametype.childNodes)

// var LastNAme = document.getElementById("lastName")

// var main = document.getElementById("main-content")
// console.log(main.firstChild)  ////--------------------------------display in console 
// console.log(main.lastChild)  ////--------------------------------display in console 

// var lastName = document.getElementById("lastName")
// console.log(lastName.nextSibling)  ////--------------------------------display in console 
// console.log(lastName.previousSibling)  ////--------------------------------display in console 

// var Email = document.getElementById("email")
// console.log(Email.parentNode)  ////--------------------------------display in console 
// console.log(Email.parentNode.nodeType) ////--------------------------------display in console 