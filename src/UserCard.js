import './UserCard.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const UserCard = ({ user }) => {
    return (
        <Card className='cardDiv' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <div style={{ display: 'block' }}>
                        <output>Street : {user.address.street}</output>
                        <output>Suite : {user.address.suite}</output>
                        <output>City : {user.address.city}</output>
                        <output>Zipcode : {user.address.zipcode}</output>
                    </div>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Email : {user.email}</ListGroup.Item>
                <ListGroup.Item>Website : {user.website}</ListGroup.Item>
                <ListGroup.Item>Phone : {user.phone}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{user.address.geo.lat}</Card.Link>
                <Card.Link href="#">{user.address.geo.lng}</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default UserCard;