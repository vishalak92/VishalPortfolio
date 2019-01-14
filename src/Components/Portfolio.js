import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Modal, Button } from 'react-bootstrap';


class Portfolio extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      activeIndex:null
    };
  }

  handleClose() {
    this.setState({ show: false, activeIndex:null });
  }

  handleShow(e, index) {
    this.setState({ show: true,activeIndex:index });

  }


  render() {




    if(this.props.data){
      var projects = this.props.data.projects.map((projects,index) => {

        var projectImage = 'images/portfolio/'+projects.image;
        var descList = projects.detailProjectImplDesc.map(function(details) {
              return (
                 <li style = {{listStyleType : "circle"}}>{details.descDetail}</li>
              )
            })
            var learningList = projects.Learnings.map(function(learnings) {
                  return (
                     <li style = {{listStyleType : "circle"}}>{learnings.learning}</li>
                  )
                })
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
           <div className="imageContainter">
           <img alt={projects.title} src={projectImage} className = "projectImage" onClick = {e => this.handleShow(e,index)}/>

            </div>
            {
            <Modal className="modal-container customModalImpl" show={this.state.activeIndex === index} onHide={this.handleClose}>

              <Modal.Body>

                <Grid className= "landing-grid">
                  <Cell col={12}>
                    <img
                      src = {projectImage}
                      alt = "avatar"
                      className = "avatar-img"
                    />

                    <div className = "banner-text">
                      <h1> {projects.detailTitle} </h1>
                      <h3> {projects.detailShortDesc}</h3>
                      <a href= {projects.detailProjectReportLink} rel="noopener noreferrer" target="_blank"><h2> {projects.detailProjectReportTitle}</h2></a>
                      <hr/>
                      <p style = {{"font-weight": "bold", "font-size": "20px"}}> {projects.summaryTitle} </p>
                      <p> {projects.detailProjectSummary} </p>
                      <p style = {{"font-weight": "bold", "font-size": "20px"}}> {projects.detailProjectImplTitle} </p>

                      <ul>
                        {descList}
                      </ul>
                      <p style = {{"font-weight": "bold", "font-size": "20px"}}> {projects.keyLearnings} </p>
                      <ul>
                        {learningList}
                      </ul>

                    </div>
                  </Cell>
                </Grid>




              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>

            }

              <div className = "homeTitle"><h3> {projects.homeTitle} </h3> </div>
              <div className = "homeDesc"><h1> {projects.homeDescription}</h1></div>
              <div className = "details-button">
              <Button bsStyle="primary" bsSize="large" onClick={e => this.handleShow(e,index)}>
              View Details
              </Button>
              </div>


          </div>


        </div>

      })
    }

    return (
      <section id="portfolio">

      <div className="rowComp">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                {projects}
            </div>

          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
