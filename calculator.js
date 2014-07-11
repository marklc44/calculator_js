window.onload = function() {

	// cache elements
	var numBtns = document.getElementsByClassName('num');
	var resultDisplay = document.getElementById('result_display_value');
	var operatorDisplay = document.getElementById('operator_display');
	var clearBtn = document.getElementById('clear');
	var enterBtn = document.getElementById('enter');
	var operators = document.getElementsByClassName('operator');
	var operatorDisplay = document.getElementById('operator_display');

	// track numbers
	var newNumber = true;
	var clearNumber = false;
	var num1 = '';
	var num2 = '';
	var answer;
	var currOperator = '';
	var tempNum = '';

	var calc = function(number1, number2) {
		num1 = parseInt(number1);
		num2 = parseInt(number2);
		clearDisplay();

		if (currOperator !== '') {
			answer = '';

			switch (currOperator) {
				case "+":
					return answer = num1 + num2;
					break;
				case "-":
					return answer = num1 - num2;
					break;
				case "*":
					return answer = num1 * num2;
					break;
				case "/":
					return answer = num1 / num2;
					break;
			}
		}
	};

	var displayNum = function(num) {
		resultDisplay.innerHTML += num; 
	};

	var clearDisplay = function() {
		resultDisplay.innerHTML = '';
	};

	clearBtn.onclick = function() {
		resultDisplay.innerHTML = '';
		num1 = '';
		num2 = '';
		currOperator = '';
		operatorDisplay.innerHTML = '';
		newNumber = true;
	};

	for (var i = 0; i < numBtns.length; i++) {
			numBtns[i].onclick = function() {

				if(newNumber) {
					num1 += this.innerHTML;
					tempNum = this.innerHTML;
					displayNum(tempNum);
				} else if (!newNumber && clearNumber === true) {
					resultDisplay.innerHTML = '';
					num2 += this.innerHTML;
					tempNum = this.innerHTML;
					clearNumber = false;
					displayNum(tempNum);
				} else {
					num2 += this.innerHTML;
					tempNum = this.innerHTML;
					displayNum(tempNum);
				}
				
				console.log("num1", num1);
				console.log("num2", num2);
		};
	}

	for (var i = 0; i < operators.length; i++) {
		operators[i].onclick = function() {
			currOperator = this.innerHTML;
			operator_display.innerHTML = currOperator;
			newNumber = false;
			clearNumber = true;

			console.log(currOperator);
		};
	}

	enterBtn.onclick = function() {
		displayNum(calc(num1, num2));
	};
};











