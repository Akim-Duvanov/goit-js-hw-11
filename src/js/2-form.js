const formData = {
    email: "",
    message: "",
}

const keyName = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

// save inout value in local storage key logic
function handleInput(event) {
    if (event.target.nodeName !== "INPUT" && event.target.nodeName !== "TEXTAREA") {
        return;
    }
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email" || name === "message") {
        formData[name] = value;
        localStorage.setItem(keyName, JSON.stringify(formData));
    }
}

// set input values after refreshing page logic
if (localStorage.getItem(keyName)) {
    let parsedData = {};
    try {
        parsedData = JSON.parse(localStorage.getItem(keyName)) || {};
    } catch (e) {
        alert("Invalid JSON in localStorage:");
    }
    form.elements.email.value = parsedData.email || "";
    form.elements.message.value = parsedData.message || "";
    for (let elem in formData) {
        formData[elem] = parsedData[elem] || "";
    }
}

// submit logic
function handleSubmit(event) {
    event.preventDefault();
    for (let elem in formData) {
        if (formData[elem].trim() === "") {
            alert("Fill please all fields");
            return;
        }
    }
    console.log(formData);
    localStorage.removeItem(keyName);
    for (let elem in formData) {
        formData[elem] = "";
    }
    form.reset();
}
