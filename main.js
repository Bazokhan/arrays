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