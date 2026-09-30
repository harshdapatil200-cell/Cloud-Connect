function showMessage() {
    alert("Welcome to CloudConnect! Your cloud journey starts here ☁");
}

function greetUser() {
    const name = document.getElementById("name").value.trim();
    const result = document.getElementById("result");

    if (name === "") {
        result.textContent = "Please enter your name.";
    } else {
        result.textContent = "Hello " + name + "! Your cloud application is working successfully. ☁";
    }
}
