
    
function calculateInterest(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);
    var interestType = document.getElementById('interestType').value;

    var interest, totalRs;

    if (interestType === 'simple') {
        // Simple Interest
        interest = (principal * rate * time) / 100;
        totalRs = principal + interest;
    } else {
        // Compound Interest
        totalRs = principal * Math.pow((1 + (rate / 100)), time);
        interest = totalRs - principal;
    }

    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h3>Principal Amount: " + principal + "</h3>"
        + "<h3>" + interestType + " Interest Amount: " + interest + "</h3>"
        + "<h3>Total Amount: " + totalRs + "</h3>";
}
