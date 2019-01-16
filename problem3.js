//Put the start of your program in a main function.
// Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose.
// Repeat this five times.

function main() {
    var arr = [];
    var quest = parseInt(prompt("Is a teacher, student, or parent checking in?"));

    switch (quest) {
        case 'teacher':
            arr.push("teacher");
            break;
        case 'student':
            arr.push("student");
            break;
        case 'parent':
            arr.push("parent");
            break;
        default:
            console.log("ERROR");
    }
}
main();

