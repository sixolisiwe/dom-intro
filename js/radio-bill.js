
function FactoryradioBill() {
    var callTotal = 0;
    var smsTotal = 0;
    var total = 0;
    function radioBill(radioBillType){// 
    
        var radioBillItems = radioBillType
        // callTotal = 0.00; // reset billTotal
           
            if (radioBillItems === "call") {
                callTotal += 2.75;
            }
            else if (radioBillItems === "sms") {
                smsTotal += 0.75;
            }
    }
    
    function callReturns(){
    return callTotal.toFixed(2);
    }
    function smsReturns(){
        return smsTotal.toFixed(2);
    }
    
    function totalCost(){
      total = callTotal + smsTotal;
    
    return total.toFixed(2);
    }

    function colorIndicator(){

        if (totalCost() > 20.00 && totalCost() < 30.00){
            return "warning";
        }
        if (totalCost() > 30.00){
            return "danger";
        }
    
     }

    return {// expose variables or methods
        radioBill,
        smsReturns,
        callReturns,
        totalCost,
        colorIndicator
    }
}