document.getElementById("GYM MANAGE").addEventListener("submit", async function(event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        joiningDate: document.getElementById("joiningDate").value,
        hours: document.getElementById("hours").value,
        slot: document.getElementById("slot").value,
        sheetId: "AKfycbx4DHpKFve28yq4n0G6T1kByJY6gZ58_YAbO2Ja5tghw2KDugmbz0AutbIk3eADx0YgEg", // Replace with your Google Sheet ID
        sheetUrl: "https://docs.google.com/spreadsheets/d/1tgx4rOmv3tV1Kent4VO8xYsUa8eB7aRTxCVMqV3N7eI/edit?usp=sharing" // Replace with your Google Sheet URL
    };

    let scriptURL = "https://script.google.com/macros/s/AKfycbx4DHpKFve28yq4n0G6T1kByJY6gZ58_YAbO2Ja5tghw2KDugmbz0AutbIk3eADx0YgEg/exec"; // Replace with your Google Apps Script Web App URL

    try {
        let response = await fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Error submitting form. Please try again.");
        console.error("Error:", error);
    }
});
