const buttons = document.querySelectorAll('.completed_btn');
const calculation = document.getElementById('calculation');
const calculationSum = document.getElementById('calculation_sum');

buttons.forEach((btn) => {
    btn.addEventListener('click', function () {

        alert('Board updated Successfully');

        // button disabled
        btn.disabled = true;
        btn.style.opacity = '0.3';
        btn.style.cursor = 'not-allowed';
        btn.textContent = 'Completed';
        btn.style.color = 'black';

        // subtract 1 from task assigned
        let newCalculation = calculation.innerText - 1;
        if (newCalculation > 0) {
            calculation.innerText = newCalculation;
        }

        // sum 1 from 23 task
        let newCalculationSum = (+calculationSum.innerText) + 1;
        if (newCalculationSum > 0) {
            calculationSum.innerText = newCalculationSum;
        }

    });
});
