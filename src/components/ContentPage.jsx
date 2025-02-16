import React from 'react';

const ContentPage = () => {
  const [loader, setLoader] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const getData = async () => {
    setLoader(true);
    const response = await fetch('/api/hello');

    const data = await response.json();
    setLoader(false);
    setValue(data);
  }

  return (
    <div className="container pt-5">
      <h1>There are some contens here</h1>
      <h3 className="text-secondary">Static Now</h3>
      <hr/>
      <h3>Added data from Backend</h3>
      <button className="btn btn-success mt-3" onClick={getData}>Get data</button>
      {value
        ? <p className="mt-3">{value.message}</p>
        : <p className="mt-3">Click a button for get data {loader ? <span style={{ color: 'tomato' }}>Loading...</span> : ''}</p>
      }
    </div>
  );
};

export default ContentPage;