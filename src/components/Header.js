import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>SAMUEL TITILOYE</h1>
                <h4>Full stack SOFTWARE DEVELOPER</h4>
                {/* <h6>Minneapolis, Minnesota</h6> */}
                <p>Learning to speak tomorrow's language, today! </p>
            </div>
        </div>
        <nav>
            <ul>
                
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li> 
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Techs</a></li>               
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
