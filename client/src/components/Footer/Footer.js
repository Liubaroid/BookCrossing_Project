import React from 'react';

function Footer(props) {
  return (
    <footer className="page-footer blue">
      <div className="container">
        <div className="row">
          <div className="col l6 s10">
            <p className="grey-text text-lighten-4">Информация футера</p>
          </div>
          <div className="col l4 offset-l2 s1">
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">
                <i class="material-icons">center_focus_weak</i>INSTAGRAM</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          © 2021 Copyright Text
  </div>
      </div>
    </footer>

  );
}

export default Footer;
