//Do the above program until the user enter's 'q'.
// Also, print and add to the array via a function call to the appropriate teacher/student/parent function.

function main() {
    var quest = parseInt(prompt("Is a teacher, student, or parent checking in?"));
    var arr = [];

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
}
main();
