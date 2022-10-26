'use strict';

const filter = ([...students], failed) => {

    for (const failedStudent of failed) {
        if (students.includes(failedStudent)) {
            const index = students.indexOf(failedStudent);
            students.splice(index, 1);
        }
    }
    return students;
};

const allStud = ['Ivanov', 'Petrov', 'Sidorov', 'Kuznecov', 'Cmirnov', 'Vasechkin'];
const failedStudents = ['Petrov', 'Kuznecov', 'Cmirnov'];

const successStudents = filter(allStud, failedStudents)
console.log(': ',successStudents);