import { Nav, Button } from 'react-bootstrap';
import '../App.css'
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const Navigate = useNavigate()

  const goback = () => {
    Navigate(-1)
  }
  return (
    <div className='myHeader'>
        <Nav className="justify-content-start navItems" activeKey="/home">
          <Link to="/">Logo</Link>       
          <Link to="/transaction">Transaction</Link>        
          <Link to="/data" eventKey="link-1">Data</Link>       
          <Link to="/contact" eventKey="link-2">Contact Us</Link>        
      </Nav>
          <Button onClick={goback} variant="primary">Go back</Button>
    </div>
  )
}

export default Header