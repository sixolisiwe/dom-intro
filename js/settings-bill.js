
function FactorySettingsBill() {
    var callTotal = 0;
    var smsTotal = 0;
    var total = 0;

    var criticalLevel = 0;
    var warninglevel = 0;
    var costOfsms = 0;
    var costOfcall =0;

    function setCallTotal(callVal){
       
            callTotal += callVal;
    }
       

    function setSmsTotal(smsVal){
        smsTotal += smsVal;
    }

    function getCallTotal(){
        return callTotal;
    }

    function getSmsTotal(){
        return smsTotal;
    }
    function setTotal(){
        total = callTotal + smsTotal;
        
    }
    function getTotal(){
        return total;
    }

   function getCritical(){
       
        return total >= criticalLevel;
   }
   function getCriticalValue(){
       
    return criticalLevel;
}

    function getWarning(){
        return total >= warninglevel;
    }
    function getWarningValue(){
        return warningLevel;
    }

    function changeColor(){
        // take total and levels
        if (total < warningLevel) {
            return 'black';
        } else if (total >= warningLevel && total < criticalLevel) {
            return 'warning';
        }
        else {
            return 'danger';
        }
    }

    function updateSettings(criticalVal, warningVal){
      criticalLevel = criticalVal;
      warningLevel = warningVal;
    }

    function makeCall(){
    callTotal += costOfcall;
    }

    function makeSms(){
    smsTotal += costOfsms;
    }
    function getTotalCost(){
      return callTotal + smsTotal;
    }

    function getTotalCallCost(){
     return callTotal;
    }

    function getTotalSmsCost(){
     return smsTotal;
    }
     
    function setCallCost(callCost){
        costOfcall = callCost;

    }
    function setSmsCost(smsCost){
      costOfsms = smsCost;
    }
    return{
        setCallTotal,
        setSmsTotal,
        setTotal,
        getCallTotal,
        getSmsTotal,
        getTotal,
        updateSettings,
        getCritical,
        criticalValue: getCriticalValue,
        warningValue: getWarningValue,
        getWarning,
        colorChanger: changeColor,
        makeCall,
        makeSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        setCallCost,
        setSmsCost
    }

}


