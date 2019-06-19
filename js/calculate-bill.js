//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


function FactoryCalculateBill(){ //methods
    var billTotal = 0.00;// global var
function billString(billType){// 

    var billItems = billType.split(',');
    billTotal = 0.00; // reset billTotal
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
        }
}

return billTotal;
}
 function colorIndicator(totalBill){

    if (totalBill > 20.00 && totalBill < 30.00){
        return "warning";
    }
    if (totalBill > 30.00){
        return "danger";
    }

 }

return {// expose variables or methods
    billString,
    colorIndicator
}
}


