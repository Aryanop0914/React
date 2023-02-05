import React from 'react'

export default function form2() {
  return (
    <>
        <form className="form2">
            <div className="mb-4 text-start ">
                <label htmlFor="check-loc" className="form-label">Location:</label>
                <input type="text" className="form-control" id="check-loc" placeholder="Enter your Location" />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Images:</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple/>
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="check-in" className="form-label">Check in:</label>
                <input type="date" className="form-control" id="check-in"/>
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="check-out" className="form-label">Check out:</label>
                <input type="date" className="form-control" id="check-out"/>
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="guest" className="form-label text-start">Guests:</label>
                    <select className="form-select" >
                        <option value="">2 Adults</option>
                        <option value="">3 Adults</option>
                        <option value="">4 Adults</option>
                        <option value="">5 Adults</option>
                        <option value="">6 Adults</option>
                    </select>
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
