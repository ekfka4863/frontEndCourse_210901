// b_02_js_data_type.js

// cf. 형태입을 파악하는 기능 -> typeof 값이나 변수명 / typeof(literal) 
// cf. 숫자로 보이는 문자 ('1')을 강제로 숫자형 타입으로 변환하는 함수들이 있다. 
//      -> parseInt(변수), parseFloat(변수), Number(변수) 

'use strict';      // 엄격한 모드


// 데이터 타입: 숫자(number)
var num = 7;
var num2 = num;
    num = 10;
    // num2 = num;

console.log(num, typeof(num));
console.log(num2, typeof(num2));



// 데이터 타입: 문자(string)
var str = '';
    str = '123';
var str2 = str;
    str = '문자';

console.log(str, typeof(str));
console.log(str2, typeof(str2));

var str3 = str2 + 567;  // 문자 + 숫자 -> 문자의 나열 -> '123' + 567 -> '123567'
console.log(str3, typeof(str2));

var str4 = parseInt(str2) + 567;
console.log(str4, typeof(str4));

var str5 = Number(str2) + 567;
console.log(str5, typeof(str5));
// 단, Number(100px) => NaN;  BUT!!  parseInt(100px) => 100; 
// 즉, parseInt();는 첫글자부터 시작해서 정수 숫자로 변환가능한 것까지만 숫자화 처리 (나머지는 버림)
// parseFloat();는 첫글자부터 시작해서 실수 숫자모두 숫자로 변환가능한 부분까지 숫자로 처리 (나머지는 버림)
// Number();는 문자든 숫자든 관계없이 모두 숫자로 변환처리 

console.log(typeof('50.4%'));        // string
console.log(parseInt('50.4%'));      // 50 
console.log(parseFloat('50.7%'));    // 50.7 
console.log(Number('50.7%'));        // NaN = Not a Number 가 값임. 하지만 
console.log(parseInt('auto 50.4%'));      // NaN -> 첫글자부터 숫자로 못바꾸니까 타입은 비록 강제로 number로 바꿀지언정, 그 값은 NaN
console.log(parseFloat('auto 50.7%'));    // NaN
console.log(Number('auto 50.7%'));        // NaN

var nan = NaN;
console.log(nan, typeof(nan));       // NaN 'number' -> 왜 근데 타입은 숫자형? 왜냐면 일단 강제로 숫자를 만들었으니까 숫자는 맞다고 해줄게.. 근데 그게 뭔지는 몰라!


// Math 함수 
var n = 5.54;
console.log('올림처리', Math.ceil(n));
console.log('내림처리', Math.floor(n));
console.log('반올림처리', Math.round(n));
console.log('0~1까지의 난수', Math.random(n));
console.log('0~1까지의 난수', Math.random(n) * 10);
console.log('0~1까지의 난수', Math.random(n) * 100);
// 랜덤으로 로또기기 만들때...
console.log('0~1까지의 난수', parseInt(Math.random(n) * 64));
console.log('절대값', Math.abs(n));
// cf. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math



// 데이터 타입: 논리(boolean)
// 논리형은 결과를 true/false로 확인하여 처리하지만, 그 결과를 확인하는 검증이 매우 많다.
// ! -> 반대, === -> 형타입까지 일치하는지 비교/판단

var bool = false;
    bool = !false;                 // true
console.log(bool, typeof(bool));   // true 'boolean'

console.log('비교', 1 == '1');     // 데이터 타입 고려 X
console.log('비교', 1 === '1');    // 데이터 타입도 고려 O

console.log(n);     // 존재하는 값에 !를 붙이면 값이 없다는 의미로 -> false가 되지만, 하지만 실제로 이렇게 사용하는 경우는 "값이 있느냐 없느냐를 판단할 때"이다. 
                    // 그래서 ... 이렇데 "판단용"으로 쓰면 !을 한번 더... 
console.log(!!n);   // true -> 값이 있다 
console.log(!!0);    // false -> 값이 없다  
console.log(!!-7);   // true -> 값이 있다 


// 데이터 타입: undefined
var und;
console.log(und, typeof(und));    // undefined 'undefined'

und = 'undefined';               
console.log(und, typeof(und));    // undefined string

und = undefined;
console.log(und, typeof(und));    // undefined 'undefined'

und = undefined + 'result!';
console.log(und, typeof(und));    // undefinedresult! string -> 미정의된 값인 undefined와 문자를 합치면 string이 된다 .



// 데이터 타입: null
var nul;
console.log(nul, typeof(nul));    // undefined 'undefined'

nul = null;
console.log(nul, typeof(nul));    // null 'object' -> 버그!! 

// null과 undefined는... null은 값이 없다는 의미로, undefined는 값이 아직 미정의 되었다는 의미로 특수한 형타입으로 분류되던 자료구조였으나, 
// 현재는 단순히 값을 (의도적으로) 누락시킨다라는 의미로만 존재 한다

console.clear();

// -------------------------------------------------------
// object/function 형타입은 단순 한가지의 개념을 가지고 있는 것이 아니고, 여러 형타입을 담은 복합성의 특징이다
// 그렇기에, object/function 형타입으로 사용할 변수처리는 참조변수 개념으로 처리 
// 일반 변수 = 단순 값을 가지는 변수 // 참조 변수 = 값을 가지는 변수가 아니라 어느 공간 (주소)를 공유하는 변수 

// e.g. 
// 일반변수 - 사과 (값)     -> 1일 1개인 경우는 내가 직접 들고있으면 되지만, 
// 참조변수 - 사과 창고 (값을 담는 공간) -> 양이 늘어나면 별도의 공간에 담아야 하는 것과 같이, 해당 공간을 공유한다. 

// + js는 순서를 첫번째가 0부터 처리한다 -> cf. 배열의 인덱스는 첫번째가 [0]으로 시작한다 

// 데이터 타입: object
// 1. array -----------------------------------------------
var arr = ['키보드', '마우스',  '모니터', '노트북', '웹캠'];

console.log(arr.constructor === Array);     // true
console.log(arr, typeof(arr));
console.log(arr[3]);
arr[5] = '마이크';
console.log(arr[5], arr);
console.log(arr[5], arr[9]);   // 마이크 undefined

arr[9] = '웹캠';
console.log(arr[5], arr[6]);  
console.log(arr[9], arr);   

// var arr2 = arr;
// console.log(arr2);            // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '웹캠']
// arr[9] = '빼빼로'; 
// console.log(arr);             // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '빼빼로']
// // 참조 공유
// console.log(arr2);             // ['키보드', '마우스', '모니터', '노트북', '웹캠', '마이크', 비어 있음 × 3, '뺴뺴로']

console.clear();

// var arT = Array();
var arT = new Array();         // 가방이 필요하면 기본 형태가 있는 원본 가방을 하나더 만들어 진걸 구매하여 가방을 하나 얻은 것. 단, new를 안사용하면 원본 그대로를 가져온 격이 되는 것.
console.log(arT);             // []
arT[0] = '물';
arT[2] = '약';
console.log(arT);
// new Array() 사용하여 배열을 생성하는 방식은 권장하지 않는다 -> 바로 [] 작성 후 바로 수행 

var arA = [];
arA[0] = '물';
arA[1] = '약';
console.log(arA);

arA.push('커피');
arA.push('쥬스');
arA.push('밥');
console.log(arA);

arA.unshift(5);
arA.unshift(0);
console.log(arA);

arA.pop();
console.log(arA);
arA.pop();
console.log(arA);
arA.shift();
arA.shift();
console.log(arA);
// cf. http://blog.302chanwoo.com/2017/08/javascript-array-method/

console.clear();

// 데이터 타입: object
// 2. object -----------------------------------------------
var obj = {};
// var objT = new Object();

console.log(obj, typeof(obj));
console.log(obj.constructor === Object);    // .constructor -> ?? -> cf. https://luvstudy.tistory.com/20

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = 'pixel';
console.log(obj);
console.log(obj.google);
// obj.농심 = '너구리';
obj['농심'] = '너구리';
// obj.오뚜기 = '진라면';
obj['오뚜기'] = '진라면';
obj['한국야쿠르트'] = '건국우유';     // 유효하지 않은 프로퍼티 키나, 네이밍 컨벤션에 부합하지 않는 방식으로 프로퍼티 키를 작성할 경우 대괄호 [] 와 따옴표 ''로 감싸서 프로퍼티 키를 적어준다.
// cf. 왜 그럼 이렇게 .표기법과 [] 표기법, 2 가지가 있나요? 여기서 배열도 객체, 객체도 객체라고 하는 이유가 있음!
// e.g. 
var obj2 = {};
obj2[0] = '마이크';
obj2[1] = 'pen';
obj2[2] = '텀블러';
console.log(obj2);
// 배열과 굉장히 유사! 


console.clear();

// 데이터 타입: object
// 3. function -----------------------------------------------
var fn = function(a) {
  // a는 매개변수(parameter), 인수/인자(argument)  
  // return 문은 마지막에 작성하는 것으로, 어쨋든 간에 최종 결론은? 
  return 1 + a;
};

console.log(fn);           // ƒ (a) {return 1 + a;}
console.log(fn(5));        // 6

var fn2 = function(a, b) {
  var c = a + b;
  // return false;         
  return c;                
}

console.log(fn2(1, 6)); // 7     

// 함수의 사용 이유: 반복되는 코드, 기능을 들어가는 값만 바꿔서 재사용 하기 위해 ...

console.log(fn2(4, 50));   // 54
console.log(fn2(4, 80));   // 84
console.log(fn2(44, 80));  // 124
console.log(fn2(41, 4));   // 45



// 함수의 기본형태 : function() {}  
// 이름을 갖고있는 함수 -> 기명함수 -> 기명함수로 함수를 선언하는 방법 -> "함수 선언식" -> 기본형태: function 이름() {}
// 이름을 부여하지 않은 함수 -> 익명함수 -> 익명함수로 함수를 선언하는 방법 -> "함수 표현식" -> 이름이 없기에 대신 이름을 할당할 수 있는 무언가를 선언(변수선언): var 변수명 = function() {}
// 근데 왜 이렇게 2가지의 방법? -> 함수 호이스팅 때문에! 

// e.g.

// 함수 선언식 -> 미리 처리됨
console.log(fn3());       // test

function fn3() {
  return 'test';
}
console.log(fn3());       // test


// 함수 표현식 -> 권장! 함수 호이스팅으로 인해, 함수선언식처럼 미리 함수가 호출 되기도 전에, 기능이 구현 되기도 전에 값으로 평가되어 지는 것을 방지... -> 차라리 함수 선언식보다는 함수 표현식을 써라! 
// console.log(fn4());         // Uncaught TypeError: fn4 is not a function
console.log(fn4);         // undefined

var fn4 = function () {
  return 'test2';
}

console.log(fn4());       // test

console.clear();

// ------------------------------------------------------------------
var x = 'hero';                 // 광범위한 범위를 가지고 있다 -> 전역 변수 

function ckFn() {
  var y = 'xido';               // y의 사용 범위는 function ckFn() {} 내부에서만 동작 가능하기에 -> 지역 변수
  console.log(x, y);
  return y;
}

// 1. console.log(x);      // 콘솔의 결과: hero
// 2. ckFn();              // 콘솔의 결과: hero xido, 반환(return)된값: xido
// 3. console.log(y);      // 콘솔의 결과: Uncaught ReferenceError: y is not defined

// 4.
var rel = ckFn();
console.log(rel);       // xido


// e.g. 
function ckFn2() {
  var x = 'who?';
  // x = 'who?';  // who?   -> 함수 내부에서 var 선언을 하면 새로운 지역변수가 생성되어 위의 전역변수 x와는 다른 변수가 생성된 것. 하지만 var 없이 x를 적고 그에 새로운 값을 주면, 재할당 하곘단 의미! 

  return x;       // x에 대한 값을 내보낸거지 변수 자체를 내보낸 것이 아니기 때문에, 변수를 밖에서 console.log(x); 해도 출력 X!!! 
}

console.log(x);   // hero
ckFn2();
console.log(x);   // hero

