import React from 'react';
import {Company} from '../request';

class About extends React.Component <any,any>{
  constructor(props: any) {
    super(props);
    this.state = {
      company:[]
    };
  }

  componentDidMount() {
    Company.getCompanyDetails()
      .then(company => {
        this.setState({
            company
        })
      })
  }

  render() {
    let details = this.state.company;
  
      return(
        <div className="display-content">
          <span className="image img-size"></span>
          <div className="card">
            <div className="heading-size">About Us</div>
            <hr/>
            <p>Space Exploration Technologies Corp. is an American corporation in Hawthorne, California.</p>
            <p> {details.summary} </p>
          </div>    
        </div>    
      )
  }
}

export default About;