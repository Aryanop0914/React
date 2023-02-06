import React, { useState } from 'react'

export default function Form2() {
    const[title,setTitle]=useState(" ");
    const[location,setLocation]=useState(" ");
    const[images,setImages]=useState(" ");
    const[guest,setGuest]=useState(" ");
    const[rooms,setRooms]=useState(" ");

    function handleinsert(e){
        e.preventDefault();
        console.log(title,location,images,guest,rooms);
            fetch("http://localhost:5000/owner",{
              method:"POST",
              crossDomain:true,
              headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
              },
              body:JSON.stringify({
                title,
                location,
                images,
                guest,
                rooms,
              }),
            }).then((res)=>res.json())
            .then((data)=>{
              if( data.error ==='User Exists'){
                      window.alert("User already Exists.");
                      console.log("Invalid Registration");
                }else{
                  console.log(data,"Registration Successful");
                  window.alert("Registration Successful Login by the login page");
                }
    })

  }
  
  return (
    <>
        <form className="form2" method="POST" onSubmit={handleinsert}>
            <div className="mb-4 text-start ">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter the title" autoComplete=" " />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-4 text-start ">
                <label htmlFor="location" className="form-label">Location:</label>
                <input type="text" className="form-control" id="location" onChange={(e)=>{setLocation(e.target.value)}}  placeholder="Enter the location" autoComplete=" " />
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Images:</label>
                <input className="form-control" type="file" accepts="image/png/jpg" onChange={(e)=>{setImages(e.target.files)}}  id="formFileMultiple" multiple/>
            </div>
            

            {/* <div className="mb-4 text-start">
                <label htmlFor="check-in" className="form-label">Check in:</label>
                <input type="date" className="form-control" id="check-in"/>
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="check-out" className="form-label">Check out:</label>
                <input type="date" className="form-control" id="check-out"/>
            </div> */}
            <div className="mb-4 text-start ">
                <label htmlFor="guest" className="form-label">Guest:</label>
                <input type="text" className="form-control" id="guest" onChange={(e)=>{setGuest(e.target.value)}}  placeholder="Enter the Maximum no. of people can stay" autoComplete=" "/>
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="guest" className="form-label">Rooms:</label>
                    <select className="form-select" onChange={(e)=>{setRooms(e.target.value)}} >
                        <option value="1">1 Room</option>
                        <option value="2">2 Room</option>
                        <option value="3">3 Room</option>
                    </select>
            </div>
                <button type="submit" className="btn btn primary">Insert</button>
        </form>
      
    </>
  )
}
