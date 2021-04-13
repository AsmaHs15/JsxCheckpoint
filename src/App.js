import './App.css';
import React from 'react';
import {Card,Button} from 'react-bootstrap';
import logo   from './imageInSrc.jpg';
import "./Style.css"
import Skynature from './Component/MyVideo';


function App() {
  return (

  <div >
        
        <h1 className="title aqua">Natural Views...</h1>

        <br></br>
        <br></br>
        
 <div style={{display:'flex' , justifyContent:'space-around'}}>

{/* //image In Public */}
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./imageInPublic.jpg" alt="imageFromPublic" height="370" />
  <Card.Body>
    <Card.Title>Image From Public</Card.Title>
    <Card.Text>
     Body of water wave photo during golden time.
        </Card.Text>
    <Button variant="info">Show more</Button>
  </Card.Body>
</Card>

{/* //image In Src */}

<Card style={{ width: '18rem' }}>
  <Card.Img variant="right" src={logo} alt="imageFromSrc"  height="370" />
  <Card.Body>
    <Card.Title>Image From Src</Card.Title>
    <Card.Text>
     Trees in beautifull forest during the sun day.
    </Card.Text>
        <Button variant="info">Show more</Button>
  </Card.Body>
</Card>
</div>
<br></br>
<br></br>


{/* //Video */}

    <div>  
<Skynature/>

  </div>

  </div>


  );
}

export default App;
