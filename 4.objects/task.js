function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let st1 = new Student("Kate", "Female", 18);
let st2 = new Student("Alexandr", "Male", 19);
let st3 = new Student("Maria", "Female", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

st1.setSubject("Math");

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks){
  if(this.marks === undefined){ 
    this.marks = marks;
    } else {
      this.marks.push(marks);
    }
}

Student.prototype.getAverage = function (){
  let sum = 0;
  if(this.marks === undefined){ 
    this.average = undefined;
    } else {
      this.marks.forEach((item) => {sum += (item)});
      return sum / this.marks.length; 
    }
}

Student.prototype.exclude = function(reason){
  delete(this.subject);
  delete(this.marks);
  this.excluded = reason;
}
