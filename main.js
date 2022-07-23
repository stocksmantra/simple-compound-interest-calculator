 // we will use 0 for S.I and 1 for C.I
 const interestType = {
    si:0,
    ci:1,
}

// Default will S.I
let selectedInterest = interestType.si;



const SIButton = document.getElementsByClassName("si")[0];
const CIButton = document.getElementsByClassName("ci")[0];
const CIFrequency = document.getElementsByClassName("ci-freq")[0];
const resultWrapper = document.getElementsByClassName("result")[0];
const calculate = document.getElementsByClassName("btn")[0];

// Initially hidden
CIFrequency.style.display = 'none';
resultWrapper.style.display = 'none';

// Set interest type
const selectInterestType = (type) => {
    // reset when menu change
    reset();
    selectedInterest = type;
    updateInterestFeature();
}
// reset inputs and result
const reset =() => {
const PA = document.getElementById("pa").value;
const IR = document.getElementById("ir").value;
const DY = document.getElementById("dy").value;


 if (selectedInterest === interestType.ci) {
    const FY = document.getElementById("fy").value =" ";
   
 }
    resultWrapper.style.display = 'none';
}

// update UI
const updateInterestFeature = () => {
    if (selectedInterest  === interestType.si){
        CIButton.classList.remove('active');
        SIButton.classList.add('active');
        CIFrequency.style.display = 'none';
       
    } else {
        SIButton.classList.remove('active');
        CIButton.classList.add('active');
        CIFrequency.style.display = 'block';
    }
}

// calculate, Final amount
const calculateAmount =() => {
const PA = document.getElementById("pa").value;
const IR = document.getElementById("ir").value;
const DY = document.getElementById("dy").value;
const FY = document.getElementById("fy").value;

// Validation 
if (!PA || !IR || !DY || (window.getComputedStyle(CIFrequency).display !== "none" && !FY)) {
alert("All fields are required");
reset();
return;
}

if (PA<=0 || IR<=0 || DY<=0 || (window.getComputedStyle(CIFrequency).display !== "none" && FY<=0)){
alert("All fields are Grater than Zero");
reset();
return;
}

if (isNaN(PA) || isNaN(IR) || isNaN(DY)|| (window.getComputedStyle(CIFrequency).display !== "none" && isNaN(FY))){
alert("All values must be nueric only.");
reset();
return;
}
const finalAmount = document.getElementsByClassName("total-amount")[0];

let result = 0;
if (selectedInterest === interestType.si) {
    result =  PA * (1 + (((IR)/100) * DY));
}
if (selectedInterest === interestType.ci) {
    result = PA * Math.pow((1 + ((IR)/100 * FY)), FY*DY);
}
//   show result 
 resultWrapper.style.display = 'block';
finalAmount.innerHTML = result;

}

// set Event
SIButton.addEventListener('click', () => {
    selectInterestType(interestType.si)
    SIButton.classList.add('active');
    
})
CIButton.addEventListener('click', () => {
    selectInterestType(interestType.ci)
    CIButton.classList.add('active'); 
   
})
calculate.addEventListener("click" , calculateAmount);