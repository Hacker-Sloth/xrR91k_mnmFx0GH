(function(){
    const username = prompt("Enter Username:");
    const password = prompt("Enter Password:");

    const validCredentials = [
        {username: "Admin", password: "ad5m123"},
        {username: "Lihan", password: "IloveTiggy"},
    ];

    function validateCredentials(username, password) {
        return validCredentials.some(cred => cred.username === username && cred.password === password);
    }

    if (!validateCredentials(username, password)) {
        alert("Invalid Username or Password");
        return;
    }

    // Load the core script from Repository B if authentication succeeds
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/hacker-sloth/j2Bz7Lk_fQ4t89Y/main/j2Bz7Lk_fQ4t89Y.js';
    document.body.appendChild(script);
})();
