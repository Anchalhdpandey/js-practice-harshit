// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.9))

// Object destructing


const course={
    coursename:"js",
    price:999,
    tutor:"hitesh",
}

const {coursename}=course;

console.log(coursename)

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this);
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


chai()



for(let i=0; i<100; i++){
    console.log("I love you Anchal");
    // for(let j=0;j<=10;j++){
    //     console.log(`Inner loop value ${j} and ${i}`)
    // }
}