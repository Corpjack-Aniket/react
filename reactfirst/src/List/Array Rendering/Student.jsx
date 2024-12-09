import React from 'react'
import Studentdata from './Studentdata'

function Student() {

    // const studs = ["Aniket","Rakesh","Divyam","Chandani"];
    // let studntName = studs.map((stu,index)=><li key={index}>{stu}</li>)
    // const numbers =[2,4,6,8]; 
    // const result = numbers.map(num=><h1>{num*2}</h1>);
    // ! creating array of objects
    const studs = [
        {
            id:1,
            name: "Aniket",
            age: 24
        },
        {
            id:2,
            name: "react",
            age: 2008
        },
        {
            id:3,
            name: "power",
            age: 2024
        }
    ]
    return (
        <div>
            {/* {<ul>{studntName}</ul>}       */}

            {/* {numbers.map(num=><h1>{num*2}</h1>)} */}
            {/* {result} */}

            {/* {studs.map(stu=><h1>I am {stu.name} and I am {stu.age}</h1>)} */}
            
             //! passing data to another component
             //! without key
            {/* {studs.map(stu=><Studentdata stu={stu}/>)} */}
            //! passing data to another component with key 
            {studs.map(stu=><Studentdata key={stu.id} stu={stu}/>)}
        </div>
    )
}

export default Student
