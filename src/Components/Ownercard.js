import React,{useState,useEffect} from 'react'

const Ownercard = () => {
    const[ownerdata,setOwnerdata]=useState([]);

    const fetchData = () => {
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
                    <div className="part1">
                      <img alt=" " src={owner.image}/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="part2">
                      <h1>{owner.title}</h1>
                    </div>
                  </div>
              </div>
          </div>
      </div>
          ))}
    
    </>
  )
}

export default Ownercard
