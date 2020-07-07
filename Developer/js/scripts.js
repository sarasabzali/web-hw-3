// const lang = ["HTML", "CSS", "JavaScript", "PHP", "Swift", "Java"];
// const mainLang = 3;

// console.log("مرحبا بك في برنامج توظيف المبرمجين");

// let name = prompt("ما اسمك ؟");
// let age = parseInt(prompt("كم عمرك؟"));
// let experience = parseInt(prompt("كم عدد سنوات الخبره لديك؟"));

// console.log("لغات البرمجة ");
// console.log("1. " + lang[0]);
// console.log("2. " + lang[1]);
// console.log("3. " + lang[2]);
// console.log("4. " + lang[3]);
// console.log("5. " + lang[4]);
// console.log("6. " + lang[5]);
// for ( let i = 1; i <= lang.length; i++ ){
//     console.log(i + ". " + lang[i - 1]);
// }

// let skill = prompt("اختر اللغة");

// let skill2 = prompt("اختر لغة أخرى");

// if ((age > 25 && age < 40) && (experience > 3) && (skill == mainlang[2] || 
// skill2 == mainlang[2])
// ) {
//     console.log("مقبول");
// } else {
//     console.log("مرفوض");
// }

//  -----------------------------------------------

// let f_temp = [32, 70, 99, 106];


// function logger(f_temp) {
//     for (let i = 0; i < f_array.length; i++) {
//         console.log (f_array[i]);
//     }
// }
// logger(array);
// let array = [1, 2, 3];


// let f_temp = [32, 70, 99, 106];
// let cel_temp = [];

// function toCel(temp_array) {
//     for(let i = 0; i < temp_array; i++){
//         (temp_array[i] - 32)*(5 / 9);
//     }

// }
// toCel(f_temp);
// llllllllllllll-----------------------------------------------------------------------

// let temperature = [30, 35, 40, 44, 50, 55];
// function temp1(){
//     console.log(temperature);
// }
// // 

// let fahrenheit = [32, 38, 40, 50, 103, 150];
// let toCel = [];

// function temp2(){
//     for (let i = 0; i < fahrenheit.length; i++) {
//         console.log((fahrenheit[i] - 32) * (5/9));
//     }
//     console.log(toCel)
// }
// temp();
// // 


// let cel_temp = [30, 35, 40, 44, 50, 55];
// let cel_temp2 = [];

// function temp3() {
//     for(let i = 1; i < cel_temp.length; i++) {
//         cel_temp2.push(cel_temp[i]);
//     }
//     console.log(cel_temp2);
// }
// temp3();
// 

// let cel_4 = [30, 35, 40, 44, 50, 55];

// function temp4(){
//         cel_4[0] = (30* 9/5 + 32);
//         console.log(cel_4); 
// }
// temp4();
// 
// ---------------------------------------------------------

let field1 =document.getElementById("input1")
function callc() {
    let sara = field1.value;
    let numA = sara.split(',');
    let total = 0;
    for( let i = 0 ; i < numA.length; i++ ) {
        total += parseFloat(numA[i]);
    }
    document.getElementById("input2").innerHTML = total;
    if (total <= 100 && total >= 90 ) {
        document.getElementById("input3").innerHTML = "A";  
    }
    else if (total >= 80) {
        document.getElementById("input3").innerHTML = "B"; 
    }
    else if (total >= 70) {
        document.getElementById("input3").innerHTML = "C"; 
    }
    else if (total >= 60) {
        document.getElementById("input3").innerHTML = "D";
    }
    else if (total < 60 ) {
        document.getElementById("input3").innerHTML = "F";
    }
}


