const formGrid = document.querySelector(".form-grid")
//name
const nameInput = document.querySelector("#nameInput");
const resumeName = document.querySelector("#resumeName");
//name end

// title-start
const resumeJobTitle = document.querySelector("#resumeJobTitle")
const jobTitleInput = document.querySelector("#jobTitleInput")
// title-End

// userEmail
const emailInput = document.querySelector("#emailInput")
const resumeEmail = document.querySelector("#resumeEmail")

// phone-number
const phoneInput = document.querySelector("#phoneInput")
const resumePhone = document.querySelector("#resumePhone")

// address
const addressInput = document.querySelector("#addressInput")
const resumeAddress = document.querySelector("#resumeAddress")

//profile-detaile
const summaryInput = document.querySelector("#summaryInput")
const resumeSummary = document.querySelector("#resumeSummary")

formGrid.addEventListener("input", (e) => {

    if (e.target.id === "nameInput") {
        resumeName.textContent = e.target.value;
    }
    else if(e.target.id === "jobTitleInput"){
        resumeJobTitle.textContent = e.target.value;
    }
    else if(e.target.id === "emailInput"){
        resumeEmail.innerHTML =  `<i class="fa-solid fa-envelope"></i>${e.target.value}`;
    }
    else if(e.target.id === "phoneInput"){
        resumePhone.innerHTML = ` <i class="fa-solid fa-phone"></i>${e.target.value}`
    }
    else if(e.target.id === "addressInput"){
        resumeAddress.innerHTML = `  <i class="fa-solid fa-location-dot"></i>${e.target.value}`
    }
    else if(e.target.id === "summaryInput"){
        resumeSummary.textContent  = e.target.value;
    }

});



// Educaitons
const educationContainer = document.querySelector("#educationContainer")
// degree onput
const degreeInput = document.querySelector(".degreeInput")
const studyField = document.querySelector(".studyField")
// institure-inpur
const institutionInput  = document.querySelector(".institutionInput")
const institution = document.querySelector(".institution")

// study-start-year
const startYearInput = document.querySelector(".startYearInput")
const studyYears = document.querySelector(".study-years")

// end-year
const endYearInput = document.querySelector(".endYearInput")

educationContainer.addEventListener("input",(e)=>{
if(e.target.classList.contains("degreeInput")){
    studyField.textContent = e.target.value;
}
else if(e.target.classList.contains("institutionInput")){
    institution.textContent = e.target.value
}
else if (
    e.target.classList.contains("startYearInput") ||
    e.target.classList.contains("endYearInput")
) {

    const startYear =
        educationContainer.querySelector(".startYearInput").value;

    const endYear =
        educationContainer.querySelector(".endYearInput").value;

    studyYears.textContent = `${startYear} - ${endYear}`;

}

})





