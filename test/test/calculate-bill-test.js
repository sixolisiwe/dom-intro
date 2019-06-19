describe('calculateBill', function () {
    let calculateBill = FactoryCalculateBill();
    it('should return zero point seventy five if bill type equals to sms', function () {
        var billType = "sms"
        assert.deepEqual(calculateBill.billString(billType), 0.75);

    });

    it('should return two point seventy five if bill type equals to call', function () {
        var billType = "call"
        assert.deepEqual(calculateBill.billString(billType), 2.75);

});
it('should return zero if bill type is an empty string', function () {
    var billType = ""
    assert.deepEqual(calculateBill.billString(billType), 0.00);
});
it('should return the total amount if bill type is call and sms', function () {
    var billType = "call, sms"
    assert.deepEqual(calculateBill.billString(billType), 3.5);
});
it('should return the total amount in orange if  bill type exceeds twenty rands ', function () {
    var billType = "call, sms,call, sms,call, sms, call, sms, call,sms, call, sms "
    var totalBill ="billType > 20.00 && billType < 30.00" 
    assert.deepEqual(calculateBill.billString(billType), 21.00);
});
it('should return the total amount in red if  bill type exceeds thirty rands ', function () {
    var billType = "call, sms,call, sms,call, sms, call, sms, call,sms, call, sms , call,sms, call, sms, call,sms, call, "
    var totalBill ="billType > 30.00" 
    assert.deepEqual(calculateBill.billString(billType), 34.25);
});
});