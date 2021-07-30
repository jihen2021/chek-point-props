import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';

export class ProfileComponent extends Component {

      render() {

        return ( 
         
          <Container>
            
          <Row>
          <Col>  
              <button onClick={this.props.data} >Ma  fonction</button>
             <h1 style={{ color:'#9c27b0',fontStyle:'italic',backgroundColor:'beige'}}>{this.props.Profile}</h1>
             <h1 style={{ color:'#9c27b0',fontStyle:'italic',backgroundColor:'beige'}}>{this.props.FullName}</h1>
             <h1 style={{ color:'#9c27b0',fontStyle:'italic',backgroundColor:'beige'}}>{this.props.Bio}</h1> 
    
          </Col>
          <Col>
             {this.props.children}          
         </Col>
         </Row>
        </Container> 

  )
    
}
}
ProfileComponent.propTypes={
    FullName:PropTypes.string,
    Profile:PropTypes.string,

}

ProfileComponent.defaultProps = {
  Profile:'inconnu',
  FullName:'inconnu',
  Bio:'inconnu'
 
};
export default ProfileComponent
