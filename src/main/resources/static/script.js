const BASE = "http://localhost:8080/customer";

function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
}

function getCustomer() {
    return {
        id: val("id"),
        firstName: val("firstName"),
        lastName: val("lastName"),
        email: val("email"),
        dob: val("dob"),
        mobileNumber: val("mobileNumber"),
        address: val("address"),
        idProof: val("idProof")
    };
}

function getSim() {
    return {
        customerId: val("customerId"),
        simNumber: val("simNumber"),
        iccid: val("iccid"),
        imei: val("imei"),
        mobileNumber: val("mobileNumber"),
        networkType: val("networkType"),
        planName: val("planName")
    };
}

function show(message, success = true) {

    const box = document.getElementById("responseBox");

    if (!box) {
        alert(message);
        return;
    }

    box.innerText = message;
    box.style.display = "block";

    if (success) {
        box.style.background = "#d4edda";
        box.style.color = "#155724";
        box.style.border = "1px solid #28a745";
    } else {
        box.style.background = "#f8d7da";
        box.style.color = "#721c24";
        box.style.border = "1px solid #dc3545";
    }
}

async function addCustomer() {

    try {

        const customer = getCustomer();

        customer.id = null;

        if (!customer.firstName ||
            !customer.lastName ||
            !customer.email ||
            !customer.dob ||
            !customer.mobileNumber) {

            show("Please fill all required fields.", false);
            return;
        }

        const res = await fetch(BASE + "/add", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(customer)

        });

        const msg = await res.text();

        show(msg, res.ok);

        if (res.ok) {

            loadDashboard();

            document.querySelectorAll("input").forEach(input => {

                if (input.id !== "id") {

                    input.value = "";

                }

            });

        }

    }

    catch (error) {

        show("Unable to connect to backend.", false);

    }

}
async function validateCustomer() {
    try {
        const res = await fetch(BASE + "/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(getCustomer())
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function validateDetails() {
    try {
        const res = await fetch(BASE + "/validateDetails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(getCustomer())
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function addSim() {
    try {
        const sim = getSim();

        if (!sim.customerId) {
            show("Customer ID is required for SIM.");
            return;
        }

        const res = await fetch(BASE + "/addSim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sim)
        });

		const msg = await res.text();
		show(msg, res.ok);

		if (res.ok) {
		    loadDashboard();
		}
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function validateSim() {
    try {
        const res = await fetch(BASE + "/validateSim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(getSim())
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function activateSim() {
    try {
        const sim = getSim();

        if (!sim.simNumber) {
            show("Please enter SIM number");
            return;
        }

        const res = await fetch(BASE + "/activateSim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ simNumber: sim.simNumber })
        });

        const msg = await res.text();
		show(msg, res.ok);

		if (res.ok) {
		    loadDashboard();
		};
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function deactivateSim() {
    try {
        const sim = getSim();

        if (!sim.simNumber) {
            show("Please enter SIM number");
            return;
        }

        const res = await fetch(BASE + "/deactivateSim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ simNumber: sim.simNumber })
        });

		const msg = await res.text();
		show(msg, res.ok);

		if (res.ok) {
		    loadDashboard();
		}
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function deleteSim() {
    try {
        const sim = getSim();

        if (!sim.simNumber) {
            show("Please enter SIM number");
            return;
        }

        const res = await fetch(BASE + "/deleteSim/" + sim.simNumber, {
            method: "DELETE"
        });

		const msg = await res.text();
		show(msg, res.ok);

		if (res.ok) {
		    loadDashboard();
		}
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function updateAddress() {
    try {
        const customer = getCustomer();

        if (!customer.id) {
            show("Please enter customer ID");
            return;
        }

        const res = await fetch(BASE + "/updateAddress/" + customer.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ address: customer.address })
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function updateIdProof() {
    try {
        const customer = getCustomer();

        if (!customer.id) {
            show("Please enter customer ID");
            return;
        }

        const res = await fetch(BASE + "/updateIdProof/" + customer.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idProof: customer.idProof })
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function validateId() {
    try {
        const customer = getCustomer();

        if (!customer.id) {
            show("Please enter customer ID");
            return;
        }

        const res = await fetch(BASE + "/validateId", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: customer.id })
        });

		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}

async function getOffers() {
    try {
        const sim = getSim();

        if (!sim.simNumber) {
            show("Please enter SIM number");
            return;
        }

        const res = await fetch(BASE + "/offers/" + sim.simNumber);
		const msg = await res.text();
		show(msg, res.ok);
    } catch (error) {
        show("Error: Unable to connect to backend");
    }
}
async function loadDashboard() {

    try {

        const response = await fetch(BASE + "/dashboard");

        if (!response.ok) {
            return;
        }

        const data = await response.json();

        const customer = document.getElementById("customerCount");
        const sim = document.getElementById("simCount");
        const active = document.getElementById("activatedCount");
        const inactive = document.getElementById("inactiveCount");

        if (customer) customer.innerText = data.totalCustomers;
        if (sim) sim.innerText = data.totalSims;
        if (active) active.innerText = data.activeSims;
        if (inactive) inactive.innerText = data.inactiveSims;

    } catch (e) {

        console.log("Dashboard data unavailable");

    }

}
window.onload = function() {
    loadDashboard();
};