function Item(code, description, unitprice, qty) {
    var _code=code;
    var _description=description;
    var _unitprice=unitprice;
    var _qty=qty;

    this.getCode=function () {
        return _code;
    }
    this.getDescription=function () {
        return _description;
    }
    this.getUnitprice=function () {
        return _unitprice;
    }
    this.getQty=function () {
        return _qty;
    }
    this.setCode=function (code) {
        this._code=code;
    }
    this.setDesdription=function (description) {
        this._description=description;
    }
    this.setUnitprice=function (unitprice) {
        this._unitpric=unitprice;
    }
    this.setQty=function (qty) {
        this._qty=qty;
    }


}