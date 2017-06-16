import React, {Component} from 'react';
import {FaEnvelope, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/lib/fa';
import {Row, Input, Button} from 'react-materialize';

export default class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact with me</h1>
                <Row>
                    <form>
                        <Input type="text" s={12} label="Your Name" />
                        <Input type="email" s={12} label="Email" />
                        <Input type="text" s={12} label="Your Massege"/>
                        <Button waves='light'>Send</Button>
                    </form>
                </Row>
                <p className="sn-links">
                    <a href="https://www.linkedin.com/in/viktorya-danilevskaya-6318ab82/" target="_blank" title="Linked-in"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/profile.php?id=100001787044861" target="_blank" title="Facebook"><FaFacebook /></a>
                    <a href="https://github.com/dvikster" target="_blank" title="Github"><FaGithub /></a>
                    <a href="mailto:dvikster@gmail.com" target="_blank" title="E-mail"><FaEnvelope /></a>
                </p>
            </div>
        );
    }

}
