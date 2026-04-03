
// BASIC CONCEPT OF OBJECT
// HOW TO DECLEAR A OBJECT

const bottle ={
    size : 45,
    color: 'white',
    bottle_color: 'green',
    clean: true
}
console.log(bottle);

const subject ={
    name: 'database management system',
    teacher: 'nahid bai',
    position: 'lecturer',
    age: 20,
    chaprter: ['sql','relational algebra'],
    accelerate: function(){
        console.log('excelent subject');
    }
}
subject.accelerate();
console.log(subject);