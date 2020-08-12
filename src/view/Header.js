import React, { Component } from 'react';

import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="static hide">
                        <h1>
                            Livet's portfolio
                        </h1>
                    </div>
                    <div className="default space-between">
                        <div>
                            <h1>곽태영<sub>Lasorvac Kande Livet</sub></h1>
                            <h2>Fullstack Developer / Web Designer</h2>
                        </div>
                        <address>
                            <h2>Tel. <a href="tel:+821045034646">010 4503 4646</a></h2>
                            <h2>Email. <a href="mailto:livet@kakao.com">livet@kakao.com</a></h2>
                        </address>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
