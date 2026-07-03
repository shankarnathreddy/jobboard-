const container = document.getElementById("applicationsContainer");

const clearBtn = document.getElementById("clearBtn");

let applications =
JSON.parse(localStorage.getItem("applications")) || [];

displayApplications();

function displayApplications(){

    if(applications.length===0){

        container.innerHTML="<h3>No Applications Found</h3>";
        clearBtn.style.display="none";

        return;
    }

    let html="";

    applications.forEach(app=>{

        html+=`

        <div class="application-card">

            <h3>${app.name}</h3>

            <p><strong>Job:</strong> ${app.jobTitle || "General Application"}${app.jobCompany ? " at " + app.jobCompany : ""}</p>

            <p><strong>Email:</strong> ${app.email}</p>

            <p><strong>Phone:</strong> ${app.phone}</p>

            <p><strong>Experience:</strong> ${app.experience}</p>

            <p><strong>Resume:</strong> ${app.resume}</p>

            <p><strong>Applied:</strong> ${app.appliedDate}</p>

            <button
            class="delete-btn"
            onclick="deleteApplication(${app.id})">

            Delete

            </button>

        </div>

        `;

    });

    container.innerHTML=html;

}

function deleteApplication(id){

    applications=applications.filter(app=>app.id!==id);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    displayApplications();

}

clearBtn.addEventListener("click",()=>{

    if(confirm("Delete all applications?")){

        localStorage.removeItem("applications");

        applications=[];

        displayApplications();

    }

});