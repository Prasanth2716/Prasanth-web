//block 
// set of statement enclosed inside a curly brackets{}
//named block-controller will have some resturction to enter the bolck 
//unnamed block-controller will never have some resturction to enter the bolck ..

//scope is nothing but visibility of member
//globle scope- highest visibility
//   var a =10;
//   {
//     console.log(a)
//   }
//block scope - visibility only inside a block

// {
//     let a=10;
//     console.log(a)
// }
// console.log(a)

// Rules
// identifier should not be same in globle /local but with the same identifier we can use in globle as weel as in local

//    var a=10;
//    {
//     let a=20;
//     console.log(a)

//    }
// console.log(a)

    // var a=20 //globle
    // let b=40 //block
    // const c=60 //block


    // let a=60;
    // {
    //     let a=70;
    //     console.log(a)
    // }
    // console.log(a)
    // console.log(window.a) 

    // var a= 60;
    // let b=40;
    // {
    // console.log(a)
    // console.log(b)
    // }

    // console.log("****************************")

    // let gp="d and i"
    // {
    //     var c="d and i"
    //     {
    //         gp="re- i"
    //     }
    //         c="re-i"
    //     {
    //         console.log(gp)
    //         console.log(c)
    //         console.log(window.gp)
    //         console.log(window.c)
    //         console.log(this.c)
    //     }
    // }


