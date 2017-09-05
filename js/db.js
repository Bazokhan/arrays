let originalArray = [7,1,2,5,4,5,6,3];
let db = {
    'a': [],
    'splice'     : function() {splicer   (this.a, 1, 3, "newItem")},    
    'push'       : function() {pusher    (this.a, "newItem")},
    'unshift'    : function() {unshifter (this.a, "newItem")},
    'pop'        : function() {popper    (this.a)},
    'shift'      : function() {shifter   (this.a)},
    'sort'       : function() {sorter    (this.a, (el1, el2)=> el1-el2)},
    'reverse'    : function() {reverser  (this.a)},
    'slice'      : function() {slicer    (this.a, 1, 5)},    
    'join'       : function() {joiner    (this.a)},
    'toString'   : function() {stringer  (this.a)},
    'map'        : function() {mapper    (this.a, el=>el*el)},
    'reduce'     : function() {reducer   (this.a, (acc,cur)=>acc+cur)},
    'reduceRight': function() {rReducer  (this.a, (acc,cur)=>acc+cur)},
    'filter'     : function() {filterr   (this.a, el=>el>3)},
    'find'       : function() {finder    (this.a, el=>el>4)},        
    'every'      : function() {everyr    (this.a, el=>el>2)}
}
// Mutating methods
// function splicer    (a, s, c, i) {!i ? logger( a.splice(s, c), a, !0) : logger( a.splice(s, c, i), a, !0);}
function splicer    (a, s, c, i) {logger( a.splice(s, c, i), a, !0);}
function pusher     (a, i)       {logger( a.push(i),         a, !0);}
function unshifter  (a, i)       {logger( a.unshift(i),      a, !0);}
function popper     (a)          {logger( a.pop(),           a, !0);}
function shifter    (a)          {logger( a.shift(),         a, !0);}
function sorter     (a, f)       {logger( a.sort(f),         a, !0);}
function reverser   (a)          {logger( a.reverse(),       a, !0);}
// Accessor (Non-mutating) methods
function slicer     (a, s, e)    {logger( a.slice(s, e),     a, !1);}
function joiner     (a)          {logger( a.join(''),        a, !1);}
function stringer   (a)          {logger( a.toString(),      a, !1);}
// Iteration (Non-mutating) methods
function mapper     (a, f)       {logger( a.map(f),          a, !1);}
function reducer    (a, f)       {logger( a.reduce(f),       a, !1);}
function rReducer   (a, f)       {logger( a.reduceRight(f),  a, !1);}
function filterr    (a, f)       {logger( a.filter(f),       a, !1);}
function finder     (a, f)       {logger( a.find(f),         a, !1);}
function everyr     (a, f)       {logger( a.every(f),        a, !1);}


let buttons = [
    'splice', 'push', 'unshift', 'pop', 'shift', 'sort', 'reverse', 'slice',
    'join', 'toString', 'map', 'reduce', 'reduceRight', 'filter', 'find', 'every'
]

let briefDb = {
    'splice'     : 'Adds and/or removes elements from an array.',    
    'push'       : 'Adds one or more elements to the end of an array and returns the new length of the array.',
    'unshift'    : 'Adds one or more elements to the front of an array and returns the new length of the array.',
    'pop'        : 'Removes the last element from an array and returns that element.',
    'shift'      : 'Removes the first element from an array and returns that element.',
    'sort'       : 'Sorts the elements of an array in place and returns the array.',
    'reverse'    : 'Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.',
    'slice'      : 'Extracts a section of an array and returns a new array.',    
    'join'       : 'Joins all elements of an array into a string.',
    'toString'   : 'Returns a string representing the array and its elements. ',
    'map'        : 'Creates a new array with the results of calling a provided function on every element in this array.',
    'reduce'     : 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
    'reduceRight': 'Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.',
    'filter'     : 'Creates a new array with all of the elements of this array for which the provided filtering function returns true.',
    'find'       : 'Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.',        
    'every'      : 'Returns true if every element in this array satisfies the provided testing function.'
}

let syntaxDb = {
    'splice'     : 'Adds and/or removes elements from an array.',    
    'push'       : 'Adds one or more elements to the end of an array and returns the new length of the array.',
    'unshift'    : 'Adds one or more elements to the front of an array and returns the new length of the array.',
    'pop'        : 'Removes the last element from an array and returns that element.',
    'shift'      : 'Removes the first element from an array and returns that element.',
    'sort'       : 'Sorts the elements of an array in place and returns the array.',
    'reverse'    : 'Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.',
    'slice'      : 'array.slice(begin ?, end ?)',    
    'join'       : 'array.join(separator ?)',
    'toString'   : 'array.toString()',
    'map'        : 'Creates a new array with the results of calling a provided function on every element in this array.',
    'reduce'     : 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
    'reduceRight': 'Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.',
    'filter'     : 'array.filter(function(element) {//condition}) ===> returns a new array with the elements that pass the condition.',
    'find'       : 'array.find(function(element) {//condition}) ===>  returns the first element that satisfies the condition',        
    'every'      : 'array.every(function(element) {//condition}) ===> returns true if every array element satisfies the condition; otherwise returns false.)'
}