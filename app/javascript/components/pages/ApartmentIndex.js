import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <h3 style={{textAlign: "center", marginTop: "75px"}}>Apartment Listing</h3>
      <Col style={{display: "flex", flexWrap: "wrap", marginLeft: "50px"}}>
        {this.props.apartments && this.props.apartments.map(apartment => {
          return(
            <Card style={{margin: "10px"}} body key={apartment.id} className="card">
              <CardTitle>
              <h4>Street: <span className='apt-info'>{apartment.street}</span></h4>
              <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>{apartment.street}</NavLink>
                <h4>City: <span className='apt-info'>{apartment.city}</span></h4>
                <h4>Price: <span className='apt-info'>{apartment.price}</span></h4>
                <h4>Manager: <span className='apt-info'>{apartment.manager}</span></h4>
                <img src={apartment.image} width="100%"/>
              </CardTitle>
            </Card>
          )
        })}
      </Col>
      </>
    )}
}