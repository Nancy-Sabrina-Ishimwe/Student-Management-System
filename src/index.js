const{add,displayAll,update,remove}=require("./Controller/management.js");

//then we add the new student we want to add in the database

const newStudent1 = {
    name: 'Yvan Burinda',
    age:11,
    gender:'Male',
    location: 'Karongi',
};


add(newStudent1);
displayAll();
update(5,"location","Sweden");

remove(2);
