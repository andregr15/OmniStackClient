import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>User Name</span>
              <span className="place">Local</span>
            </div>

            <img src={more} alt="Mais"/>
          </header>

          <img src="" alt=""/>

          <footer>
            <div className="actions">
              <img src={like} alt="Like"/>
              <img src={comment} alt="Comentar"/>
              <img src={send} alt="Enviar"/>
            </div>

            <strong>likes</strong>

            <p>
              description
              <span>hashtags</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;