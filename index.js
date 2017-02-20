function sealed(constructor) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function enumerable(value) {
  return function (target, propertyKey, descriptor) {
    descriptor.enumerable = value;
    descriptor.configurable = value;
    descriptor.writable = value;
  };
}

function deprecated() {
  return function (target, propertyKey, descriptor) {
    console.log(target.greet);
    target.greet = function () {
      console.warn(`.${propertyKey} this function has been dd, please don\'t use this any more`);
    };
    return target;
  }
}

@sealed
class Greeter {
  constructor(message) {
    this.greeting = message;
  }

  @enumerable(false)
  @deprecated(true)
  greet() {
    return "Hello, " + this.greeting;
  }
}

let d = new Greeter();

// console.dir(d);
// console.dir(d.greet);
console.log('print', d.greet('axe'));