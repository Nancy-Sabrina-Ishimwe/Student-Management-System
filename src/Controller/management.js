const {students} =require("../db/s2db");

const add = (newStudent) =>{
    newStudent.id = students.length + 1;// for me to add a new student have to look for the student in the all students array
    students.push(newStudent);

    console.log("\n This is a new student added \n");
    console.log(students);
};

const displayAll = () => {
    console.log("\n All students added");
    console.log(students);
}

const update = (id,key,value)=>{
var exists = students.find(ele=>ele.id === id);
if(!exists){
    console.log("Student not found");
}else{
    exists[key] = value;
console.log("student updated");
console.log(exists);
}
}

const updateMany = (id,obj) => {
    var exists = students.find(ele=>ele.id === id);
    if(!exists) {
        console.log("Student not found");
    } else {
        for(key in obj){
            exists[key] = obj[key];
            console.log("Student updated")
        }
    }
}


const remove = (id,obj) => {
    var exists = students.find(ele=>ele.id === id);
    if(!exists) {
        console.log("Student not found");
    } else {
        // var index = students.indexOf(exists);
        // students.splice(index,1);
        // console.log("Student removed");
       // remaining = students.length;
        var remaining = [];
        remaining = students.filter(ele=>ele.id !==id);
        console.log(remaining);
    }
}
module.exports = {
    add,
    displayAll,
    update,
    updateMany,
    remove

}


