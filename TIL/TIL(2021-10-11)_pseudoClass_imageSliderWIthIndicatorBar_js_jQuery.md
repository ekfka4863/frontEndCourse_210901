---
date: 2021-10-11-Monday
---

# TIL

- π μ€λ λ°°μ΄ λ΄μ© βοΈ : 
  - [x] `::before and ::after effects used in footer section and 'breadcrumbs'`        

  <br />
  <img src="./images/footer_before_after_effects.png" alt="beforeμ after κ°μ μμλ₯Ό μ¬μ©ν μμ" width="250px" height="px" style="padding-left: 40px;"/>
  <br />
  <img src="./images/breadcrumbs_example.png" alt="beforeμ after κ°μ μμλ₯Ό μ¬μ©ν μμ" width="150px" height="px" style="padding-left: 40px;"/>
  <br />

  - μμ μμλ€μ²λΌ κ°μ μμλ₯Ό μ¬μ©νμ¬ ~~λλκ·Έν΄λ μ νλμ§λ μμ§λ§~~ μκ°μ μΌλ‘ **κ΅¬λ³νλ μ©λ**λ‘ vertical bar λλ μΌκ°ν, νμ΄ν λ±μ λ£μ΄μ€ μ μλ€.       

  - π <u>example</u> π         
    - μμ κ·Έλ¦Ό μ€ μ²μ μ¬μ§μ μμλ‘ λ§λ λ€κ³  νλ©΄ ... 

      <details>
      <summary>See More HTML Code!</summary>  

      ```html
      <!-- μλ£¨μ 1 (with μ μλ):  span νκ·Έλ‘ μ²λ¦¬νκΈ° -->
      
        <div class="nav_list">
          <ul>
            <li>
              <!-- λ¨, μ¬κΈ°λ span μμ -->
              <a href="#">μ ν΄ λ¬Έμ</a>
            </li>
            <li>
              <span class="bar"></span>
              <a href="#">μ΄μ© μ½κ΄</a>
            </li>
            <li>
              <span class="bar"></span>
              <a href="#">κ°μΈμ λ³΄ μ²λ¦¬ λ°©μΉ¨</a>
            </li>
            <li>
              <span class="bar"></span>
              <a href="#">κ³΅μ§ μ¬ν­</a>
            </li>
          </ul>
        </div>

      ```

      </details>
      <br />
      <details>
      <summary>See More CSS Code!</summary>  

      ```css
        /* μλ£¨μ 1 (with μ μλ):  span νκ·Έλ‘ μ²λ¦¬νκΈ° */
        .bar {
          display: none;

          float: left;
          width: 1px;
          height: 10px;
          margin-left: -5px;
          margin-top: 5px;
          background: #777;
        }


        /* μλ£¨μ 2 : λΉν¬ κ°μ μμλ‘ μ²λ¦¬νκΈ° 
                      (span μ°κ³  μΆμ§ μμΌλ©΄... λ λ²μ§Έ λ°©λ²μΌλ‘ μ΄κ±°...)
        */
        .nav_list li:first-child:before, 
        .nav_list li:first-child::before {
          display: none;
        }

        .nav_list li:before,
        .nav_list li::before {
          content: '';
          float: left;
          width: 1px;
          height: 10px;
          margin-left: -5px;
          margin-top: 5px;
          background-color: #59a;
        }


        /* μλ£¨μ 3 - beforeλ§κ³  afterλ κ°λ₯...! */
        .nav_list li:after,
        .nav_list li::after {
          /* entity μ½λλ κ°λ μ½μ μλ μκΈ°λλ¬Έμ... μλ΅... 
            μ λ μ½λλ λ£μ΄λ λ¬΄λ°©... 
          */
          content: '';
          display: block;
          /* float: right;
          margin-left: 10px; */
          /* μμ κ°μ΄ νλ‘νΈλ₯Ό μ£Όλ λ°©λ²λ μμ§λ§ λμ€μ a νκ·Έκ° ν¬κΈ°λ₯Ό κ°μΌλ©΄ λ³ν  μλ μμΌλκΉ... */
          
          /* μ΄κ±Έ μ νΈ... μΆμ²... !! 
          νλ‘νΈλ₯Ό μ£Όλ©΄ ν΄λΉ μμλ display: block; κ³Ό κ°μμ§λκΉ ... 
          λμ  μ¬κΈ°λ€κ° position: absolute; μ€κ±°λ©΄ liλΌλ λΆλͺ¨μμμ position: relative; μ£ΌκΈ°... */
          position: absolute;
          /* top: 5px; */
          top: 0;
          bottom: 0;
          right: -5px;
          margin: auto;

          width: 0;
          height: 10px;
          border-right: 1px solid #19a;
        }


        /* μλ£¨μ 4 - liμ borderλ₯Ό νμ©νλ λ°©λ² */
        .nav_list li {
          height: 10px;
          margin-right: 10px;
          padding-right: 10px;
          border-right: 1px solid #f06;
        }
        .nav_list li:last-child {
          border: 0;
          margin-right: 0;
        }
        .nav_list a {
          /* width: 100px;
          height: 50px; */
          background-color: #7ff;
        }
      ```

      </details>

  <br />
  <p style="padding-left: 40px;">π &nbsp; λ€μν <a href="https://github.com/ekfka4863/frontEndCourse_210901/blob/main/code_during_the_class/html/c_01_position_set.html">html</a> κ·Έλ¦¬κ³  <a href="https://github.com/ekfka4863/frontEndCourse_210901/blob/main/code_during_the_class/css/src/c_01_position_set.css">css</a> μ½λμ variationλ€μ΄ μμ§λ§ νλλ§ λ± κ³¨λΌμ μ¬μ©ν΄λ λ¬΄λ°©νλ€!</p>   

  <br />

  - [x] `μ΄λ―Έμ§ μ¬λΌμ΄λ, λ²νΌ, μΈλμΌμ΄ν° κ΅¬μ‘°` λ€μλ³΄κΈ°      

  <br />     
  <img src="./images/slide_and_indicator_html_structure.jpeg" alt="μ΄λ―Έμ§ μ¬λΌμ΄λμ λ²νΌ, κ·Έλ¦¬κ³  μΈλμΌμ΄ν°μ κ΅¬μ‘° μ€μΌμΉ" width="300px" height="px" style="padding-left: 40px;"  />
  <br />     

  <div style="padding-left: 20px;">
    <ul style="list-style: square;">
      <li>κ΅¬μ‘°: <br />
      <em>π  &nbsp; .slide > (h2 + .slide_wrapper) > (.btn > button*2) + (.indicator > ul > (li > a > span.blind) * κ°―μ) + (.slide_content > div > (div * κ°―μ))</em>
      </li>
      <li><a href="https://github.com/ekfka4863/frontEndCourse_210901/tree/main/practice/practice_11%20(slide%20banner)">π μ½λλ‘ λ³΄κΈ°</a></li>
    </ul>
  </div>
  <br /> 


  - [x] [js](https://github.com/ekfka4863/frontEndCourse_210901/blob/main/practice/pracice_11%20(%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EB%B0%B0%EB%84%88)/js/src/slide_banner.js)μ [jQuery](https://github.com/ekfka4863/frontEndCourse_210901/blob/main/practice/pracice_11%20(%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EB%B0%B0%EB%84%88)/js/src/slide_banner_from_JQ.js) λ§λ³΄κΈ°         
    - μ€μ  λμνλ λͺ¨μ΅     
    
    <br />
    <img src="./images/js_jquery_αα₯α¨αα­αΌ.gif" alt="μ΄λ―Έμ§ μ¬λΌμ΄λμ js λλ jquery μ μ©νμ λμ λͺ¨μ΅" width="350px" heigh="px" style="padding-left: 40px;" />

<br /> 
<br />

## HW
- [x] π» λΉ½λ€λ°© λ°μν μΉμ¬μ΄νΈ νλ‘ν νμ figmaλ‘ λ develop β¨οΈ    

<br /> 
<br />

---

<details>
<summary>CLICK ME!</summary>  

- cf.  
  - http://www.serveone.co.kr/kr/purchasing-service/business/consumable-materials.do
  - https://www.gdweb.co.kr/main/
  - https://green-webdesigner.tistory.com/20
  - https://blogpack.tistory.com/868

</detials>   

