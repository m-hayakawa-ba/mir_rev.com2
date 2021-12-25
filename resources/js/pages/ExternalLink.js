import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

function ExternalLink() {

  let array_friend_links   = JSON.parse( friend_links );
  let array_material_links = JSON.parse( material_links );

  return (
    <div className="content">

      {/* head情報 */}
      <Helmet>
        <title>MIR_Rev.｜おすすめリンク</title>
        <meta name="description" content="お友達のリンクや、ゲーム制作に便利な素材サイトなどのリンク集です。"></meta>
        <link rel="canonical" href={ APP_URL + "/link" } /> 
      </Helmet>
    
      {/* メインコンテンツ */}
      <div className="main-window__wrap">
        <div className="main-window__inner">
    
          {/* お友達関連 */}
          <h2 className="link__h2">ゲーム・お友達 関連</h2>
          <ul>
            {array_friend_links.map((friend_link) => 
              <li key={friend_link.id} className="link__item-wrap">
                <a className="link__item-image image-link" href={friend_link.link_url} target="blank">
                  <img src={friend_link.thumbnail_url} />
                </a>
                <div className="link__item-text-wrap">
                  <a className="link__item-name text-link" href={friend_link.link_url} target="blank">
                    { friend_link.name }
                  </a>
                  <div className="link__item-caption">
                    { friend_link.description }
                  </div>
                </div>
              </li>
            )}
          </ul>
  
          {/* 素材関連 */}
          <h2 className="link__h2 mt30">素材 関連</h2>
          <ul>
            {array_material_links.map((material_link) => 
              <li key={material_link.id} className="link__item-wrap">
                <a className="link__item-image image-link" href={material_link.link_url} target="blank">
                  <img src={material_link.thumbnail_url} />
                </a>
                <div className="link__item-text-wrap">
                  <a className="link__item-name text-link" href={material_link.link_url} target="blank">
                    { material_link.name }
                  </a>
                  <div className="link__item-caption">
                    { material_link.description }
                  </div>
                </div>
              </li>
            )}
          </ul>
  
          {/* リンクについて */}
          <h2 className="link__h2 mt30">当サイトへのリンクについて</h2>
          <div className="link__announce">
            当サイトはリンクフリーです。<br className="sp-only" />バナーは以下の物をお使いください。
          </div>
          <div className="link__banner">
            <img src="/image/banner1.jpg" />
            <img src="/image/banner2.jpg" />
            <img src="/image/banner3.jpg" />
          </div>
    
        </div>
      </div>
    
      {/* 戻るボタン */}
      <Link to="/" className="previous-button image-link mt60">
        ◀&nbsp;戻る
      </Link>
  
    </div>
  );
}
  
export default ExternalLink;