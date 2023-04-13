

// const firstName = document. forms["Form"]["firstname"].value;
// const middlename = document.forms["Form"]["middlename"].value;
// const lastname = document.forms["Form"]["lastname"].value;
// const email = document.forms["Form"]["email"].value;
// const pass = document.forms["Form"]["pass"].value;
// const pass2 = document.forms["Form"]["pass2"].value;




function validateForm1() {
    const firstName = document.forms["Form"]["firstname"].value;
    if (firstName == "") {
        alert("Enter Your Firstname");
        return false;
    }
}

function validateForm2() {
    const middlename = document.forms["Form"]["middlename"].value;
    if (middlename == "") {
        alert("Enter Your Middlename");
        return false;
    }
}

function validateForm3() {
    const lastname = document.forms["Form"]["lastname"].value;
    if (lastname == "") {
        alert("Enter Your Lastname");
        return false;
    }
}

function validateForm4() {
    const email = document.forms["Form"]["email"].value;
    if (email == "") {
        alert("Enter Your Email");
        return false;
    }
}

function validateForm5() {
    const pass = document.forms["Form"]["pass"].value;
    if (pass == "") {
        alert("Enter Your Password");
        return false;
    }
}

function validateForm6() {
    const pass2 = document.forms["Form"]["pass2"].value;
    if (pass2 == "") {
        alert("Enter Your Re-Password");
        return false;
    }
}

validateForm1()
validateForm2()
validateForm3()
validateForm4()
validateForm5()
validateForm6()


// if (firstName == "") {
//     alert("Enter Your Firstname");
// } else if (middlename == "") {
//     alert("Enter Your Middlename");
// } else if (lastname == "") {
//     alert("Enter Your Middlename");
// } else if (email == "") {
//     alert("Enter Your Middlename");
// } else if (pass == "") {
//     alert("Enter Your Middlename");
// } else if (pass2 == "") {
//     alert("Enter Your Middlename");
// } else{return false}
    