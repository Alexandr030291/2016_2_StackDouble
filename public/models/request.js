(function () {
    class RequestModel {
        constructor(data){
            const _data =JSON.parse(data)
            this.code = _data.code;
            this.response  = _data.response;
        }

        get json(){
            return {
                _code: this.code,
                _response: this.response
            };
        }
    }

 //export
 window.RequestModel = RequestModel;
})();
