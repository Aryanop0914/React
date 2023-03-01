import React,{useState,useEffect} from 'react'

const Ownercard = () => {
    const[ownerdata,setOwnerdata]=useState([]);

    const fetchData = () => {
<<<<<<< HEAD
      fetch("http://localhost:5000/ownerdata",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data,"userData");
        setOwnerdata(data.data);
        if (data.data === "token expired") {
          window.localStorage.clear();
        }
    });
  }
=======
      // fetch("http://localhost:5000/ownerdata")
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(data => {
      //     setOwnerdata(data.data)
      //   })

      fetch("http://localhost:5000/ownerdata",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      }).then((res)=>res.json())
      .then((data)=>{
        setOwnerdata(data.data);
          if (data.data === "token expired") {
            window.localStorage.clear();
            window.localStorage.removeItem("loginbtn");
          }
      });
    }
>>>>>>> 3352a62f23ee47ee8a4b563c51d9cb7b2c072a90

    useEffect(() => {
      fetchData()
    }, [])

  return (
    <>
          
          {ownerdata.map(owner => (
            <div className="owner">
            <div className="container">
              <div className="row">
                  <div className="col">
<<<<<<< HEAD
                    <div className="part1">
                      <img alt=" " src={owner.image}/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="part2">
                      <h1>{owner.title}</h1>
                    </div>
=======
                    <div className="image">
                      <img alt=" " src={owner.image} />
                      </div>
                  </div>
                  <div className="col">
                      <h2>{owner.title}</h2>
>>>>>>> 3352a62f23ee47ee8a4b563c51d9cb7b2c072a90
                  </div>
              </div>
          </div>
      </div>
          ))}
    
    </>
  )
}

export default Ownercard
