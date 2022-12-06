import React from 'react'
import { Link } from 'react-router-dom';


const ContactList = () => {
  return (
    <div>
      <section className='contact-search my-2'>
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">Contact App
                  <Link to={'/contacts/add'} className='btn btn-primary mx-2'>
                    <i className='fa fa-plus-circle me-2' />
                    New </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form >
                  <input type="text" className='form-control' placeholder='Search Name' />
                  <button type="button" class="btn btn-primary my-2">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-list'>
        <div className="container">
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
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={'/contacts/view/:contactID'} className='btn btn-warning my-4'>
                        <i className='fa fa-eye' />
                      </Link>
                      <Link to={'/contacts/edit/:contactID'} className='btn btn-primary my-4'>
                        <i className='fa fa-pen' />
                      </Link>
                      <button className='btn btn-danger my-4'>
                        <i className='fa fa-trash' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default ContactList;
