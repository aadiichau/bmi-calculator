function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
  
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
      alert('Please enter valid values for height, weight, and age.');
      return;
    }
  
    const bmi = weight / ((height / 100) ** 2);
    const bmiCategory = getBMICategory(bmi);
    const result = `Your BMI is ${bmi.toFixed(2)}, which falls under ${bmiCategory} category. Your age is ${age} years.`;
  
    document.getElementById('result').innerText = result;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    else if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    else return 'Obesity';
  }
  