/*function funcCalc(){
    document.getElementById("firstNum").;
    document.getElementById("secondNum")=num2;

console.log(firstNum,secondNum);
}*/

    
$(document).ready(function() {
    $("#btnCalc").click(function() {
      // Reading the data from the form
      var num1 = parseInt($("#num1").val());
      var num2 = parseInt($("#num2").val());
      var num3 = parseInt($("#num3").val());
      var arrNum = arrangeBySize(num1, num2, num3);
  
      // Deal with the output
      alert(arrNum);
    });
});

// Logic function
function arrangeBySize(nm1, nm2, nm3) {
    if (nm1 >= nm2 && nm2>nm3) {
      return  [nm1,nm2,nm3];} 
      else if (nm2 >= nm1 && nm1>nm3) {
    return   [nm2,nm1,nm3];}
    else if (nm3 >= nm2 && nm2>nm1) {
      return   [nm2,nm2,nm1];
    }
    else if (nm1 >= nm3 && nm2>nm2) {
      return   [nm1,nm3,nm2];}
     else if (nm3 >= nm1 && nm2>nm2) {
      return   [nm3,nm1,nm2];}
    else if (nm2 >= nm3 && nm3>nm1) {
      return   [nm2,nm3,nm1];}
    } 