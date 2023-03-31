# [Calculator](https://joaoito.github.io/Calculator/) <img height="30" src="./assets/img/calculator.png">

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Calculator**
| :label: Tecnologias | javascript, html, css, 
| :rocket: URL         | https://github.com/JoaoIto/Calculator
| :fire: Desafio     | https://github.com/JoaoIto/Calculator

<img src="./assets/img/Print.png#vitrinedev">

**Esse projeto de uma calculadora, feita em JS em que a função de todas as operações matemáticas!**

Quando comecei esse projeto, tinha ideia de que o JS poderia ser bem difícil, mesmo assim percebi que era até bem simples, se baseando apenas numa função onClick para cada tecla da calculadora de base, e assim diferenciava somente para cada uma as teclas de: reset, back, e obviamente a de calcular, "=".

## Código JS:

```jsx
// Função que insere o número a partir da função onclick;
function insert(num){
    let number = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = number + num
};
// Função de limpar, (reset);
function clean(){
    document.getElementById("calc").innerHTML = "";
};
//Função de apagar algarismo por algarismo;
function back(){
    let result = document.getElementById("calc").innerHTML;
    document.getElementById("calc").innerHTML = result.substring(0, result.length -1)
};
// Função padrão de JS para calcular com oque tem no input de algarismo;
function calc(){
    let result = document.getElementById("calc").innerHTML;
    if(result){
        document.getElementById("calc").innerHTML = eval(result)
    };
};
```
---
## Tests

Here are some example test cases for the provided code:

- **Test case 1: Click on numbers**

```js
// Test that clicking on a number adds the number to the display
document.getElementById("calc").innerHTML = ""
insert(3)
assert(document.getElementById("calc").innerHTML === "3", "Error: Number was not inserted correctly");

```

- **Test case 2: Click on reset button**

```js
// Test that pressing the clean button clears the display
document.getElementById("calc").innerHTML = "123"
clean()
assert(document.getElementById("calc").innerHTML === "", "Error: Display was not cleared correctly");

```

- **Test case 3: Click on backspace button**

```js
// Test that clicking the back button removes the last digit from the display
document.getElementById("calc").innerHTML = "123"
back()
assert(document.getElementById("calc").innerHTML === "12", "Error: Last digit was not removed correctly");

```

- **Test case 4: Calculate simple math expression**

```js
// Test that entering a math expression and clicking equals calculates the result
document.getElementById("calc").innerHTML = "2+2"
calc()
assert(document.getElementById("calc").innerHTML === "4", "Error: Calculation was not correct");

```

**

---These tests cover basic functionality of the calculator. More tests could be added to handle edge cases, such as division by zero or entering invalid characters. Additionally, it would be useful to test the behavior of the calculator when multiple operators are entered or when parentheses are used.**

---
