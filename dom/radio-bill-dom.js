// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var myData = document.querySelector('.usersData')
var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

let billForRadio = FactoryradioBill();

window.addEventListener("load", function () {
    console.log('here')
radioBillTotal();
}); 

function radioBillTotal() {    
  
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        billForRadio.radioBill(checkedRadioBtn.value);
        displayOutput()
        
    }
    else{
        displayOutput()
    }
    }



    function displayOutput(){

        var color= billForRadio.colorIndicator();
        var userDataHTML = userTemplate({
            call: "R" + billForRadio.callReturns(),
            sms: "R" + billForRadio.smsReturns(),
            total: "R" + billForRadio.totalCost(),
            color
        });
        myData.innerHTML = userDataHTML;
    }
    



radioBillAddBtnElement.addEventListener('click', radioBillTotal);

