
// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElement = document.querySelectorAll(".billItemTypeWithSettings");
// get refences to all the settings fields
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettingsElement = document.querySelector(".totalSettings");
var callCostSettingElement = document.querySelector(".callCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
var callTotalSettingsElement = document.querySelector('.callTotalSettings');
var smsCostSettingElement = document.querySelector('.smsCostSetting');
//get a reference to the add button
var settingsBillAddBtnElement = document.querySelector(".settingsBillAddBtn");
//get a reference to the 'Update settings' button
var updateSettingsBtnElement = document.querySelector(".updateSettingsBtn");

// create a variables that will keep track of all the settings
var warningLevel = warningLevelSettingElement.value;
var criticalLevel = criticalLevelSettingElement.value ;

// create a variables that will keep track of all three totals.
var callTotal3 = 0;
var smsTotal3 = 0;
var total = (callTotal3 + smsTotal3).toFixed(2);
totalSettingsElement.innerHTML = total
        

function updateSetting(){

    warningLevel = Number(warningLevelSettingElement.value)
    warningLevelSettingElement.innerHTML = warningLevel.toFixed(2);
    criticalLevel = Number(criticalLevelSettingElement.value)
    criticalLevelSettingElement.innerHTML = criticalLevel.toFixed(2);
    
}


function addBtnClicked(){
   
    for (var i = 0; i<billItemTypeWithSettingsElement.length; i++){
        var elem = billItemTypeWithSettingsElement[i];
        if (elem.checked) {
            // update the correct total
            if (elem.value === "call"){
                callTotal3 += Number(callCostSettingElement.value);
                callTotalSettingsElement.innerHTML = callTotal3.toFixed(2);
            }
         
            else if (elem.value === "sms"){
                smsTotal3 += Number(smsCostSettingElement.value);
                smsTotalSettingsElement.innerHTML = smsTotal3.toFixed(2);   
            }
            var total = (callTotal3 + smsTotal3).toFixed(2);
            totalSettingsElement.innerHTML = total
        
        }
    } 

    if(total >= criticalLevel) {
        settingsBillAddBtnElement.disabled = true
    }

    if (total >= criticalLevel){
        totalSettingsElement.classList.remove("warning");
       totalSettingsElement.classList.add("danger");
       
      }else if (total >= warningLevel){
        totalSettingsElement.classList.remove("danger");
        totalSettingsElement.classList.add("warning");  
    }else{
        totalSettingsElement.classList.remove("warning");
        totalSettingsElement.classList.remove("danger");  
    }
    
}



    //add an event listener for when the 'Update settings' button is pressed
settingsBillAddBtnElement.addEventListener('click', addBtnClicked);
//add an event listener for when the add button is pressed
updateSettingsBtnElement.addEventListener('click', updateSetting);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
   
    
   