'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
  this._arg = {};
};


Stack.prototype.arg = function arg(){
  for (let i = 0; i < arguments.length; i++) {
    this._arg[i]=arguments[i];
}
return this._arg;
};


Stack.prototype.push = function push(value) {
  let size= this._size;
    let target=size ;
    this._storage[target]=value;
    this._size++;
    // increment size counter
    // add value to storage

      return Stack;
    };



Stack.prototype.pop = function pop() {
  let size = this._size;
  let target = size - 1;
  let deleted;
  if (size) {
    deleted = this._storage[target];
    delete this._storage[target];
    this._size--;
  }


  // remove newest value from storage and decrement size counter, only if data
  // exists
  return deleted;

};

module.exports = Stack;
