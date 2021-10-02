import React from 'react';
import {Rocket} from '../request';
import Pagination from './common/Pagination';
import {paginate} from './common/paginate';

class RocketDetails extends React.Component <any,any> {
  constructor(props: any){
    super(props);
    this.state = {
      rockets: [],
      currentPage: 1,
      pageSize: 1
    };
  }

  componentDidMount() {
    Rocket.getRocketDetails()
      .then(rockets => {
        this.setState({
          rockets
        })
    })
  }

  handlePageChange = (page:any) => {
    this.setState({currentPage : page});
  }

  render() {
    const {length: count} = this.state.rockets;
    const {pageSize, currentPage, rockets: allRockets } = this.state;
    const rockets = paginate(allRockets, currentPage, pageSize);

    return(
      <div>
        {rockets.map((rocket:any) => (
          <ul key={rocket.id} className="list display-content" >
            <li><img className="img-size"src= {rocket.flickr_images} alt="rocket"/></li>
            <span className="card">
              <li className="heading-size">{rocket.name}</li>
              <hr/>
              <li>{rocket.description}</li>
            </span>
          </ul>         
        ))}

        <Pagination 
          count = {count}
          pageSize= {pageSize}
          currentPage = {currentPage}
          onPageChange={this.handlePageChange}/>
          
      </div>
    )
  }
}
export default RocketDetails;
