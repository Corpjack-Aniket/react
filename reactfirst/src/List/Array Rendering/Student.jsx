import React from 'react'

function Student() {

    // const studs = ["Aniket","Rakesh","Divyam","Chandani"];
    // const numbers =[2,4,6,8];
    // const result = numbers.map(num=><h1>{num*2}</h1>);
    //! creating array of objects
    const studs = [
        {
            name: "Aniket",
            age: 24
        },
        {
            name: "react",
            age: 2008
        },
        {
            name: "power",
            age: 2024
        }
    ]
    return (
        <div>
            {/* {studs.map(std=><h1>{std}</h1>)}       */}

            {/* {numbers.map(num=><h1>{num*2}</h1>)} */}
            {/* {result} */}

            {/* {studs.map(stu=><h1>I am {stu.name} and I am {stu.age}</h1>)} */}
            
             //! passing data to another component
            {studs.map(stu=><Studentdata stu={stu}/>)}
        </div>
    )
}

export default Student
