let authorized = true;
let role       = "employee";
let program;

if(authorized){
    switch (role) {
        case "employee":
            program = "access to Dietary Services";
            break;
        case "enrolled member":
            program = "access to Dietary Services & one-on-one interaction with dietician";
            break;
        case "subscriber":
            program = "partial access to facilitate Dietary Services";
            break;
        case "non-subscriber":
            program = "need to enroll or subscribe first";
            break;
    }
    console.log(`As a(n) ${role} you ${program}`);
} 
else {
    console.log("You don't have access to run the program, please log in");
}