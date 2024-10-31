document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiStepForm');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const formSteps = document.querySelectorAll('.form-step');

    let currentStep = 0;

    function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        prevBtn.disabled = stepIndex === 0;
        nextBtn.style.display = stepIndex === formSteps.length - 1 ? 'none' : 'inline';
        submitBtn.style.display = stepIndex === formSteps.length - 1 ? 'inline' : 'none';
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
        console.log(Object.fromEntries(new FormData(form)));
    });
    showStep(currentStep);
});