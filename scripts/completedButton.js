const buttons = document.querySelectorAll('.completed_btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', function () {

        // alert
        alert('Board updated Successfully');

        const card = btn.closest('.rounded-xl');
        const taskTitle = card.querySelector('.title_history').innerText;

        // timestamp
        const time = new Date().toLocaleTimeString();


        // button disabled
        btn.disabled = true;
        btn.style.opacity = '0.3';
        btn.style.cursor = 'not-allowed';
        btn.textContent = 'Completed';

        // subtract 1 from task assigned
        const calculation = document.getElementById('calculation');
        calculation.innerText = calculation.innerText - 1;

        // add 1 to total completed count
        const calculationSum = document.getElementById('calculation_sum');
        calculationSum.innerText = (+calculationSum.innerText) + 1;

        // add history entry to activity log
        const historySection = document.getElementById('history_section');

        const p = document.createElement('p');
        p.classList.add('bg-[#F4F7FF]', 'p-3', 'rounded-lg', 'mb-3', 'text-sm');
        p.innerText = `You have completed the task ${taskTitle} at ${time}`;
        historySection.appendChild(p);
    });
});
