// var a = prompt("Enter value 1")
// var b = prompt("Enter value 2")


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
var marks1 = +prompt("Enter Your Sub 1 Marks");
var fmarks1 = +prompt("Enter full marks of Sub 1 ");
var marks2 = +prompt("Enter Your Sub 2 Marks");
var fmarks2 = +prompt("Enter full marks of Sub 2 ");
var marks3 = +prompt("Enter Your Sub 3 Marks");
var fmarks3 = +prompt("Enter full marks of Sub 3 ");
var total = marks1+marks2+marks3;
var ftotal = fmarks1+fmarks2+fmarks3;

var per = total * 100 / ftotal ;
document.write(per)