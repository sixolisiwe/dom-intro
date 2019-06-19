
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
var criticalLevel = criticalLevelSettingElement.value;

// create a variables that will keep track of all three totals.


let settingsBill = FactorySettingsBill();

function updateSetting() {

    warningLevel = Number(warningLevelSettingElement.value)
    criticalLevel = Number(criticalLevelSettingElement.value)

    settingsBill.updateSettings(criticalLevel, warningLevel);

    settingsBill.setTotal();
  
    totalSettingsElement.classList.remove('black');
    totalSettingsElement.classList.remove('warning');
    totalSettingsElement.classList.remove('danger');
    totalSettingsElement.classList.add(settingsBill.colorChanger());
}


function addBtnClicked() {

    var totalSettingsElement = document.querySelector(".totalSettings");
    var callCostVal = Number(callCostSettingElement.value);
    var smsCostVal = Number(smsCostSettingElement.value);

    for (var i = 0; i < billItemTypeWithSettingsElement.length; i++) {
        var elem = billItemTypeWithSettingsElement[i];
        if (elem.checked) {
            // update the correct total
            if (elem.value === "call") {
                var check = settingsBill.getTotal() + callCostVal;
                if (check.toFixed(2) <= settingsBill.criticalValue()) {
                    settingsBill.setCallTotal(callCostVal)
                }
                var callTotal = settingsBill.getCallTotal();
                callTotalSettingsElement.innerHTML = callTotal.toFixed(2);
            }
            
            else if (elem.value === "sms") {
                var check = settingsBill.getTotal() + smsCostVal;
                if (check.toFixed(2) <= settingsBill.criticalValue()) {
                    settingsBill.setSmsTotal(smsCostVal);
                }
                var smsTotal = settingsBill.getSmsTotal();
                smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
            }
            
            settingsBill.setTotal() 
            var total = settingsBill.getTotal()
            totalSettingsElement.innerHTML = total.toFixed(2);
            totalSettingsElement.classList.remove('black');
            totalSettingsElement.classList.remove('warning');
            totalSettingsElement.classList.remove('danger');
            totalSettingsElement.classList.add(settingsBill.colorChanger());

        }
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


