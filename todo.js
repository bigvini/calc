const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}


function changeStatus(key, status) {

    list[key] = status;


}


function addTask(newTask) {
    list[newTask] = "To Do";

}

function deleteTask(key) {
    delete list[key];

}

function showList() {
    let todo = "";
    let progers = "";
    let done = "";


    for (key in list) {
        if (list[key] === "To Do") {
            todo += ` "${key}"\n`;
        } else if (list[key] === "In Progress") {
            progers += ` "${key}"\n`
        } else if (list[key] === "Done") {
            done += ` "${key}"\n`
        }
    }
    if (todo == "") todo = " -";
    if (progers == "") progers = " -";
    if (done == "") done = " -"

    console.log("To Do:\n" + todo + "In Progress:\n" + progers + "Done:\n" + done);
}


addTask("writen text")
showList();

changeStatus( "make a bed", "To Do")
deleteTask("writen text");

showList();