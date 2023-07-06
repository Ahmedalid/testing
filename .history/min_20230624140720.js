// var x = Number( prompt("plz enter your number"))
// var y = Number( prompt("plz enter your Year"))
// var r = x + y
// console.log(r)


// var user = window.prompt("plz enter your username")

// if(user == "Admin"){
//     console.log("You Can add , Delete , edit , list");
// }
// else if(user == "Editor"){
//     console.log("You Can add  , list");
// }
// else if(user == "Viwer"){
//     console.log("You Can    list");
// }
// else {
//     console.log("Sorry");
// }

var grade = window.prompt("plz enter grade")
if (grade>0 && grade<= 100){
    if(grade >= 85 && grade <=100){
        console.log("A")
    }
    if(grade >= 75 && grade <85){
        console.log("B")
    }
    if(grade >= 65 && grade <75){
        console.log("C")
    }
    if(grade >= 50 && grade <65){
        console.log("D")
    }else{}
}