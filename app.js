const incomeInput = document.getElementById("incomeInput");
const expenseInput = document.getElementById("expenseInput");
const netResult = document.getElementById("netResult");

function updateResult() {
  const income = Number(incomeInput.value) || 0;
  const expense = Number(expenseInput.value) || 0;
  netResult.textContent = income - expense;
}

incomeInput.addEventListener("input", updateResult);
expenseInput.addEventListener("input", updateResult);

