

function generatecards(){
var main = document.getElementById('main')
main.innerHTML=""
var count=document.getElementById('count').value
count=parseInt(count)
for(let index=1 ; index<=count;index++){
var div = document.createElement('div')
div.className="card"
var h2 = document.createElement('h2')
h2.innerHTML="this is card"+index
editbutton.setAttribute('data-toggle','modal')
editbutton.setAttribute('data-target','#editModal')
editbutton.onclick=function(){
var editTitle =document.getElementById('editTitle')
editTitle.value="this is card"+index
let editeIndex=document.getElementById('editeIndex')
editeIndex.value=index


var removecard= document.createElement('button')
removecard.innerHTML="x"
removecard.onclick= function reemoov(){
div.remove()

}
}

}

div.appendChild(removecard)
div.appendChild(h2)
main.appendChild(div)

}
 var editForm = document.getElementById('editeForm')
editForm.addEventListener('submit',function(event)
{
    event.preventDefault()
var editTitle=document.getElementById('editTitle').nodeValue
// var cardTitle=document.querySelector('.card-title')
// cardTitle.innerHTML=editTitle
var cardTitle = document.getElementsByClassName('card-Title')
let editIndex = parseInt(document.getElementById(editIndex))
cardTitle[editIndex-1].innerHTML=editTitle


})