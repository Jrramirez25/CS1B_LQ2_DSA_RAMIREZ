// The following code takes user input and performs conditional checks, It prints the name based on age
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Cass Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

let iterations = Math.floor(age / 4); { // It calculate the iterations based on age

    if (course && classRole && age > 0) { // Check for the valid inputs
        if (course === "BSCS") { // It handle the BSCS course
            if (classRole === "Student" || 
                classRole === "Officer" ||
                classRole === "Teacher") { // It handle the different roles within BSCS
                    for (let i = 0; i < iterations; i++) {
                        console.log(name);
                    }
                } else {
                    console.log("Invalid class role for BSCS.");
                }
            } else if (course === "BSM" || course === "BAEL") { // It handle the BSM and BAEL course
                for (let i = 0; i < iterations; i++) {
                    console.log(name);
                }
            } else {
                console.log("Invalid course selected.");
            }
        } else {
            console.log("Please provide valid inputs for all fields.");
        }
    }


