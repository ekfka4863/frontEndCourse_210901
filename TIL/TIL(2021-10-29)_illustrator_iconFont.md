---
date: 2021-10-29-Friday
---

# TIL

- π μ€λ λ°°μ΄ λ΄μ© βοΈ : 
  - [x] Illustrator μ€μ κΈ°λ₯ 3κ°μ§
    - 1. `μ»΄νμ΄λ ν¨μ€(Compound Path)`
    <!-- <img src="./images/how_to_use_compound_path.gif" alt="μΌλ¬μ€νΈλ μ΄ν°μμ μ»΄νμ΄λ ν¨μ€ μ¬μ©νλ λ°©λ² μμ λΉλμ€" width="600px" /> -->
    - 2. `ν¨μ€ νμΈλ(Pathfinder)`
    <img src="./images/how_to_use_pathfinder.gif" alt="μΌλ¬μ€νΈλ μ΄ν°μμ ν¨μ€ νμΈλ μ¬μ©νλ λ°©λ² μμ λΉλμ€" width="600px" />
    - 3. `ν΄λ¦¬ν λ§μ€ν¬(Clipping Mask)`:    
    <img src="./images/how_to_use_clipping_mask.gif" alt="μΌλ¬μ€νΈλ μ΄ν°μμ ν΄λ¦¬ν λ§μ€ν¬ μ¬μ©νλ λ°©λ² μμ λΉλμ€" width="600px" />


  <br />      

  - [x] Illustrator μ€μ κΈ°λ₯ 3κ°μ§ νμ©ν΄μ `customized icon` λ§λ€μ΄μ `webfont`λ‘ μ¬μ©νλ λ°©λ²
    - <span style="color: gray; font-size: 1.2rem; font-weight: 700;">μ»€μ€ν μμ΄μ½ λ§λλ λ°©λ²</span>
      - <u>step 1</u>:       
        μΌλ¬μ€νΈλ μ΄ν°λ‘ μμ΄μ½μ λ§λ  λ€, `compound path`λ‘ νλμ λ©μ΄λ¦¬λ‘ λ§λ€κ³ ,       
        μλ¨ λ©λ΄μ `Window` β `Asset Export`λ₯Ό μ΄κ³ , κ·Έ μμΌλ‘ λλκ·Έ ν΄μ€ λ€,       
        νμΌ ν¬λ©§μ μ§μ ν λ€ `Export` μμΌμ€λ€.      
      - <u>step 2</u>:             
        νμν κ³³μ ~~e.g. cssμ μμ±μΈ background-image: url(""); λ±μΌλ‘~~ μ°κ²°μμΌμ μ¬μ©νλ€.         
      
    - <span style="color: gray; font-size: 1.2rem; font-weight: 700;">μΉν°νΈ λ§λλ λ°©λ²</span>
      - <u>step 1</u>:       
      μΌλ¬μ€νΈλ μ΄ν°λ‘ `.svg` νμ₯μλ₯Ό κ°λ μμ΄μ½μ λ§λ λ€.       
      (cf. λ³΄ν΅ μΉν°νΈλ₯Ό λ§λ€ λ **size**λ **64px * 64px ~ 128px * 128px** μ¬μ΄λ₯Ό κΈ°μ€μΌλ‘ νλ€.)          

        <u>λ€λ§</u>, svgλ‘ λ§λ  μμ΄μ½μ μΉν°νΈλ‘ μ¬μ©νλ €λ©΄ <u>2κ°μ§ μ‘°κ±΄μ λ§μ‘±μμΌμΌ νλ€</u>:        
        - <u>μ‘°κ±΄ 1</u>:      
        svgλ‘ λ§λ  μμ΄μ½μ μΌλ¬μ€νΈλ μ΄ν°μ `compound path`λ₯Ό μ¬μ©ν΄μ, νλμ "λ©μ΄λ¦¬"λ‘ λ§λ€μ΄μ export ν΄μΌνλ€.
        <img src="./images/illustrator_compound_path.png" alt="μΌλ¬μ€νΈλ μ΄ν°λ‘ μμ΄μ½ λ§λ€κΈ° μ°μ΅" width="600px" />
        <br />      

        - <u>μ‘°κ±΄ 2</u>:          
        HTMl μ½λμμμ `link` νκ·Έλ‘ ν΄λΉ μμ΄μ½/μΉν°νΈκ° λ΄κΈ΄ ν΄λλ₯Ό μ°κ²° μν¨λ€.         
        (cf. μΉν°νΈλ‘ λ§λ€μμ κ²½μ° μμ±λ νμΌ μμλ μ¬λ¬κ°μ§ ν΄λ/νμΌλ€μ΄ μμνλ°, μ΄λ **font ν΄λ**μ **style.css**κ° μ€μνλ€!)         
        <br />      
        
      - <u>step 2</u>:          
      [iconmoon](https://icomoon.io/app/#/select)μΌλ‘ κ°μ `import icon`μ λλ₯΄κ³ , μΉν°νΈλ‘ μμ±ν  νμΌμ λ£μλ€
       `generate` λ²νΌμ λλ¬μ€λ€.      
       κ·Έλ¬λ©΄ importν μμ΄μ½μ μΉν°νΈλ‘ μ¬μ©ν  μ μκ² λλ€.       
      - <u>step 3</u>:          
      ν΄λΉ ν΄λλ₯Ό html νμΌμμ \<link> νκ·Έλ‘ μ°κ²° μμΌμ€λ€.      
      μΌλ° νμ€νΈ/font μ²λΌ μ¬μ©νλ©΄ λλ€.     

<br />
<br />
---
<details>
<summary>CLICK ME!</summary>  

- cf.  
  - β¨ Only μ μλ's κ°μ β¨
  - https://blog.stories.pe.kr/208
  - https://m.blog.naver.com/wailmi93/221992953137
  - https://hailey0.tistory.com/13
  - https://sejiwork.blogspot.com/2021/01/icomoon.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+Sejiwork+(%EC%B4%88%EA%B8%89+%EA%B0%9C%EB%B0%9C%EC%9E%90+sejiWork)&m=1
  - https://sonylove.tistory.com/1177
  - https://helpx.adobe.com/kr/illustrator/using/clipping-masks.html

</detials>   

