var billStringElement= document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

let calculateBill = FactoryCalculateBill();
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billType = billStringElement.value
    var billTotal = calculateBill.billString(billType);

     //round to two decimals
     var roundedBillTotal = billTotal.toFixed(2);
     billTotalElement.innerHTML = roundedBillTotal;

     var color = calculateBill.colorIndicator(billTotal);


    if (color == 'danger'){
        // adding the danger class will make the text red
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove('warning');
    }
    else if (color == 'warning'){
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove('danger');
}
 else{
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
}
}
 calculateBtnElement.addEventListener('click', calculateBtnClicked);