import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Cards.css';

const Cards = () => {
  return (
    <div id='popular-drinks' className='border-bottom border-light border-1'>
      <div id='reg-cards'>
        <CardGroup>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '80px 20px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            />
            <Card.Body>
              <Card.Title className='fs-3'>Cappuccino</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '80px 20px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/230588/pexels-photo-230588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            />
            <Card.Body>
              <Card.Title className='fs-3'>Frappuccino</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '80px 20px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div id='res-cards'>
        <CardDeck>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '60px 80px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            />
            <Card.Body>
              <Card.Title className='fs-3'>Cappuccino</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '60px 80px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/230588/pexels-photo-230588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            />
            <Card.Body>
              <Card.Title className='fs-3'>Frappuccino</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: '#212529',
              color: 'white',
              borderColor: 'white',
              padding: '60px 80px',
            }}
          >
            <Card.Img
              variant='top'
              src='https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
              <small style={{ color: '#baa529' }}>
                Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Cards;
