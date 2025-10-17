

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
var removecard= document.createElement('button')
removecard.innerHTML="x"
removecard.onclick= function reemoov(){
div.remove()

}
}
var modal1=document.getElementById('BTN1') 
modal1.onclick= function edite1(){
var modal2=new bootsrap.Modal(document.getElementById('exampleModal'));
modal2.show();
}

div.appendChild(modal1)
div.appendChild(removecard)
div.appendChild(h2)
main.appendChild(div)
}

