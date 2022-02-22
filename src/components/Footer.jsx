import React from 'react';

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

function year() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; {year()}</p>
        </footer>
    );
}

export default Footer;