function FactoryTextBill() { //methods
    var callTotal = 0;// global var
    var smsTotal = 0;
    var totalCost = 0;
    function textBill(textBillType) {

        var textBillItems = textBillType
        // callTotal = 0.00; // reset billTotal

        if (textBillItems === "call") {
            callTotal += 2.75;
        }
        else if (textBillItems === "sms") {
            smsTotal += 0.75;
        }
    }

    function callReturn() {
        return callTotal.toFixed(2);
    }
    function smsReturn() {
        return smsTotal.toFixed(2);
    }

    function total() {
        totalCost = callTotal + smsTotal;

        return totalCost.toFixed(2);
    }

    function colorIndicator() {

        if (total() > 20.00 && total() < 30.00) {
            return "warning";
        }
        if (total() > 30.00) {
            return "danger";
        }

    }

    return {// expose variables or methods
        textBill,
        colorIndicator,
        smsReturn,
        callReturn,
        total
    }
}

