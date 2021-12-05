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
        <a href="/" className="header__link image-link">
          <div>
            ブログ
          </div>
        </a>
        <Link to="/contact" className="header__link image-link">
          <div>
            ご連絡
          </div>
        </Link>
  
      </div>
    </header>
  );
}

export default Header;