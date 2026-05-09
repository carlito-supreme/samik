function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const gatekeeper = document.getElementById('gatekeeper');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const errorMsg = document.getElementById('error');

    
    const secret = "1111";

    if (codeInput === secret) {
        
        gatekeeper.classList.add('hidden');
        
        welcomeScreen.classList.remove('hidden');
    } else {
       
        errorMsg.textContent = "Invalid code. Try again.";
        
        document.getElementById('codeInput').value = "";
    }
}


document.getElementById('codeInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});