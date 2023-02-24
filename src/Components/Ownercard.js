import React,{useState,useEffect} from 'react'

const Ownercard = () => {
    const[ownerdata,setOwnerdata]=useState([]);

    const fetchData = () => {
      fetch("http://localhost:5000/ownerdata")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setOwnerdata(data.data)
        })
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
                      {owner.image}
                  </div>
                  <div className="col">
                      <h1>{owner.title}</h1>
                  </div>
              </div>
          </div>
      </div>
          ))}
    
    </>
  )
}

export default Ownercard
