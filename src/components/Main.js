import React from 'react';
import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
// import feedback from '../images/feedback.png';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
 
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Techs</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h4>Web Technology: <h6>React, React-Redux, Redux-Saga, jQuery, Node.js, Express.js, Axios, Ajax, JSON, Sinatra, HTML, CSS, Material-UI, Bootstrap, CSS-Materialize, react signature canvas</h6></h4>

          <h4>languages: <h6>JavaScript</h6></h4>
          <h4>database: <h6>PostgreSQL, MySql</h6></h4>
          <h4>Tools: <h6>Visual Studio Code, Atom, Sublime Text, Brackets, Git, postman, postico, MySql Workbench, IntelliJIDEA </h6></h4>
          <h4>Wish List :</h4>
          <ul><h6>Java</h6>
          <h6>Python</h6>
          <h6>Amazon Web Services</h6>
          <h6>Kafka</h6>
          <h6>MongoDB</h6></ul>
          {close}
        </article> 

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Below are some of my full stack projects. Building each of these had different sets of difficulty that had to be overcome.</p>
          <div className="container">
          <p><a href="https://samueltitiloye.github.io/index.html"> Lift Tracker :</a> This is my biggest application to date. It is an application that allows the user to log and track their daily and weekly workouts/exercises.</p>
          <p> The user can edit and update their workouts and exercise selection and have access to a history of all their workouts. The history page has a delete feature available should there arise a need to delete a day or particular workout. </p>
          <p><a href="https://caesarmyflix.herokuapp.com/#/"> My Flix: </a> This App is IMDB esque. Built an App that lets the user select a movie, and explore it's genre and description. It allows the user to edit/update the Movie title and description. Using React, Redux and Redux-Sagas, and a database. This was extremely challenging because it was the first built app after learning Sagas.  </p>
          <div class="feedback">
          <p><a href="https://samueltitiloye.github.io/index.html"> Feedback: </a> Virtually every website/application you visit has a feedback form of some sort. Being able to replicate one and understand the ins and outs of this crucial part of user interaction was an interesting learning experience.</p>
          </div>
          {/* <p><a href="https://samueltitiloye.github.io/index.html"> Salsa De Fuego Pizza: </a> Every one loves pizza right? Created an application for a small buisness - Salsa De Fuego - to be able to receive orders, track and fulfill those orders as more people find about their amazing New York Style pizza with a Spanish flare.</p> */}
          <p><a href="https://calculatorvalue.herokuapp.com/"> My Task List:  </a> This was a fun project. It is a straight forward application that lets you the user input a task, attach a date to it, update when completed and delete from the task list. Creating more room for new tasks to be added. </p>
          <p><a href="https://samueltitiloye.github.io/index.html">Landing Page:  </a> This was one of my first application ever built. Learning mailChimp integration, deploying on GitHub desktop. It was a great feeling being able to show this to friends and family.</p>
          <p>  Software Development is my passion. I like how challenging and rewarding it is. I love the growth potential in logic, analytical and methodical thinking. It's just cool to write lines of code and see what it looks like on the browser.</p>
          {close}
          </div>
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>  
          Welcome!  
          I am a software Developer based in Minneapolis, MN with a passion to build web applications that enhances human interaction and experiences. 
          When I am not coding, I can be found making luscious ambient soundscapes with my guitar and pedalboard, playing with a band, 
          at a gym lifting weights or on my bike exploring Nature in beautiful Minnesota.
          I am an active and tenacious learner, Perseverant Problem Solver, Technology Lover.
          I am curious about repeatable systematic approaches to learning and building software. 
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
         
          <center>
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
            <h4>Reach out to me</h4>
              <p>Email: <a href="mailto:samuelotitiloye@gmail.com">samuelotitiloye@gmail.com </a></p>
              <p>Phone: <a href="tel:+1-813-296-0698">813-296-0698</a></p>
              <h5>Social Media</h5>
            <li><a href= "mailto:samuelotitiloye@gmail.com" className="fa fa-google"><span className="label"></span></a></li>
            <li><a href="https://www.linkedin.com/in/samueltitiloye/" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a href="https://github.com/samuelotitiloye" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
          </center>
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main