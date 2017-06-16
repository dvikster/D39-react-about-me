import React, {Component} from 'react';
import FooterContainer from './FooterContainer';
import {Row, Col, Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router';

export default class MainContainer extends Component{
        render(){
        return(
            <div className="main">
        <header>
                <Navbar brand='Viktoriia Danylevska' right className="container">
                    <Row >
                        <Col s={12} className="main-menu">
                            <Link to="/skills" activeClassName="active">Skills</Link>
                            <Link to="/portfolio" activeClassName="active">Portfolio</Link>
                            <Link to="/projects" activeClassName="active">Projects</Link>
                            <Link to="/contact" activeClassName="active">Contact</Link>

                          </Col>
                    </Row>
                </Navbar>
            </header>
             <Row className="main-content container">
                    <Col s={12}>
                        {this.props.children}
                    </Col>
                </Row>
                     <main/>

                <FooterContainer />

        </div>
        )
    }
}