// Task 2: Adding Support Tickets Dynamically
function createTicket(name, issue, priority) {
    const ticket = document.createElement("div");
    ticket.classList.add("ticket-card");

    if (priority.toLowerCase() === "high") {
        ticket.classList.add("high-priority");
    }

    const nameElement = document.createElement("h3");
    nameElement.textContent = name;

    const issueElement = document.createElement("p");
    issueElement.textContent = issue;

    const priorityElement = document.createElement("p");
    priorityElement.innerHTML = `<strong>Priority:</strong> ${priority}`;

    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    ticket.append(nameElement, issueElement, priorityElement, resolveBtn);
    ticketContainer.appendChild(ticket);
}

addTicketBtn.addEventListener("click", function () {
    const name = prompt("Enter Customer Name:");
    const issue = prompt("Enter Issue Description:");
    const priority = prompt("Enter Priority (Low, Medium, High):");

    if (name && issue && priority) {
        createTicket(name, issue, priority);
    }
});
    // Task 3: Highlighting High Priority Tickets
    function highlightHighPriorityTickets() {
        const tickets = Array.from(document.querySelectorAll(".high-priority"));
        tickets.forEach(ticket => {
            ticket.style.border = "3px solid red";
        });
    }
    // Task 4: Implementing Ticket Resolution with Event Bubbling
    ticketContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("resolve-btn")) {
            event.target.parentElement.remove();
            event.stopPropagation();
        } else {
            console.log("Ticket Clicked:", event.target.closest(".ticket-card").querySelector("h3").textContent);
        }
    });
