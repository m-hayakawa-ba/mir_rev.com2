import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header class="header background-pattern">
      <div class="header__content">
  
      {/* サークルロゴ */}
      <Link to="/" class="header__logo image-link">
        <div>
          <img src="/image/circlelogo.png" />
        </div>
      </Link>
  
      {/* 各種リンクボタン */}
      <Link to="/game" class="header__link image-link">
        <div>
          ゲーム
        </div>
      </Link>
      <Link to="/link" class="header__link image-link">
        <div>
          リンク
        </div>
      </Link>
      <a href="/" class="header__link image-link">
        <div>
          ブログ
        </div>
      </a>
      <Link to="/contact" class="header__link image-link">
        <div>
          ご連絡
        </div>
      </Link>

    </div>
  </header>
  );
}

export default Header;