/**https://www.kajanm.com/blog/determining-the-value-of-this-in-js/
 * https://dmitripavlutin.com/javascript-this-algorithm/
 * 
 * If func is a regular function, then

    If invocationType is as a constructor, then

    let newObject be the newly constructed object newObject = new func()
    return newObject
    Else if invocationType is indirectly, then

    let thisArg be the argument of func.call(thisArg) or func.apply(thisArg)
    return thisArg
    Else if invocationType is as a method, then

    let object be the object upon which func is invoked on object.func()
    return object
    Else if invocationType is regular, then

    If strict mode is enabled, then return undefined
    Else return globalObject
    Else if func is an arrow function, then

    If func is defined in the outermost scope, then return globalObject
    Else
    let outerFunc be the outer function of func
    return ThisValueOfFunction(outerFunc, outerInvocationType)
    Else if func is a bound function of an originFunc function, then

    let thisArg be the argument of func = originFunc.bind(thisArg)
    return thisArg
    Else if func is a constructor() method inside of a class SomeClass, then

    let instance be the instance of the class instance = new SomeClass()
    return instance
 */