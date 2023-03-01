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
                  <div className="col-4">
                    <div className="image">
                      <img alt=" " src={owner.image} />
                      </div>
                  </div>
                  <div className="col-8">
                      <h2>{owner.title}</h2>
                      <i class="fa-sharp fa-solid fa-location-dot"></i> {owner.location}
                      <h6>Max.{owner.guest} people</h6>
                      <h6>Rooms {owner.rooms}</h6>
                  </div>
              </div>
          </div>
      </div>
          ))}
    
    </>
  )
}

export default Ownercard
