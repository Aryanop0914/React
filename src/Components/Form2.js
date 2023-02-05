import React from 'react'

export default function form2() {
  return (
    <>
        <form className="form2" method="POST" >
            <div className="mb-4 text-start ">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" placeholder="Enter the title" />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-4 text-start ">
                <label htmlFor="location" className="form-label">Location:</label>
                <input type="text" className="form-control" id="location" placeholder="Enter the location" />
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Images:</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple/>
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
                <input type="text" className="form-control" id="guest" placeholder="Enter the Maximum no. of people can stay" />
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="guest" className="form-label">Rooms:</label>
                    <select className="form-select" aria-label="Default select example">
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
