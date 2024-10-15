const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

let experiences = [];

function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const ux = document.getElementById('userExperience').value;
    alert('Thank you for your valuable feedback')
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';

    experiences.push(ux);

    const mainContainer = document.getElementById('uxs');
    mainContainer.innerHTML="";
    for(let i = 0; i < experiences.length; i++){
        let div = document.createElement("div");
        div.innerHTML = `<p>${experiences[i]}</p>`;
        div.style.backgroundColor = "lightblue";
        div.style.padding = "10px";
        div.style.margin = "5px 0";
        mainContainer.appendChild(div);
    }
}

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });
