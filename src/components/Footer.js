import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; SamuelTitiloye</p>
        <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
            <li><a href= "mailto:samuelotitiloye@gmail.com" className="fa fa-google"><span className="label"></span></a></li>
            <li><a href="https://www.linkedin.com/in/samueltitiloye/" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a href="https://github.com/samuelotitiloye" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
