


const validUser = { username: "frontdesk", password: "test1234" };

function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === validUser.username && pass === validUser.password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = "Invalid login. Try again.";
    }
}

document.getElementById('visitorForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('vname').value;
    const company = document.getElementById('vcompany').value;
    const host = document.getElementById('vhost').value;
    const notes = document.getElementById('vnotes').value;
    alert(`Visitor Signed In:\nName: ${name}\nCompany: ${company}\nHost: ${host}\nNotes: ${notes}`);
    document.getElementById('submit-message').textContent = "Visitor successfully signed in!";
    document.getElementById('visitorForm').reset();
});
