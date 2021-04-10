import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div id='popular-drinks' className='border-bottom border-light border-1'>
      <CardGroup>
        <Card
          style={{
            backgroundColor: '#212529',
            color: 'white',
            borderColor: '#baa375',
          }}
        >
          <Card.Img
            variant='top'
            src='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
          />
          <Card.Body>
            <Card.Title className='fs-3'>Iced Latte</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#baa529' }}>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: '#212529',
            color: 'white',
            borderColor: '#baa375',
          }}
        >
          <Card.Img
            variant='top'
            src='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
          />
          <Card.Body>
            <Card.Title className='fs-3'>Frappuccino</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#baa529' }}>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: '#212529',
            color: 'white',
            borderColor: '#baa375',
          }}
        >
          <Card.Img
            variant='top'
            src='https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
          />
          <Card.Body>
            <Card.Title className='fs-3'>Cold Brew</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#baa529' }}>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cards;
