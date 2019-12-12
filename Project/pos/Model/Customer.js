function Customer(id, name, address, contact) {
    var _id=id;
    var _name=name;
    var _address=address;
    var _contact=contact;

    this.getCusId=function () {
        return _id;
    }
    this.getCusName=function () {
        return _name;
    }
    this.getCusAddress=function () {
        return _address;
    }
    this.getCusContact=function () {
        return _contact;
    }
    this.setCusId=function (id) {
        this._id=id;
    }
    this.setCusName=function (name) {
        this._name=name;
    }
    this.setCusAddress=function (address) {
        this._address=address;
    }
    this.setCusContact=function (contact) {
        this._contact=contact;
    }
}