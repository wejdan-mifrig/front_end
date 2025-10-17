var age= 20;
console.log( "age1",age )
age=30
console.log( "age1",age )

let price =100
console.log( "price1",price)
price=200
console.log( "price2",price)

const tax =0.1
console.log("tax1",tax)


var studentname="wijdan"
console.log("student name",studentname)

var isnew=false
console.log("new",isnew)

var marks = [10 ,20 , 30]
console.log(marks)

var student={
name:"wej",
age:20,
isnew:false
}
console.log(student)

var y=null
console.log(y)

if (age<=10){
    console.log("age is greater than 10")
}

if (age!==studentname){
    console.log("age is greater than 10")
}

if (age>=age){
    console.log("age is less than 10")
}

if (age ==10 && age<10){
    console.log("age is greater than 10")
}

function hellow(){
alert("hellow()")
}

function jdBgColorChange(){
var jsPart = document.getElementById('jsPArt')
console.log(' this part is js part',jsPart)
if(jsPart.style.backgroundColor=="blue"){
   jsPart.style.backgroundColor="red" 
}
else{
    jsPart.style.backgroundColor="blue"
}
}

var switchButton=document.getElementsByClassName('switch')[0]
switchButton.addEventListener('click',function(){
var checkbox=document.getElementById('checkbox')
console.log(checkbox.checked)
})


function clculate(){
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
var op = document.getElementById('op').value
console.log(num1,num2.op)
if (num1=="" || num2==""){
alert('plese insert num1 and num2 ')
return
}
var result=0;
switch(op){
case'+':
result=parseInt(num1)+parseInt(num2)
break;
case'-':
result=parseInt(num1)-parseInt(num2)
break;
default:
alert('please select an operation')
break;
}

document.getElementById('reasult').innerHTML=result

}


function count1(){
   
var num3 =document.getElementById('num3').value
console.log(num3)

if ( num3<2){
result="not prime number";
}

else if(num3===2){
result=" prime number";

}
else if(num3%2===0){
result="not prime number";
}

else {
for(let i=3;i<Math.sqrt(num3);i+=2){
if(num3%i===0){
result=" prim num"
}
}
}
document.getElementById('reas').innerHTML=result;
}




function gen5Elements(){
var elemntDiv=document.getElementById('gen5Elements')
var ul= document.createElement('ul')
for(let index=0;index<5;index++){
var li=document.createElement('li')
var a=document.createElement('a')
a.innerHTML="element " + (index+1)
li.appendChild(a)
li.appendChild(li)

}
elemntDiv.appendChild(ul)


}

