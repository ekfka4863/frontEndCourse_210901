---
date: 2021-10-15-Friday
---

# TIL

- ๐ ์ค๋ ๋ฐฐ์ด ๋ด์ฉ โ๏ธ : 
  - [x] `background` ์์ฑ์ผ๋ก ์ด๋ฏธ์ง ์ฝ์ํ๊ธฐ 
    - `<img/>` ํ๊ทธ๋ก ์ด๋ฏธ์ง๋ฅผ ์ฝ์ํ  ์ ์๋ค.       
    ์ด๋ฏธ์ง ํ๊ทธ๋ ๊ธ์์ฒ๋ผ ์ธ์์ด ๋๋ ์ธ๋ผ์ธ ์์์ด๋ค.     
    ์ถํ์ JS๋ก ๋ด์ฉ์ ๋ณ๊ฒฝํ๊ธฐ ์ฝ๋ค๋ ์ฅ์ ์ด ์๋ค.         
    - css์๋ background๋ผ๋ ์์ฑ์ด ์๋ค.     
    ์ด ์์ฑ์ ๋ฐฐ๊ฒฝ์ฒ๋ฆฌ๋ฅผ ์ํ ์์ฑ์ด๊ธฐ ๋๋ฌธ์ ~~์ด๋ฏธ์ง ํ๊ทธ์๋ ๋ค๋ฅด๊ฒ~~ ๊ธ์จ, ๋ด์ฉ ์ฒจ๋ถ ๋ฑ์ JS๋ก ๋ณ๊ฒฝํ๊ธฐ ์กฐ๊ธ ๋ณต์กํ  ์ ์๋ค.          
    - background ์์ฑ์ ์ข๋ฅ๋ **background-image, background-repeat, background-position, background-size**๊ฐ ์๋ค.     
    - ์์ ๋ชจ๋  ์์ฑ๋ค์ background ํ๋๋ก ์ถ์ฝํํ์ด ๊ฐ๋ฅํ๋ค.  
    ```css 
      background-image: url("../images/example.png"); 
      background-repeat: repeat || no-repeat || ...; 
      background-position: 0 0 || center || right || left || ...; 
      background-size: initial || cover || contain  || ...; 

      /* ์ถ์ฝํํ */
      background: url("../images/example.png") no-repeat center;
    ```

  <br />

  - [x] ์ด๋ฏธ์ง๋ฅผ ์ฝ์ํ๊ธฐ ์ํด ์ฌ์ฉํ๋ ๊ธฐ์     
    - **IR(Image Replacement) ๊ธฐ๋ฒ**
    - **IS(Image Sprites) ๊ธฐ๋ฒ**
    - [์์ฝ์ ๋ฆฌ๋ณธ](https://github.com/ekfka4863/TIL/blob/master/CSS%26SASS%26Bootstrap/CSS/CSS_Image_Replacement.md) ํด๋ฆญ! 
      
  <br />

  - [x] `shadow` ์์ฑ  
    - ๐ `box-shadow: ;`
      <details>
      <summary>CLICK ME!</summary>

      ```html
        <div class="part box">
          <h2>์์์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</h2>
          <div class="box_shadow_01">box_shadow_01</div>
          <div class="box_shadow_02">box_shadow_02</div>
          <div class="box_shadow_03">box_shadow_03</div>
          <div class="box_shadow_04">box_shadow_04</div>
          <div class="star">box_shadow_05</div>
        </div>
      ```

      ```css 
        /* ์์์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ */
        .box > div {
          width: 350px;
          height: 200px;
          margin: 30px;
          text-align: center;
          line-height: 200px;
          background-color: #ddd;
        }
        .box_shadow_01 {
          /* ๊ทธ๋ฆผ์ ๋ง๋๋ ๋ฐฉ๋ฒ - ๊ธฐ๋ณธ ๋ฐฉ๋ฒ (ํ๋ฆฟ์ฒ๋ฆฌ ํฌํจ)
          box-shadow: x-์ขํ y-์ขํ blur color; */
          box-shadow: 5px 5px 5px #077;
        }
        .box_shadow_02 {
          /* ๊ทธ๋ฆผ์ ๋ง๋๋ ๋ฐฉ๋ฒ - ๋ฒ์ง ํจ๊ณผ
          box-shadow: x-์ขํ y-์ขํ blur offset color; */
          /* box-shadow: 0 0 0 10px #077; */
          box-shadow: 0 0 5px 10px #077;
        }
        .box_shadow_03 {
          /* ๊ทธ๋ฆผ์ ๋ง๋๋ ๋ฐฉ๋ฒ - ์์ผ๋ก ๊ทธ๋ฆผ์ 
          box-shadow: inset x-์ขํ y-์ขํ blur color; */
          /* box-shadow: 0 0 0 10px #077; */
          box-shadow: inset 5px 5px 0 #077;
          /* box-shadow: 5px 5px 0 #077 inset; */
        }
        .box_shadow_04 {
          /* ๊ทธ๋ฆผ์ ๋ง๋๋ ๋ฐฉ๋ฒ - ๊ทธ๋ฆผ์ ์ค์ฒฉ
          box-shadow: x-์ขํ y-์ขํ blur color; */
          box-shadow: 0 0 10px #fff,
                      -5px -5px 5px #555,
                      10px 10px 3px #adf,
                      inset 0 0 5px #333;
        }


        /* ๊ทธ๋ฆผ์ ํจ๊ณผ๋ฅผ ์ฌ์ฉํด์ ์ ๋๋ฉ์ด์์ ์ ์ฉํ ๋ฐฐ๊ฒฝ์ผ๋ก ํ์ฉํ๊ธฐ*/
        .box .star {
          width: 3px;
          height: 3px;
          background-color: #daa;
          /* ์์ฉ) ๋ฐฐ๊ฒฝ์ผ๋ก ํ์ฉ... */
          box-shadow: 15px 15px 0 3px #0af,
                      50px 80px 0 5px #f06,
                      140px 300px #fa0,
                      -40px -20px #ddf,
                      -200px -400px #171717;

          position: fixed;
          animation: star 5000ms normal infinite ease-in;
        }

        /* animation */
        @keyframes star {
          0% {
            top: -100px;
            right: -200px;
            opacity: 0.8;
          }
          100% {
            top: 100%;
            right: 100%;
            opacity: 0;
          }
        }
      ```
      </details>

    - ๐ `text-shadow: ;`

      <details>
      <summary>CLICK ME!</summary>

       ```html
        <div class="part text">$
          <h2>๊ธ์จ์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</h2>
          <div class="text_shadow_01">๊ธ์์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</div>
          <div class="text_shadow_02">๊ธ์์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</div>
          <div class="text_shadow_03">๊ธ์์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</div>
        </div>
      ```

      ```css 
        /* ๊ธ์จ์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ */
        .text > div {
          width: 100%;
          min-width: 400px;
          height: 150px;
          margin-bottom: 10px;
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          background-color: #ddd;
        }

        .text_shadow_01 {
          /* ๊ธ์ฐ์ ๊ทธ๋ฆผ์์ฃผ๊ธฐ 
          text-shadow: x-์ขํ Y-์ขํ blur color; */
          text-shadow: 5px 5px 5px #777;
        }
        .text_shadow_02 {
          text-shadow: 5px 5px #47a,
                        10px 7px #fa0;
          color: rgba(255, 255, 255, 0.5);
        }
        .text_shadow_03 {
          /*  */
          background-image: url("../../images/background/pumpkins.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; 
          font-size: 5rem;
        }
      ```
      </details>

    - ๐ `filter: drop-shadow();`

      <details>
      <summary>CLICK ME!</summary>

       ```html
        <div class="part image">
          <h2>์ด๋ฏธ์ง์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ</h2>
          <div class="img_shadow_01"></div>
          <div class="img_shadow_02"></div>
          <div class="img_shadow_03"></div>
          <div class="img_shadow_04"></div>
        </div>
      ```

      ```css 
      /* ์ด๋ฏธ์ง์ ๊ทธ๋ฆผ์ ์ฃผ๊ธฐ */
      .image > div {
        float: left;

        width: 200px;
        height: 200px;
        margin: 50px;
        border-radius: 100%;
        /* background-color: #ccc; */
        background-image: url("../../images/icons/arrow.svg");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 50% 50%
      }
      .img_shadow_01 {
        box-shadow: 5px 5px 5px #333;
      }
      .img_shadow_02 {
        /* ์ด๋ฏธ์ง ์์ฒด์ ๊ทธ๋ฆผ์๊ฐ ์๊ธฐ๋ ๊ฒ! 
        ํ์ง๋ง ์ต์คํ๋ก๋ฌ 11๋ ์๋จน๊ณ , ๊ตฌํ์์๋
        ๋๋์ฑ ์ ์ฉ ์๋ผ๋ค๋ ์ ... */
        /* filter: drop-shadow(5px 5px 5px #444); */
        /* ๋ง์ด๋์ค ๊ฐ๋ ๋จนํ */
        filter: drop-shadow(-5px -5px 5px #444);
        /* ์ฌ๋ฌ๊ฐ ์ ์ฉ ์๋! */
        filter: drop-shadow(-5px -5px 5px #444, 5px 5px 5px #eae);
      }
      .img_shadow_03 {
        filter: blur(10px);
      }
      /* ์์ฉ */
      .img_shadow_03:hover {
        filter: blur(0) grayscale(0);
        transition: all 200ms linear;
      }
      .img_shadow_04 {
        /* filter: grayscale(30%); */
        /* filter: blur(2px) grayscale(50%); */
        filter: hue-rotate(180deg);
      }
      ```

      </details>
      

  <br />

  - [x] git์์ `branch` ์๋ก ํ๋ cli ๋ช๋ น์ด              
    - ๐ ์๋ก์ด ๋ธ๋์น๋ฅผ ์์ฑํ  ๋ ๐ `git branch [์๋ก์ด ๋ธ๋์น ์ด๋ฆ]`
    - ๐ ๋ฐฉ๊ธ ์์ฑํ ๋ธ๋์น๋ก ์ด๋ํ  ๋ ๐ `git checkout [์๋ก์ด ๋ธ๋์น ์ด๋ฆ]`
    - ๐ ๋ธ๋์น๋ฅผ ์ญ์ ํ  ๋ ๐ `git branch -d [๋ธ๋์น ์ด๋ฆ]`

<br />  
<br />

## HW
- [x] ๐ป ๋นฝ๋ค๋ฐฉ ๋ฐ์ํ ์น์ฌ์ดํธ ํ๋กํ ํ์ (๋ฉ์ธํ์ด์ง๋ ์๋ธํ์ด์ง) figma๋ก ๋ develop โจ๏ธ    

<br />

---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - โจ ์ ์๋'s ๊ฐ์ โจ
  - https://backlog.com/git-tutorial/kr/stepup/stepup2_2.html
  - [IR - & IS ๊ธฐ๋ฒ ์์ฝ ์ ๋ฆฌ๋ณธ](https://www.google.com/search?q=image+sprite+method&newwindow=1&hl=ko&source=hp&ei=EsNqYZ_2CILr9APNjZzoCg&iflsig=ALs-wAMAAAAAYWrRIt2uZnZ4BGH3foHYAcMQI0fE_wYI&oq=image+sprite+method&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABOgsIABCABBCxAxCDAToICAAQgAQQsQM6BQgAEIAEOgoIABCABBCxAxAKOgcIABAeEIsDOgkIABAKEB4QiwM6BAgAEB46BggAEAoQHjoECAAQEzoGCAAQHhATOggIABAFEB4QEzoICAAQCBAeEBM6BggAEAgQHlDaxdMGWKD80wZgoIHUBmgBcAB4AIABqQGIAaYNkgEEMi4xM5gBAKABAbgBAg&sclient=gws-wiz)
</detials>   

