import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Cards.css';

const Cards = () => {
  return (
    <div id='popular-drinks'>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Cappuccino
              </Card.Title>
              <Card.Text>
                A good cappuccino should give recognizable espresso taste, low
                acidity, rich structure and rich sweet foam. The art in these
                drinks also a plus.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$3.65</h3>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Frappe
              </Card.Title>
              <Card.Text>
                Most Frappe's don't contain coffee, and that means most don't
                have much caffeine, if any. That's good news for those who are
                sensitive to caffeine or want a coffee-flavored drink that won't
                make them bounce off the walls. Perfect for warm summer days.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$4.25</h3>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Cold Brew
              </Card.Title>
              <Card.Text>
                Iced coffee's less acidic, richer concentrate cousin made
                through a prolonged, room temperature brewing process. Perfect
                for warm days when you have things to get done.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$3.95</h3>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Cappuccino
              </Card.Title>
              <Card.Text>
                A good cappuccino should give recognizable espresso taste, low
                acidity, rich structure and rich sweet foam. The art in these
                drinks also a plus.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$3.65</h3>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Frappe
              </Card.Title>
              <Card.Text>
                Most Frappe's don't contain coffee, and that means most don't
                have much caffeine, if any. That's good news for those who are
                sensitive to caffeine or want a coffee-flavored drink that won't
                make them bounce off the walls. Perfect for warm summer days.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$4.25</h3>
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
              <Card.Title className='card-title' style={{ color: '#baa375' }}>
                Cold Brew
              </Card.Title>
              <Card.Text>
                Iced coffee's less acidic, richer concentrate cousin made
                through a prolonged, room temperature brewing process. Perfect
                for warm days when you have things to get done.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <h3 style={{ color: '#baa375' }}>$3.95</h3>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Cards;
