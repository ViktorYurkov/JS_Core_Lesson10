
function show(data) {
    console.log(data);
}

var Student = [];

Student.push({
        name: 'Viktor',
        sex: 'male',
        age: 20
});
Student.push({
        name: 'Mari',
        sex: 'female',
        age: 19
});
Student.push({
        name: 'Alla',
        sex: 'female',
        age: 21
});
Student.push({
        name: 'Petro',
        sex: 'male',
        age: 18
});
Student.push({
        name: 'Ivan',
        sex: 'male',
        age: 20
});

function filterAgeSex(value){
    return (value.sex == 'male' & value.age < 21)
}
var filterStudent = Student.filter(filterAgeSex);
filterStudent.forEach(show);


function mapStudent(value){
    return (value.yearsUnderAge = (21 - value.age))
}
filterStudent.map(mapStudent);
filterStudent.forEach(show);

function sortStudent(obj1, obj2){
    var obj1Name = obj1.name.toLowerCase();
    var obj2Name = obj2.name.toLowerCase();
    
    if(obj1.age > obj2.age){
       return 1;
       }else if (obj1.age < obj2.age){
        return -1;
       }else if (obj1Name>obj2Name){
        return 1;
       }else if (obj1Name<obj2Name){
        return -1;
       }
        return 0;
}

filterStudent.sort(sortStudent);
filterStudent.forEach(show);
