---
date: 2021-11-10-Wednesday
---

# TIL
- ๐ ์ค๋ ๋ฐฐ์ด ๋ด์ฉ โ๏ธ : 
  - [x] `switch ์กฐ๊ฑด๋ฌธ` 
    - `์ฌ๊ท ํจ์(recursive function)`: ํจ์ ๋ด์์ ์๊ธฐ ์์ฌ์ ํจ์๋ฅผ ํธ์ถํ๋ ๊ฒ
  <!-- - [x] `if ์กฐ๊ฑด๋ฌธ`  -->
  - [x] `์์ ๋ณต์ฌ` vs `๊น์ ๋ณต์ฌ` 
  <!-- - [x] `SCSS` ๊ธฐ์ด ๋ฌธ๋ฒ 
    - `@mixin`, `@include`
    - `@`
    - `@` -->

<br />

### ์กฐ๊ฑด๋ฌธ 

<br />

> switch ์กฐ๊ฑด๋ฌธ (๋คํญ ์กฐ๊ฑด๋ฌธ)

- `switch ์กฐ๊ฑด๋ฌธ` ๊ธฐ๋ณธ ๋ฌธ๋ฒ:      
```js
  // switch ์กฐ๊ฑด๋ฌธ ๊ธฐ๋ณธ ํํ 
    
  switch (๋งค๊ฐ๋ณ์) {
    case ์กฐ๊ฑด๊ฐ1: 
      ์กฐ๊ฑด๊ฐ๊ณผ ๋งค๊ฐ๋ณ์๊ฐ ์ผ์นํ๋ฉด ์ํํ๋ statement 1;
      break;
    case ์กฐ๊ฑด๊ฐ2: 
      ์กฐ๊ฑด๊ฐ๊ณผ ๋งค๊ฐ๋ณ์๊ฐ ์ผ์นํ๋ฉด ์ํํ๋ statement 2;
      break;
    case ์กฐ๊ฑด๊ฐ3: 
      ์กฐ๊ฑด๊ฐ๊ณผ ๋งค๊ฐ๋ณ์๊ฐ ์ผ์นํ๋ฉด ์ํํ๋ statement 3;
      break;
      ...
    default: 
      ์ ์กฐ๊ฑด๋ค์ด ์ผ์นํ์ง ์์ผ๋ฉด ์ํํ๋ statement;
  }
```     
- e.g.        
```js      
  // e.g.
  var num = 0;
  var data = [];

  switch(num) {
    case 1:
      data.push('ํ๊ธ ์๊ธ');
      break;
    case 2:
      data.push('ํ๊ธ ํ์ธ');
      break;
    case 3:
      data.push('ํ๊ณ์ข ์ก๊ธ');
      break;
    case 4:
      data.push('ํต์ฅ ์ญ์ ');
      break;
    default:
      data.push('๋์ถ(์ฐ 60%)');
  }
  console.log(data);


  // e.g. - ์์ฉ 
  var num = 0;
  var data = [];

  var atmFn = function(num) {
    switch(num) {
      case 1:
        data.push('ํ๊ธ ์๊ธ');
        atmFn(2);    // cf. ์์ ์ ๋ค์ ํธ์ถํ๋ ํจ์ -> ์ฌ๊ทํจ์ (์์ฑํ ํจ์๋ฅผ ๋ค์ ์ฌํธ์ถํ๋ ํํ)
        break;
      case 2:
        data.push('ํ๊ธ ํ์ธ');
        break;
      case 3:
        data.push('ํ๊ณ์ข ์ก๊ธ');
        break;
      case 4:
        data.push('ํต์ฅ ์ญ์ ');
        break;
      default:
        data.push('๋์ถ(์ฐ 60%)');
    }
  };

  atmFn(1);
  console.log(data);    // [ 'ํ๊ธ ์๊ธ', 'ํ๊ธ ํ์ธ' ] -> ๊ตณ์ด ๊ฐ์ด ํ ํ์ ํ๊ณ  ์ถ์ด์ ...
```       
- ์ ์ ์ฌํญ:         
  - `break;`๋ฌธ์ด ์๋ค๋ฉด ...       
  ```js
    // default ๋ฌธ์ด ์๋ ๊ฒฝ์ฐ 
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
        answer = "a";
        break;
      case 2:
        answer = "b";
        break;
      case 3:
        answer = "c";
        break;
      case 4:
        answer = "d";
        break;
      }
      
      return answer;
    };

    testFn(5);      // ""


    // -----------------------
    // default ๋ฌธ์ด ์๋ ๊ฒฝ์ฐ 
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
        answer = "a";
        break;
      case 2:
        answer = "b";
        break;
      case 3:
        answer = "c";
        break;
      case 4:
        answer = "d";
        break;
      default:
        answer = "no answer exists!"
    }
    
      return answer;
    };

    testFn(5);      // "no answer exists!"
  ```       
  - ์ฌ๋ฌ ๊ฐ์ ์กฐ๊ฑด์ด ๊ฐ์ ๊ฐ์ ๊ณต์ ํ๋ ๊ฒฝ์ฐ 
  ```js
    var testFn = function(value) {
    var answer = ""; 

    switch(value) {
      case 1:
      case 2:
      case 3:
        answer = "1 or 2 or 3";
        break;
      case 4:
      case 5:
      case 6:
        answer = "4 or 5 or 6";
        break;
      case 7:
      case 8:
      case 9:      
        answer = "7 or 8 or 9";
        break;
      default:
        answer = "no answer exists!"
    }
    
      return answer;
    };

    testFn(5);      // "4 or 5 or 6"

    // ๐ TIP!
    // ์ต์์ด ๋ง์ ๊ฒฝ์ฐ, if/else if๋ฌธ ๋ณด๋ค switch๋ฌธ์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ ๊ฐํธํ  ์ ์๋ค.
  ```       
- ์ฌํ ํ์ต: 
    - ์๋์ ์์๋ฅผ ํตํด ๋ฐฐ์ธ ์ ์๋ ๊ฐ๋: 
      - `์ฌ๊ทํจ์`
      - `ํด๋ก์ `

    - e.g.     
      <details>
        <summary>CLICK ME TO SEE REAAAAAALLY COMPLICATED EXAMPLE!</summary>
        
        ```js
          // step - 1 & 2: ์ ์ญ ๋ณ์ ํ ๊ณณ์ ๋ชจ์๋๊ธฐ 
          var i = 0;
          var storeHistoryPerVisitor = [];    

          // ์ฐ๋ฆฌ๊ฐ ์ํ๋ ๊ฐ์ ...
          /* 
            storeHistoryPerVisitor = [ 
              { user: 'a', content: ['1', '2', '3', '4', '5'] },
              { user: 'b', content: ['1', '2', '3', '4', '5'] },
              { user: 'noNameUser_3', content: ['1', '2', '3', '4', '5'] },
              { user: 'd', content: ['1', '2', '3', '4', '5'] }
            ];
          */


          // step - 1: 
          var recordStoreHistoryConcealed = function(visitor) {         // ๋ด๋ถ ํจ์ recordStoreHistory์ ๋ก์ง ๋๋ ์ ๋ณด์ ์ธ๋ถ์์ ์ ๊ทผํด์ ์์ ํ  ์ ์๊ฒ ๋ ๋ค๋ฅธ ํจ์๋ก ๊ฐ์ผ๋จ -> ํด๋ก์ 
            var storeHistory = [];

            var recordStoreHistory = function(visitor) {
            
              // ์กฐ๊ฑด๋ฌธ -----------------------
              switch(visitor) {
                case 'a':
                  recordStoreHistory('start');
                  storeHistory.push('3. ์นด๋ ๊ฒฐ์ฌ๋ฅผ ํ๋ค ');
                  recordStoreHistory('end');
                  break;
                case 'b':
                  recordStoreHistory('start');
                  storeHistory.push('3. ์นด๋ ์๊ธ์ ๋ฐ๋๋ค ');
                  recordStoreHistory('end');
                  break;
                case 'c':
                  recordStoreHistory('start');
                  storeHistory.push('3. ์นด๋ ์๊ธ์ ๋ฐ๋๋ค (์ทจ์)');
                  recordStoreHistory('end');
                  break;
                case 'd':
                  recordStoreHistory('start');
                  storeHistory.push('3. ๊ฒฐ์  ์๋ฌ๋ฐ์');
                  recordStoreHistory('end');
                  break;                      
                case 'start':
                  storeHistory.push('1. ๋ฌผ๊ฑด์ ๊ณ ๋ฅธ๋ค');
                  storeHistory.push('2. ์นด๋๋ฅผ ๋ธ๋ค');
                  break;                      
                case 'end':
                  storeHistory.push('4. ์นด๋๋ฅผ ๋๋ ค๋ฐ๋๋ค');
                  storeHistory.push('5. ๋ด์ญ์ ํ์ธํ๋ค');
                  break;                      
                default:
                  storeHistory.push('์ฌ์ฉ ๊ธฐ๋ก ์์.');
              } 
            
            };// recordStoreHistory(visitor);

            recordStoreHistory(visitor);                 // ํธ์ถ์ ๊ผญ ํ์!! 

            return storeHistory;        

          };// recordStoreHistoryConcealed(visitor);


          // ์ค๊ฐ ์ ๊ฒ!
          // recordStoreHistoryConcealed('a');          
          // [
          //   '1. ๋ฌผ๊ฑด์ ๊ณ ๋ฅธ๋ค',
          //   '2. ์นด๋๋ฅผ ๋ธ๋ค',
          //   '3. ์นด๋ ๊ฒฐ์ฌ๋ฅผ ํ๋ค ',
          //   '4. ์นด๋๋ฅผ ๋๋ ค๋ฐ๋๋ค',
          //   '5. ๋ด์ญ์ ํ์ธํ๋ค'
          // ]



          // step - 2: 
          // ์๋ก์ด ๊ธฐ๋ฅ์ ์ํ ํจ์๋ฅผ ์๋ก ์์ฑ 

          var storeFn = function(visitor, user) {      // ๊ฐ์ด missing์ผ ์๋ ์๊ณ , ์๋์๋ ์๋ ๋ถ์ํ ๊ฐ์ธ user๋ฅผ ๋งค๊ฐ๋ณ์ visitor ๋ณด๋ค ๋ค์ ๋ฐฐ์น์ํจ๋ค
            var userCheck = {};                        // e.g. {name: '์ฌ์ฉ์', content:[]};
            var userSequence = [];                     // ์ด ์์ด๋ ์ฌ์ค์ ์์ ํจ์์์ ์์ฑ๋ storeHistory์ ๊ฐ๋ง ์ ์ฅํ๋ ์ฉ๋

            userSequence = recordStoreHistoryConcealed(visitor);      // userSequence ๋ผ๋ ๋น ๋ฐฐ์ด์ ์์์ ์์ฑํ ํจ์ recordStoreHistoryConcealed๋ฅผ ํตํด ์ป์ด๋ธ storeHistory ๊ฐ์ ํ ๋น 

            i += 1;   // ์ ์ญ๋ณ์ i์ + 1์ ํ์ฌ ํจ์ storeFn๊ฐ ํธ์ถ๋  ๋๋ง๋ค ๋ง์ฝ ๋งค๊ฐ ๋ณ์ user๋ก ๊ฐ์ด ์กด์ฌํ์ง ์์ ๊ฒฝ์ฐ userCheck.user ์ ํ๋กํผํฐ ๊ฐ์ผ๋ก 'noNameUser_' + i๊ฐ ์ฌ์์๊ฒ ํด์ค๋ค

            // userCheck ๋ผ๋ ๋น ๊ฐ์ฒด์ ํ๋กํผํฐ ์์ฑ  
            userCheck.user = user || 'noNameUser_' + i;
            userCheck.content = userSequence;

            storeHistoryPerVisitor.push(userCheck);                  // ์ ์ญ๋ณ์ storeHistoryPerVisitor๋ผ๋ ๋น ๋ฐฐ์ด์ ์์์ ์์ฑํ userCheck๊ฐ์ฒด๋ฅผ ๋ฃ์ด ์ฌ์ฉ์๋ง๋ค ์ด๋ค ๊ธฐ๋ก์ ๊ฐ๊ณ ์๋์ง ์ธ๋ถ์์๋ ์ ๊ทผํ  ์ ์๋ ๋ฐ์ดํฐ๋ฅผ ๋ง๋ค์ด ์ค๋ค

            return userCheck;                        // ์ต์! ์ฌ์ค storeFn์ ๊ธฐ๋ฅ์ ๊ฐ์ฒด๋ฅผ ์์ฑํ๊ณ  storeHistoryPerVisitor๋ผ๋ ๊ธฐ๋ก์ด ๋ด๊ธด ๋ฐฐ์ด์ ๊ฐ์ ๋ฃ๋ ์ฉ๋๋ค. ๊ทธ๋์ return false; ๋ฅผ ํด๋ ๋ฌด๋ฐฉํ์ง๋ง, ๊ฐ์ ๋ฐํํด๋ ๋ฌด๋ฐฉํ๋ค. ์ด์ฐจํผ ์์ธ ๊ฐ์ด๋๊น... 
          };// storeFn(visitor, user);



          // ๋ง์ง๋ง ํ์ธ 
          console.log(storeFn('a'));
          console.log(storeFn('b', 'user2'));
          console.log(storeFn('c'));
          console.log(storeFn('d', 'user4'));
          console.log(storeHistoryPerVisitor);
        
        ```

      </details>

<br />
<br />

### ์์ ๋ณต์ฌ vs ๊น์ ๋ณต์ฌ 

<br />

> ์์ ๋ณต์ฌ vs ๊น์ ๋ณต์ฌ 
- ์์๋ก ์ดํดํ๊ธฐ:  
```js
var box2 = function() {
  var list = 'def';

  return list;     // ๊ฐ์ ๋ฐํ
};

var box1 = function() {
  var list;               // ์์ box2()ํจ์ ๋ด ์ง์ญํจ์ list์๋ ๋ค๋ฅธ ์์ด... 
  // console.log(list);   // ๊ฐ -> undefined 
  list = box2();          // undefined๋ผ๋ ๊ฐ์ ๊ฐ๋ list๋ผ๋ box1() ์ง์ญ ๋ณ์์... ํจ์ box2() ์์ ๋ฐํ๋๋ ๊ฐ์ ํ ๋นํ๋ค 
  console.log(list);      
};

box1();                   // def 
 

// --------------------
// ์์ ๋ณต์ฌ 
var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();          // ์์ ๋ณต์ฌ -> ์ฐธ์กฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ
  console.log(list);
};

box1();                  // [ '1', 4, 5 ]


// --------------------
// ๊น์ ๋ณต์ฌ
var box2 = function() {
  var list = ['1', 4, 5];
  return list;  
};

var box1 = function() {
  var list;
  // console.log(list);   // undefined
  list = box2();
  var sam = list;        // ๊น์ ๋ณต์ฌ - ๊ฐ ์์ฒด๋ฅผ ๋ณต์ฌํ๋ ๊ฒ
  sam.push('789'); 
  console.log(list, sam);
};

box1();                 // [ '1', 4, 5, '789' ], [ '1', 4, 5, '789' ]
```

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - โจ Only ์ ์๋'s ๊ฐ์ โจ
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch
  - https://velog.io/@grinding_hannah/Switch-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
  - https://siyoon210.tistory.com/173

</detials>   

