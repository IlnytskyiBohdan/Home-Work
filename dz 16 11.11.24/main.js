"use strict";

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = Array(25).fill(null);
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length || 0;
  }

  markAttendance(isPresent) {
    const index = this.attendance.indexOf(null);
    if (index !== -1) this.attendance[index] = isPresent;
  }

  present() {
    this.markAttendance(true);
  }

  absent() {
    this.markAttendance(false);
  }

  getAttendanceRate() {
    let attended = 0,
      totalClasses = 0;
    this.attendance.forEach((item) => {
      if (item !== null) {
        totalClasses++;
        if (item) attended++;
      }
    });
    return totalClasses ? attended / totalClasses : 0;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (averageGrade > 90 && attendanceRate > 0.9) return "Молодец!";
    if (averageGrade > 90 || attendanceRate > 0.9) return "Хорошо, но можно лучше.";
    return "Редиска!";
  }

  printInfo() {
    console.log(`Возраст: ${this.getAge()}`);
    console.log(`Средний балл: ${this.getAverageGrade()}`);
    console.log(`Итог: ${this.summary()}`);
  }
}

const studentData = [
  { firstName: "Иван", lastName: "Иванов", birthYear: 2003, grades: [95, 90, 92], attendance: [true, true, true] },
  { firstName: "Анна", lastName: "Смирнова", birthYear: 2004, grades: [95, 88, 92], attendance: [true, false, true] },
  { firstName: "Алексей", lastName: "Кузнецов", birthYear: 2005, grades: [60, 70, 65], attendance: [false, false, false] },
];

const students = studentData.map((data) => {
  const student = new Student(data.firstName, data.lastName, data.birthYear);
  student.grades.push(...data.grades);
  data.attendance.forEach((mark) => student.markAttendance(mark));
  return student;
});

students.forEach((student) => student.printInfo());
