import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PopUp({show, setShow, jobData}) {

  const {title, company_name, location, description, job_highlights: jobHighlights} = jobData;

  return (
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        scrollable={true}
        size='lg'
        animation={true}
      >
        <Modal.Header 
          closeButton
          >
          <Modal.Title id="example-custom-modal-styling-title" className='mr-5px'>
            {title}
          </Modal.Title>
          <Button variant="outline-dark">Save</Button>
        </Modal.Header>
        <Modal.Body>
          <h3>Company Name: {company_name}</h3>
          <h4>Location: {location}</h4>
          <br/>
          <p>
            <h5>Description: </h5>
            {description}
            <br/>
            <br/>
            {jobHighlights && jobHighlights.map(highlight => (
              <>
                <h5>{highlight?.title}</h5>
                <ul>
                  {highlight?.items?.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </>
            ))}
          </p>
        </Modal.Body>
      </Modal>
  )
}

export default PopUp