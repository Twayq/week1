const profileImage = document. querySelector("#profileImage");
const firstNameSpan = document. querySelector("#firstName");
const ageSpan = document. querySelector("#age") ;
const statusSpan = document. querySelector("#status");
const btnUpdateProfile = document. querySelector("#updateBtn");
const isWizard = confirm("Are u a wizard?");

if(isWizard === true){
    console.log("Welcome to hogwarts!")
}  
else{
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = "15";
    statusSpan.innerHTML = "Muggle";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = "27";
    statusSpan.innerHTML = "Tomb Raider";
});
