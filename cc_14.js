// Task 2: Adding Support Tickets Dynamically
fdocument.addEventListener("DOMContentLoaded", function () {
    const ticketContainer = document.getElementById("ticketContainer");
    const addTicketBtn = document.getElementById("addTicketBtn");

    // Event listener for Add Ticket button
    addTicketBtn.addEventListener("click", function () {
        const name = prompt("Enter customer name:");
        const issue = prompt("Enter issue description:");
        const priority = prompt("Enter priority (Low, Medium, High):");

        if (name && issue && priority) {
            createTicket(name, issue, priority);
        }
    });

    // Function to create a support ticket
    function createTicket(name, issue, priority) {
        const ticket = document.createElement("div");
        ticket.classList.add("ticket");

        if (priority.toLowerCase() === "high") {
            ticket.classList.add("high-priority");
        }

        ticket.innerHTML = `
            <h3>${name}</h3>
            <p>${issue}</p>
            <p><strong>Priority:</strong> ${priority}</p>
            <button class="resolve-btn">Resolve</button>
        `;

        // Event listener to remove ticket when resolved
        ticket.querySelector(".resolve-btn").addEventListener("click", function () {
            ticket.remove();
        });

        ticketContainer.appendChild(ticket);
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
    // Task 5: Inline Editing of Support Tickets
    ticketContainer.addEventListener("dblclick", function (event) {
        const ticket = event.target.closest(".ticket-card");
        if (ticket) {
            const nameElement = ticket.querySelector("h3");
            const issueElement = ticket.querySelector("p:nth-of-type(1)");
            const priorityElement = ticket.querySelector("p:nth-of-type(2)");

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = nameElement.textContent;

            const issueInput = document.createElement("input");
            issueInput.type = "text";
            issueInput.value = issueElement.textContent;

            const priorityInput = document.createElement("input");
            priorityInput.type = "text";
            priorityInput.value = priorityElement.textContent.replace("Priority: ", "");

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.classList.add("save-btn");

            ticket.innerHTML = "";
            ticket.append(nameInput, issueInput, priorityInput, saveBtn);

            saveBtn.addEventListener("click", function () {
                nameElement.textContent = nameInput.value;
                issueElement.textContent = issueInput.value;
                priorityElement.innerHTML = `<strong>Priority:</strong> ${priorityInput.value}`;

                ticket.innerHTML = "";
                ticket.append(nameElement, issueElement, priorityElement, saveBtn);

                if (priorityInput.value.toLowerCase() === "high") {
                    ticket.classList.add("high-priority");
                } else {
                    ticket.classList.remove("high-priority");
                }
            });
        }
    });

});
