---
date: 2021-11-30-Tuesday
---

# TIL
- ๐ ์ค๋ ๋ฐฐ์ด ๋ด์ฉ โ๏ธ : 
  - [x] js๋ก cardlist `fade in / fade out` ์ฒ๋ฆฌ

    <img src="./images/return.png" alt="return๋ฌธ์ ์ฌ์ฉํ๊ณ  ์ํ๊ณ ์ ์ฐจ์ด, ์ธ์  ์ฌ์ฉํ๋์ง์ ๋ํ ์์"  width="400px" height="" style="" />   

    <details>
      <summary>CLICK ME TO SEE CODES!</summary>

      ```js
        // case 1
        // ๊ทธ๋ฅ ๊ฐ์ ๋ฐ๊ฟ์ฃผ๋ ํจ์ coffee()๋ฅผ ํธ์ถํ์๋์ ํต
        var ํต;
        var coffee = function () {
          ํต = "๋ฏน์ค์ปคํผ 100๊ฐ ์ฑ์ฐ๊ธฐ";
        };

        coffee();   // "๋ฏน์ค์ปคํผ 100๊ฐ ์ฑ์ฐ๊ธฐ"


        // case 2
        // ํจ์ ๋ด์์ ํต์ ๋ด๊ธด ๊ฐ์ ๋ณ๊ฒฝํ๋๋ฐ, ๋ณ๊ฒฝ๋ ๊ฐ์ ๋ ๋ค๋ฅธ ๋ณ์์ ๋ด์ ๋ -> return๋ฌธ ํ์ 
        // ๋ฆฌํด๋ฌธ ์์ผ๋ฉด undefined ๋ฐํ -> ์? ํจ์์์ ๋์ถ๋ ๊ฐ์ด ํจ์ ๋ชธ์ฒด ์ธ๋ถ๋ก ๋ฐํ/return ๋์ง ์์๊ธฐ ๋๋ฌธ 
        var ํต;
        var coffee = function () {
          ํต = "๋ฏน์ค์ปคํผ 100๊ฐ ์ฑ์ฐ๊ธฐ";
          // return ํต;
        };

        var ์ ์ = coffee();   // undefined


        // case 3
        var ํต;
        var coffee = function () {
          ํต = "๋ฏน์ค์ปคํผ 100๊ฐ ์ฑ์ฐ๊ธฐ";
          return ํต;
        };

        var ์ ์ = coffee();   // "๋ฏน์ค์ปคํผ 100๊ฐ ์ฑ์ฐ๊ธฐ"
      ```

    </details>
    <br />

  - [x] `document.write()` ํ์ฉ ์์ 

      <img src="./images/document_write_example.png" width="" height="100px" style="" />   

    <details>
      <summary>CLICK ME TO SEE CODES!</summary>

      ```js
        let num = 1;
        let t = "<table border=1>";

          for(let i = 1; i <= 5; i++) {
            t+="<tr>";
          
            for(let j = 1; j <=5; j++) {
              t+="<td>";
              t+=num;
              t+="</td>";
              num++;
            }

            t+="</tr>";
          }

        t+="</table>";

        document.write(t);
      ```

    </details>
    <br />

  - [x] `DOM (Document Object Model)` 
    - **DOM**์ HTML ๋ฌธ์์ ๊ณ์ธต์  ๊ตฌ์กฐ์ ์ ๋ณด๋ฅผ ํํํ๋ฉฐ ์ด๋ฅผ ์ ์ดํ  ์ ์๋ API, ์ฆ ํ๋กํผํฐ์ ๋ฉ์๋๋ฅผ ์ ๊ณตํ๋ ํธ๋ฆฌ ์๋ฃ๊ตฌ์กฐ๋ฅผ ์๋ฏธํ๋ค.         
    - **HTML ์์**๋ HTML ๋ฌธ์๋ฅผ ๊ตฌ์ฑํ๋ ๊ฐ๋ณ์ ์ธ ์์๋ฅผ ์ํ๋ค.       
    HTML ์์๋ ๋ ๋๋ง ์์ง์ ์ํด ํ์ฑ๋์ด DOM์ ๊ตฌ์ฑํ๋ ์์ ๋ธ๋ ๊ฐ์ฒด๋ก ๋ณํ๋๋ค.     
    ์ด๋, HTML ์์์ ์ดํธ๋ฆฌ ๋ทฐํธ๋ ์ดํธ๋ฆฌ๋ทฐํธ ๋ธ๋๋ก, HTML ์์์ ํ์คํธ ์ฝํ์ธ ๋ ํ์คํธ ๋ธ๋๋ก ๋ณํ๋๋ค.        
    <img src="https://post-phinf.pstatic.net/MjAxOTA5MTVfMjQg/MDAxNTY4NTIxNzAxNTU2.F9kkMs28gxi2n5Vp2RlzcTUbn3IeEBCUswQGB3G0ZRcg.KqIiETiO3M1CXyfurWPOREHunMUYSXSDhDIw1AtXNuog.PNG/domtree_1.png?type=w1200" alt="์ถ์ฒ: https://m.post.naver.com/viewer/postView.nhn?volumeNo=25195764&memberNo=42458017&searchKeyword=JS&searchRank=6" width="400px" /> 
    <br />
    <img src="https://media.vlpt.us/images/hyowon_lee/post/5d7134d5-11e4-4561-adb0-2b5131dc489a/DOM-001.png" alt="์ถ์ฒ: https://velog.io/@hyowon_lee/JavaScript-textContent-%EC%99%80-innerText" width="400px" /> 

    - ๋ค์, HTML ๋ฌธ์๋ HTML ์์๋ค์ ์งํฉ์ด๋ฉฐ, HTML ์์๋ ์ค์ฒฉ๊ด๊ณ๋ฅผ ๊ฐ๋๋ค.           
    HTML ์์ ๊ฐ์ ์ค์ฒฉ๊ด๊ณ์ ์ํด ๊ณ์ธต์ ์ธ ๋ถ์(parent-child) ๊ด๊ณ๊ฐ ํ์ฑ๋๋๋ฐ, ์ด๋ฌํ HTML ์์ ๊ฐ์ ๋ถ์ ๊ด๊ณ๋ฅผ ๋ฐ์ํ์ฌ HTML ๋ฌธ์์ ๊ตฌ์ฑ ์์์ธ HTML ์์๋ฅผ ๊ฐ์ฒดํํ ๋ชจ๋  ๋ธ๋ ๊ฐ์ฒด๋ค์ ํธ๋ฆฌ์๋ฃ ๊ตฌ์กฐ๋ก ๊ตฌ์ฑํ๋ค.       
    - ์ฆ, ํธ๋ฆฌ์๋ฃ์ฃผ๊ณ (tree sata structure)๋ ๋ธ๋๋ค์ ๊ฒ์ธต ๊ตฌ์กฐ๋ก ์ด๋ค์ง๋ค.
    <img src="https://www.qualitestgroup.com/images/howto/DOMTree_HowTo.png" alt="์ถ์ฒ: https://qualitestgroup.com/insights/technical-hub/how-to-traverse-the-dom/" width="400px" /> 

  - [x] `์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด๋ฅผ ๋ฐฐ์ด๋ก ๊ฐ์  ๋ณํํ๊ธฐ` 
    - ๋ฐฉ๋ฒ 1:    
    `Array.prototype.slice.call(์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด๋ช);`
    - ๋ฐฉ๋ฒ 2:    
    `Array.prototype.filter.call(์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด๋ช, function(data) {return data});`
    - ์์ฉํธ:      
    `[].slice.call(์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด๋ช);`       
    - ๋ธ๋ผ์ฐ์ ๊ฐ ๋ฐํํ๋ **HTML collection** ๋๋ **nodeList**์ ๊ฐ์ ์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด๋ฅผ ๋ฐฐ์ด๋ก ๊ฐ์  ๋ณํํ๋ ์ด์ ๋, ๋ฐ๋ณต๋ฌธ/๋ฐฐ์ด์ ๋ฉ์๋๋ฅผ ํ์ฉํด์ ๋ถํ์ํ๊ฒ ์ค๋ณต๋๋ ์ฝ๋๋ฅผ ์ค์ด๊ณ , ์ผ๊ด์ ์ผ๋ก ์์์ ์ฒ๋ฆฌํด์ฃผ๊ธฐ ์ํจ์ด๋ค.      
    - e.g.     
      <details>
        <summary>CLICK ME TO SEE CODES!</summary>

      ```html
        <!-- c_07_dom_selector_01.html -->

        <header id="headBox">
          <h1>
            <a href="./a_content.html">js - <abbr title="document object model">DOM</abbr></a>
            <span>test!!</span>
          </h1>
          <nav class="nav_area">
            <ul>
              <li><a href="#">link_01</a></li>
              <li><a href="#">link_02</a></li>
              <li><a href="#">link_03</a></li>
              <li><a href="#">link_04</a></li>
            </ul>
          </nav>
        </header>
      ```

      <br />

      ```js
        // c_07_dom_selector_01.js

        var headBox = document.querySelector("#headBox");
        headBox.style = "width: 100%; height: auto; background-color: #adf;";

        // h1
        var h1 = wrap.getElementsByTagName("h1");
        // var h1 = wrap.querySelector("h1");
        // console.log(h1.length);  // 1
        var idx = h1.length - 1;
        // HTML collection์ ๋ฐฐ์ด์ ํ์์ผ๋ก ๋์ค๊ธฐ ๋๋ฌธ์ ์ธ๋ฑ์ค๋ก ๋ช๋ฒ์จฐ์ ์์์ style์ ์ ์ฉํ  ๊ฒ์ธ์ง ์์์ผ ํ๋ค! 
        h1[idx].style = "width: 100px; height: 30px; background-color: #dfd;";

        // h1
        var headH1 = headBox.querySelector("h1");
        // headH1.style = "border-radius: 5px; font-size: 1.2rem;"
        // ๊ทผ๋ฐ ์์๊บผ๋ก ํ๋ฉด ์๊น h1[idx].style๋ถ๋ถ์์ ์ ์ฉํ ์คํ์ผ๋ง์ด ๋ฎ์ด์ฐ์ด๋๊น ... ์๋์ ๊ฐ์ด ๋ฐ๋ก ๊ฐ์ ์ถ๊ฐํด์ค ๊ฒ! 
        headH1.style.borderRadius = "5px";
        headH1.style.fontSize = "1.2rem";
        
        // -----------------------------------
        // cf. 
        // HTML collection : ์๋ ๋ฐฉ์์ ์ ํ์ 
        //    - document.getElementById();

        // NodeList : ์ ํ์๋ ์์ง ์ ๋ถ ์ฌ์ฉํ๊ธฐ์ ์กฐ๊ธ ๋ฌด๋ฆฌ๊ฐ ์๋ค 
        //    - document.querySelector();
        // -----------------------------------

        // ์์ ์ ํ์ 
        var h1 = wrap.getElementsByTagName("h1")[0];  
        // getElement"s"ByTagName ์ฒ๋ผ element๊ฐ ์๋ elements๋ฅผ ๊ตฌํ๋ ์ ํ์์๊ฒ๋ ๋ฐ๋์ ๋ช๋ฒ์งธ์ ์์์ธ์ง๋ฅผ ๋ช์. 
        // ์์๊ฐ ํ๋๋ง ์์ด๋ ์ธ๋ฑ์ค๋ฅผ ๊ผญ ๋ช์ํด์ค์ผ ํ๋ค!!
        h1.style = "width: 100px; height: 30px; background-color: #dfd;";

        var h1Link = h1.children;           // HTMLCollectionย [a, span]
        // var h1Link = h1.children[0];     // <a href="./a_content.html">js - <abbr title="document object model">DOM</abbr></a>
        h1Link[0].style = "padding: 0.5rem; color: #05f;";
        h1Link[1].classList.add("blind");
        // console.log(h1Link);             // HTMLCollection(2)ย [a, span.blind]

        // cf. ์ด๋, children๊ณผ childNodes์ ์ฐจ์ด์  ๋น๊ต
        var h1Insert = h1.childNodes;
        // console.log(h1Insert);           // NodeList(5)ย [text, a, text, span.blind, text]

      ```

      <br />

      ```js
      // nav ๋ถํฐ ... 
      var navArea = wrap.getElementsByClassName("nav_area");
      var navArea2 = headBox.querySelector(".nav_area");
      var navUl = navArea2.children;
      console.log(navUl);       // HTMLCollectionย [ul]
      navUl[0].style = "display: flex; justify-content: space-between;";
      var navLiTags = navUl[0].children;
      console.log(navLiTags);   // HTMLCollection(4)ย [li, li, li, li]

      // ์๋์ฒ๋ผ ํ๊ธฐ ์ซ์ผ๋ฉด!!!!! ์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด ๋ฌด.์กฐ.๊ฑด. ๋ฐฐ์ด๋ก ๊ฐ์  ๋ณํ ํด์ค ๊ฒ!!!!!
      // navLiTags[0].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
      // navLiTags[1].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
      // navLiTags[2].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
      // navLiTags[3].style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";

      // ๋ฐฐ์ด๋ก ๊ฐ์  ๋ณํ ํ์๋ ๋ฐฐ์ด ๋ฉ์๋์ธ forEach ๋ฑ์ ์ฌ์ฉํ  ์ ์๋ค. -> ์ค๋ณต์ฝ๋ ์์ด ์ผ๊ด์ ์ฉ ๊ฐ๋ฅ!
      navLiTags = Array.prototype.slice.call(navLiTags);
      // console.log(navLiTags);   //ย [li, li, li, li]
      navLiTags.forEach(function(elem) {
        elem.style = "width: 200px; border: 1px solid #333; padding: 2px 5px;";
      });

      ```

      </details>

<br />
<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - โจ Only ์ ์๋'s ๊ฐ์ โจ

</detials>   

