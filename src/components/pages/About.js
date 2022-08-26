import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import quiz from '../../assests/quiz.png';
import page from '../../assests/Page.png';
import read from '../../assests/readmepic.png';
import schedule from '../../assests/Schedule.png';
import sc from '../../assests/screenshot.png';
import weather from '../../assests/weather.png';

export default function About() {
  return (

    <body>
      

 <header>
 <h1>About Page</h1>


<p>Hello, my name is David Navarrete Ayala and I am a web developer. 
  I graduated highschool in 2019, then started attending Chabot College in 2020. I want to major in computer science but I found the need to develop my skills 
  with the UC Berkeley Extension Coding Boot Camp.

</p>

<h2>Projects</h2>
 </header>

<main>
<CardGroup>
      <Card>
        <Card.Img variant="top" src={quiz}  />
        <Card.Body>
          <Card.Title>TAKE A QUIZ!</Card.Title>
        </Card.Body>
        <Card.Footer>
        <a href="https://dna601.github.io/timed-quiz/" target="_blank" rel="github">https://dna601.github.io/timed-quiz/
    </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top"src={page}   />
        <Card.Body>
          <Card.Title>CREATE YOUR TEAM!</Card.Title>
        </Card.Body>
        <Card.Footer>
        <a href="https://github.com/DNA601/ROLE-TEAM-GENERATOR" target="_blank" rel="github">https://github.com/DNA601/ROLE-TEAM-GENERATOR
    </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top"src={read}   />
        <Card.Body>
          <Card.Title>MAKE A READ ME!</Card.Title>
        </Card.Body>
        <Card.Footer>
        <a href="https://github.com/DNA601" target="_blank" rel="github"> https://github.com/DNA601/readmegenerator
    </a>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup>
      <Card>
        <Card.Img variant="top"src={schedule}   />
        <Card.Body>
          <Card.Title>SCHEDULE YOUR DAY!</Card.Title>
        </Card.Body>
        <Card.Footer>
        <a href="https://dna601.github.io/WorkDay/" target="_blank" rel="github">https://dna601.github.io/WorkDay/
    </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top"src={sc}   />
        <Card.Body>
          <Card.Title>TAKE NOTES!</Card.Title>
        </Card.Body>
        <Card.Footer>
          <a href="https://fathomless-dawn-47783.herokuapp.com/notes" target="_blank" rel="github"> https://fathomless-dawn-47783.herokuapp.com/notes
    </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top"src={weather}   />
        <Card.Body>
          <Card.Title>CHECK THE WEATHER!</Card.Title>
        </Card.Body>
        <Card.Footer>
          <a href="https://dna601.github.io/Weather-App/" target="_blank" rel="github">https://dna601.github.io/Weather-App/
    </a>
        </Card.Footer>
      </Card>
    </CardGroup>


<h3>Links to my github and linkedin are below</h3>
<p>⬇️</p>


</main>





<footer className="footer">
<div className="content has-text-centered">
  <p>
    
    <a href="https://github.com/DNA601" target="_blank" rel="github">
     My github
    </a>
    </p>
    <p>  <a href="https://www.linkedin.com/in/david-navarrete-ayala-31a09623a/" target="_blank" rel="linkedin">
     linkedin
    </a></p>
  
 
</div>
</footer>

</body>
  );
}
