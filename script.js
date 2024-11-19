function nextStep(currentStep) {
  const currentElement = document.getElementById(`step-${currentStep}`);
  const nextElement = document.getElementById(`step-${currentStep + 1}`);
  currentElement.classList.remove('active');
  nextElement.classList.add('active');
}
