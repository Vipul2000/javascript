/*
Abstract Equality Comparison

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is the same as Type(y), then
Return the result of performing Strict Equality Comparison x === y.
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
Return false.
*/

/*
Strict Equality Comparison
The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is different from Type(y), return false.
If Type(x) is Number, then
If x is NaN, return false.
If y is NaN, return false.
If x is the same Number value as y, return true.
If x is +0 and y is -0, return true.
If x is -0 and y is +0, return true.
Return false.
Return SameValueNonNumber(x, y).
*/

/*
SameValueNonNumber ( x, y )
The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, produces true or false. Such a comparison is performed as follows:

Assert: Type(x) is not Number.
Assert: Type(x) is the same as Type(y).
If Type(x) is Undefined, return true.
If Type(x) is Null, return true.
If Type(x) is String, then
If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
If Type(x) is Boolean, then
If x and y are both true or both false, return true; otherwise, return false.
If Type(x) is Symbol, then
If x and y are both the same Symbol value, return true; otherwise, return false.
If x and y are the same Object value, return true. Otherwise, return false.
*/