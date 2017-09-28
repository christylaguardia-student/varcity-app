import React from 'react';
import News from './News';

export default function Feed() {
  return (
    <section>
      <div className="card">
        <textarea className="textarea" placeholder="Share your recent athletic or educational achievement." />
        <button  className="button is-primary is-outlined">Post</button>
      </div>
      <News />
    </section>
  );
}