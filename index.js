const form = document.getElementById("patientForm");
const tableBody = document.querySelector("#patientTable tbody");

window.onload = () => {
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.forEach(addRowToTable);
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const patient = {
        id: document.getElementById("patientId").value,
        name: document.getElementById("fullName").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        disease: document.getElementById("disease").value,
        doctor: document.getElementById("doctor").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

    addRowToTable(patient);
    form.reset();
});

function addRowToTable(patient) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.gender}</td>
        <td>${patient.disease}</td>
        <td>${patient.doctor}</td>
        <td>${patient.phone}</td>
        <td>${patient.email}</td>
    `;
    tableBody.appendChild(row);
}
