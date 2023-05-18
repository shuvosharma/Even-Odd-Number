function checkEvenOrOdd() {
    var numberInput = document.getElementById("numberInput");
    var number = parseInt(numberInput.value);
    
    var result;
    if (isNaN(number)) {
      result = "Invalid input";
    } else if (number % 2 === 0) {
      result = "Even";
    } else {
      result = "Odd";
    }
    
    var sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "Number: " + number + "<br>Result: " + result;
  }