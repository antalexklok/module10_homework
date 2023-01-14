// задание 1

let a = prompt ("input");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert ("четное");
  
}
else if (a%1 ===0) {
  alert ("нечетное");
  
}
else {
  alert("Упс, кажется вы ошиблись")
}

if (a > 0)
 alert(true)

else if (a < 0)
  alert(false )

else
  alert(false)


  // задание 2
  let x =  prompt  ("input");

x = +x; 
alert(typeof x);

x = "123";
alert (typeof x);

if (x > 0) {
 alert(true);
}
else if (x < 0) {
  alert(false);
}

else {
   alert("Тип Х не определен");
   }