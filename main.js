
document.getElementById('sum_button').addEventListener('click' , ()=>{
   var a = document.getElementById('first_element').value;
   var b = document.getElementById('second_element').value;
    console.log(document.getElementById('first_element').value)
    console.log(document.getElementById('second_element').value)
    console.log(parseInt(document.getElementById('first_element').value)+parseInt(document.getElementById('second_element').value))
    document.getElementById("result").innerText=parseInt(a)+parseInt(b)
})
document.getElementById('sum_button_minus').addEventListener('click' , ()=>{
    var a = document.getElementById('first_element').value;
    var b = document.getElementById('second_element').value;
    document.getElementById("result").innerText=parseInt(a)-parseInt(b)
})
document.getElementById('mult_button').addEventListener('click' , ()=>{
    var a = document.getElementById('first_element').value;
    var b = document.getElementById('second_element').value;
    document.getElementById("result").innerText=parseInt(a)*parseInt(b)
})
