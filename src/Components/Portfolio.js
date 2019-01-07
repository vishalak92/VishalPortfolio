import React, { Component } from 'react';
import { Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';


class Portfolio extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    if(this.props.data){
      var projects = this.props.data.projects.map((projects) => {
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} />

               {
               <Modal show={this.state.show} onHide={this.handleClose}>
                 <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                   <h4>Text in a modal</h4>
                   <p>
                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                   </p>

                   <h4>Popover in a modal</h4>
                   <p>
                     there is a{' '}
                     <OverlayTrigger overlay={popover}>
                       <a href="#popover">popover</a>
                     </OverlayTrigger>{' '}
                     here
                   </p>

                   <h4>Tooltips in a modal</h4>
                   <p>
                     there is a{' '}
                     <OverlayTrigger overlay={tooltip}>
                       <a href="#tooltip">tooltip</a>
                     </OverlayTrigger>{' '}
                     here
                   </p>

                   <hr />

                   <h4>Overflowing text to show scroll behavior</h4>
                   <p>
                     Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                     dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                     ac consectetur ac, vestibulum at eros.
                   </p>
                   <p>
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur
                     et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                     auctor.
                   </p>
                   
                 </Modal.Body>
                 <Modal.Footer>
                   <Button onClick={this.handleClose}>Close</Button>
                 </Modal.Footer>
               </Modal>
               }



          </div>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
          </Button>

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
