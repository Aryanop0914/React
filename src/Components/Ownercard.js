import React,{useState,useEffect} from 'react'

const Ownercard = () => {
    const[ownerdata,setOwnerdata]=useState("");
    useEffect(()=> {
        fetch("http://localhost:5000/pdisplay",{
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
      },[])


  return (
    <>
        <div className="owner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {ownerdata.image}
                    </div>
                    <div className="col">
                        <h1>{}</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ownercard
