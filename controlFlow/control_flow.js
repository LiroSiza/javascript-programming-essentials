var userRole = "admin";
var accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
// +++++++++++++++++++++++++++++++++++++++++++++++++
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

// +++++++++++++++++++++++++++++++++++++++++++++++++
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

// +++++++++++++++++++++++++++++++++++++++++++++++++
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

// +++++++++++++++++++++++++++++++++++++++++++++++++
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

// +++++++++++++++ PRACTICE TASK +++++++++++++++++++
var userRole = "Enrolled Member";
var accessLevel = "";

switch (userRole) {
    case "Employee":
        accessLevel = "Dietary Services";
        break;
    case "Enrolled Member":
        accessLevel = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        accessLevel = "Partial access to facilitate Dietary Services only";
        break;
    case "Non-Subscriber":
        accessLevel = "Need to enroll or at least subscribe first to avail this facility - Dietary Services";
        break;
    default:
        accessLevel = "Unknown";
}
console.log("Is eligible to avai: ", accessLevel);