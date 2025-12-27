const transactions = [
    {
        id: 1,
        description:"Monthly Salary",
        amount:3500,
        type:"income",

    },

    {
        id: 2,
        description:"Freelance Writing",
        amount:-1500,
        type:"expense",

    },
]


class BudgetTracker {
    constructor(){
        this.transactions = this.loadTransactions();
        this.form = document.getElementById("transactionForm");
        this.transactionList = document.getElementById("transactionList");
        this.balanceElement = document,getElementById("balance");

        this.initEventListeners();
        this.renderTransactions();
        this.updateBalance();
    }

    loadTransaction(){
        
        return transactions;
    }
    initEventListners(){

    }

    renderTransaction(){
        this.transactionList.innerHTML = "";
        this.transactions.slice()
        .sort((a, b) => b.id - a.id)
        .forEach((transaction) => {
            const transactionDiv = document.createElement("div");
            transactionDiv.classList.add("transaction", transaction.type);
            transactionDiv.innerHTML = ''
            <span>(transaction.description)</span>
                    <span class ="transaction-amount-container" 
                    >$${Math.abs(transaction.amount).toFixed(
                        2
                    )}<button class="delete-btn" data-id="${
                    transaction.id
                }">Delete</button></span>

                     '';

                     this.transactionList.appendChild(transactionDiv);
                });

                this.attachDeleteEventListners();

    }
    attachDeleteEventListners() {
        this.transactionList.querySelectorAll(".delete-btn").forEach(button =>{
            button.addEventListener("click",() =>{
                this.deleteTransaction(Number(button.dataset.id))

            })
        })
    }

    deleteTransaction(id){
        this.transactions = this.transactions.filter(
            (transaction) => transaction.id !== id

        );

    }

    updateBalance(){

    }
}

const budgetTracker = new BudgetTracker();