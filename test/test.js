const api = require('./output/etshp/etshpClient')
describe('测试', function() {
    it('测试1', () => {
        console.log(api.$http);

        api.Address.getAddress(1);
        // api.Address.createAddress({
        //     "Phone": "string",
        //     "Receiver": "string",
        //     "Province": "string",
        //     "City": "string",
        //     "District": "string",
        //     "Street": "string",
        //     "Detail": "string",
        //     "Description": "string",
        //     "CreateDate": "2019-08-20T10:09:19.220Z",
        //     "CreatorId": 0,
        //     "PrevioVersionId": 0,
        //     "IsDefault": true,
        //     "Id": 0
        // });
    });


});
