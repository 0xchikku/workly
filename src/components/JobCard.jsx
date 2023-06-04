import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PopUp from './PopUp';

function JobCard({jobData}) {
  const { title, company_name, location} = jobData;
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='col-md-3 text-center' style={{ marginBottom: '10px', marginRight: '5px', marginLeft: '5px', marginTop: '10px' }} >
        <Card border='dark' className='h-100 w-100'  onClick={() => setShow(true)}>
          <Card.Body>
            <Card.Header as='h5'>{title}</Card.Header>
            <Card.Title>{company_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
          </Card.Body>
      </Card>
      </div>

      <PopUp 
        show={show} 
        setShow={setShow}
        jobData={jobData}
      />
    </>
  );
}

export default JobCard;