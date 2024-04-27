const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `${height} is not valid`
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `${weight} is not valid`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`

        
    // Displaying message based on bmi

        let bmiCategory = ''

    if(bmi<18.6){
        bmiCategory = 'Under weight'
    }else if(bmi>=18.6 && bmi<=24.9){
        bmiCategory = 'Normal weight'
    }else{
        bmiCategory = 'Over Weight'
    }

    result.innerHTML += `You are ${bmiCategory}`
    }

})