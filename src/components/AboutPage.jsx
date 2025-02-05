import React from 'react';

import Count from './Count';

function AboutPage() {
  return (
    <main>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4">About Page</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents, the creator, etc. 
            Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
          </p>
        </div>
      </div>
      <Count />
    </main>
  );
}

export default AboutPage;
