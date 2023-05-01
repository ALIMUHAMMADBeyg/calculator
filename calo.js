//.calculator {
/*background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    margin: auto;
  }
  
  .calculator button {
    background-color: #e6e6e6;
    border: none;
    border-radius: 5px;
    color: #333;
    font-size: 20px;
    margin: 5px;
    padding: 10px 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  
  .calculator button:hover {
    background-color: #ccc;
  }
  
  .calculator button:active {
    background-color: #999;
    color: #fff;
  }
  
  .calculator #display {
    background-color: #fff;
    border: none;
    border-radius: 5px;
    color: #333;
    font-size: 24px;
    height: 60px;
    margin: 10px;
    text-align: right;
    padding: 10px;
   // width: 260px;//
  }
  */
  function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  //functionappentoresult(value){
    //document.getElementById('result').value += value;
  //}
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substr(0, result.length - 1);
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    let finalResult = eval(result);
    document.getElementById('result').value = finalResult;
  }
  