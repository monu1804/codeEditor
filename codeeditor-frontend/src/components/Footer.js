import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a style={{color:'white'}} target=".blank" href="https://github.com/monu1804"><i className="fab fa-github" style={{padding:'5px'}} ></i></a>
                <a style={{color:'white'}} target=".blank" href="https://www.linkedin.com/in/monu-paswan-b61212211/"><i className="fab fa-linkedin-in" style={{padding:'5px'}}></i></a>
            </div>
            <div className="footer-message">
                Developed with  <i className="fas fa-heart"></i>  by Monu
            </div>
        </div>
    )
}

export default Footer