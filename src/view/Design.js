import React, { Component } from 'react';

import '../css/Design.css';

class Design extends Component {
    render() {
        return (
           <section className="design">
               <h2>Design</h2>
               <div className="list">
                   <article>
                        <img src="/img/design/01_desktop.jpg"/>
                   </article>
                    <article>
                        <img src="/img/design/02_desktop.jpg" />
                    </article>
                    <article>
                        <img src="/img/design/04.jpg" />
                    </article>
                    <article>
                        <img src="/img/design/05.png" />
                    </article>
                    <article>
                        <img src="/img/design/06.png" />
                    </article>
                    <article>
                        <img src="/img/design/07.png" />
                    </article>
                    <article>
                        <img src="/img/design/08.png" />
                    </article>
                    <article>
                        <img src="/img/design/09.png" />
                    </article>
               </div>
           </section>
        )
    }
}

export default Design;
