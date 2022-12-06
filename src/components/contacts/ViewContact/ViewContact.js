import React from 'react'

const ViewContact = () => {
  return (
    <div>
      <div className='contact-list'>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" className='contact-img' alt="No Pic" />
                    </div>
                    <div className="col-md-7">
                      <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                          Name : <span className='fw-bold'>Akash</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Phone : <span className='fw-bold'>8595576878</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          <fieldset class="form-group  ">
                            <div class="row">
                              <legend class="col-form-label col-sm-3 pt-0">Type</legend>
                              <div class="col-sm-10">
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="select" id="personal" value="Personal" checked />
                                  <label class="form-check-label" for="personal">
                                    Personal
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="select" id="office" value="Office" />
                                  <label class="form-check-label" for="office">
                                    Office
                                  </label>
                                </div>

                              </div>
                            </div>
                          </fieldset>
                        </li>
                        <li className='list-group-item list-group-item-action me-2'>
                          Is Watsapp : <input type="checkbox" id="yes" name="yes" value="yes" />
                          <label className='mx-2' for="yes"> Yes </label><br></br>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewContact;
