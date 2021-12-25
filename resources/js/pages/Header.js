import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header background-pattern">
      <div className="header__content">
  
        {/* サークルロゴ */}
        <Link to="/" className="header__logo image-link">
          <div>
            <img src="/image/circlelogo.png" />
          </div>
        </Link>
    
        {/* 各種リンクボタン */}
        <Link to="/game" className="header__link image-link">
          <div>
            ゲーム
          </div>
        </Link>
        <Link to="/link" className="header__link image-link">
          <div>
            リンク
          </div>
        </Link>
        <a href="https://tirliss.wordpress.com/" className="header__link image-link" target="blank">
          <div>
            ブログ
          </div>
        </a>
        <a href="https://ws.formzu.net/fgen/S27906946/" className="header__link image-link" target="blank">
          <div>
            ご連絡
          </div>
        </a>
  
      </div>
    </header>
  );
}

export default Header;