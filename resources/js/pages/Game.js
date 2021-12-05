import React from 'react';
import {Link} from 'react-router-dom';

function Game() {

  let array_games = JSON.parse( games );

  return (
    <div className="content">
    
      {/* メインコンテンツ */}
      <div className="main-window__wrap">
        <div className="main-window__inner">
    
          {/* ゲームリストの表示 */}
          <ul>
            {array_games.map((game) => 
              <li key={game.id} className="game__item-wrap">
                <a className="game__item-image image-link" href={ game.link_url }>
                  <img src={ game.thumbnail_url } />
                </a>
                <div className="game__item-text-wrap">
                  <a className="game__item-title text-link" href="/">
                    { game.title }({ game.status })
                  </a>
                  <div className="game__item-caption">
                    { game.description }
                  </div>
                </div>
              </li>
            )}
          </ul>
    
        </div>
      </div>
    
      {/* 戻るボタン */}
      <Link to="/" className="previous-button image-link mt60">
        ◀&nbsp;戻る
      </Link>
  
    </div>
  );
}
  
export default Game;