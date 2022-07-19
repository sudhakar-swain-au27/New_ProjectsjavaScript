function display(value){
    document.getElementById('text_area').value+=value
}
function calculate(){
    var value = document.getElementById("text_area").value
    var answer =eval(value)
    document.getElementById('text_area').value = answer
}
function clr(){
    document.getElementById('text_area').value= ''
}