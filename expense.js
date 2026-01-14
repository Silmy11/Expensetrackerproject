// ---------- ELEMENTS ----------
const addBtn = document.querySelector("button");
const amountInput = document.getElementById("Number");

const typeSelect = document.querySelectorAll("select")[0];
const categorySelect = document.querySelectorAll("select")[1];

// summary values
const balanceEl = document.querySelector(".total-balance h1");
const incomeEl = document.querySelector(".income h4");
const expenseEl = document.querySelector(".expense h4");
const totalExpenseEl = document.getElementById("total");
const foodEl=document.getElementById("food-amount");
const entertainmentEl=document.getElementById("entertainment-amount");
const shoppingEl=document.getElementById("shopping-amount");
const healthEl=document.getElementById("health-amount");

// recent transactions heading
const recentHeading = document.getElementById("recent-transactions");

// ---------- DATA ----------
let balance = 12000;
let income = 15000;
let expense = 10000;
let totalExpense = 40000;


// ---------- ADD TRANSACTION ----------
addBtn.addEventListener("click", function () {
  const amount = Number(amountInput.value);
  const type = typeSelect.value;
  const category = categorySelect.value;

  if (!amount || amount <= 0) {
    alert("Enter your valid amount");
    return;
  }

  // ---- create transaction newRow ----
  const newRow = document.createElement("div");
  newRow.className = "done";

  const name = document.createElement("span");
  name.innerText = category;

  const value = document.createElement("span");

  if (type === "Income") {
    value.innerText = `+$${amount}`;
    value.className = "greencolor";

    income += amount;
    balance += amount;
  }
   else {
    value.innerText = `-$${amount}`;
    value.className = "red";

    expense += amount;
    totalExpense += amount;
    balance -= amount;
  }

  
  newRow.appendChild(name);
  newRow.appendChild(value);

  
  recentHeading.insertAdjacentElement("afterend", newRow);

  incomeEl.innerText = `$${income}`;
  expenseEl.innerText = `$${expense}`;
  balanceEl.innerText = `$${balance}`;
  totalExpenseEl.innerText = `$${totalExpense}`;

  // clear input
  amountInput.value = "";
});
