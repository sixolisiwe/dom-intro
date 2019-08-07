// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

var templateSource2 = document.querySelector(".userTemplate").innerHTML
var userTemplate2 = Handlebars.compile(templateSource2);
var myData2 = document.querySelector(".userData")

let BilltextType = FactoryTextBill();

textBillTotal()
function textBillTotal(){
var color = BilltextType.colorIndicator();
 BilltextType.textBill(billTypeTextElement.value);

 var userDataHTML2 = userTemplate2({
    call :"R" + BilltextType.callReturn(),
    sms : "R" + BilltextType.smsReturn(),
    total : "R" + BilltextType.total(),

});
// console.log(userDataHTML);
myData2.innerHTML = userDataHTML2;

Handlebars.registerHelper("warn" ,function(){
    if (color === "warning"){
        return true;
    }

});

Handlebars.registerHelper("danger" ,function(){
    if (color === "danger"){
        return true;
    }

});
    
}
addToBillBtnElement.addEventListener('click', textBillTotal);
