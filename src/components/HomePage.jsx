import React from 'react';

function HomePage() {

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, Deploy!</h1>
        <p className="lead">Это простой компонент в стиле jumbotron для привлечения дополнительного внимания к избранному контенту или информации.</p>
        <hr className="my-4" />
        <p>Он использует служебные классы для типографики и интервалов для размещения содержимого в более крупном контейнере.</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">Узнать больше</a>
      </div>
    </div>
  );
}

export default HomePage;
