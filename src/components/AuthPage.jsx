import React from 'react';

function AuthPage() {

  return (
    <div className="jumbotron">
      <form className="form-signin" style={{ width: '100%', maxWidth: '330px', margin: '60px auto' }}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div class="form-group">
          <label for="inputEmail" className="">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
        </div>
        <div class="form-group">
          <label for="inputPassword" className="">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default AuthPage;
