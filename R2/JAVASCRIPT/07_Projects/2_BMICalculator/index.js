const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `${height} is not a valid height`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `${weight} is not a valid weight`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // BMI Result with Category
        let category = "";
        if (bmi < 18.6) {
            category = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Weight";
        } else {
            category = "Overweight";
        }

        results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
    }
})