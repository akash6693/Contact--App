import React from 'react'

const EditContact = () => {
  return (
    <div>
      <section className='add-contact p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary">
                Edit contact
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form >
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Name' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Photo URL' />
                </div>
                <div className="mb-2">
                  <input type="number" className='form-control' placeholder='Phone' />
                </div>
                <fieldset className="form-control mb-2 ">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0">Type</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="select" id="personal" value="Personal" checked />
                        <label className="form-check-label" for="personal">
                          Personal
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="select" id="office" value="Office" />
                        <label className="form-check-label" for="office">
                          Office
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className='form-control mb-2'>
                  Is Watsapp : <input type="checkbox" id="yes" name="yes" value="yes" />
                  <label className='mx-2' for="yes"> Yes </label><br></br>
                </div>

                <div className="mb-2">
                  <input type="submit" className='btn btn-primary my-2' value='Update' />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" className='contact-img' alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EditContact;
