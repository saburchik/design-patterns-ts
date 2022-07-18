var Singleton = /** @class */ (function () {
    function Singleton(d) {
        this.data = d;
    }
    Singleton.getInstance = function (d) {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(d);
        }
        return Singleton._instance;
    };
    return Singleton;
}());
var theOne = Singleton.getInstance('Nuts');
console.log(theOne.data);
var theTwo = Singleton.getInstance('Bells');
console.log(theTwo.data);
console.log(typeof theOne, typeof theTwo);
console.log(theOne === theTwo);
// const theThree = new Singleton('Message') // There is an error;
