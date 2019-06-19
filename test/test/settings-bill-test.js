describe('settingsBill', function () {
    let settingsBill = FactorySettingsBill();

    it('should check if the sms input box is empty', function () {
        var total = settingsBill.getTotal();
        settingsBill.getTotal('smsTotal');
        assert.deepEqual(settingsBill.getTotal(total), 0);
    });

    it('should check if the call input box is empty', function () {
        var total = settingsBill.getTotal();
        settingsBill.getTotal('callTotal');
        assert.deepEqual(settingsBill.getTotal(total), 0);
    });

    it('should check if the warningLevel input box is empty', function () {
        var totalSetting = settingsBill.getCritical();
        settingsBill.getCritical('criticalLevel');
        assert.deepEqual(settingsBill.getCritical(totalSetting), true);
    });

    it('should check if the criticalLevel input box is empty', function () {
        var totalSetting = settingsBill.getWarning();
        settingsBill.getWarning('warningLevel');
        assert.deepEqual(settingsBill.getWarning(totalSetting), true);
    });

    it('should count how many calls have been selected', function(){
    settingsBill.setCallTotal(45);
    settingsBill.setCallTotal(45);
    assert.equal(settingsBill.getCallTotal(), 90.00);
   
        
    });
    it('should count how many calls have been selected', function(){
        settingsBill.setCallTotal(45);
        settingsBill.setCallTotal(45);
        settingsBill.setSmsTotal(20);
        assert.equal(settingsBill.getCallTotal(), 180.00);
});   
it('should count how many sms have been selected', function(){
    settingsBill.setCallTotal(45);
    settingsBill.setCallTotal(45);
    settingsBill.setSmsTotal(20);
    settingsBill.setSmsTotal(20);
    assert.equal(settingsBill.getSmsTotal(), 60.00);
});
});
