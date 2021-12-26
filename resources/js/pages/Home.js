import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

function Home() {

  let array_games = JSON.parse( games );
  let array_histories = JSON.parse( histories );

  return (
    <div className="content">

      {/* head情報 */}
      <Helmet>
        <title>MIR_Revision 同人ゲームを作ったり配布したりしてるサイトです ^ν^</title>
        <meta name="description" content="同人ゲームサークル MIR_Revision のホームページです。アクションＲＰＧやパズルゲームの開発・販売・配布を行っています。"></meta>
        <link rel="canonical" href={ APP_URL } /> 
      </Helmet>

      {/* プリンセスリビジョン */}
      <a className="index__psr-wrap image-link" href="/game_psr">
        <div className="index__psr-image">
          <img src="/image/psr.jpg" alt="プリンセスシェイド バナー画像" />
        </div>
        <div className="index__psr-caption">
          弾幕アクションＲＰＧ 第二弾！<br />
          「プリンセスシェイド リビジョン」<br className="sp-only" />開発中です！！！
        </div>
      </a>
  
      {/* ティルキッス */}
      <div className="index__tir-wrap">
        <div className="index__tir-movie">
          <iframe src="https://www.youtube.com/embed/LQeSjsx3N5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowFullScreen></iframe>
        </div>
      </div>
      <div className="index__tir-caption">
        <a href="/" className="text-link">
          弾幕アクションＲＰＧ 第一弾！<br />
          「ティルキッス ～Princess Shade～」<br className="sp-only" />フリーソフト配布中！
        </a>
      </div>

      {/* ゲーム紹介とサイト情報・更新履歴 */}
      <div className="index__2column">
  
        {/* サイト情報と更新履歴 */}
        <div className="index__1st-column">
          <div className="index__content-title">● サイト情報 ●</div>
          <div className="index__content-main index__information mb20">
            <div className="index__information__iamge">
              <img src="/image/mir.jpg" alt="管理人MIR イメージ画像" />
            </div>
            <div>
              <div className="index__information__caption">
                <span>管理人 ＭＩＲ</span><br />
                <Link to="/profile" className="text-link">・プロフィール</Link><br />
                <a href="https://ws.formzu.net/fgen/S27906946/" className="text-link" target="blank">・連絡先</a>
              </div>
            </div>
          </div>
          <div className="index__content-title">● 更新履歴 ●</div>
          <div className="index__content-main mb20">
            <ul>
              {array_histories.map((history) => 
                <li key={ history.id }>
                  <div className="index__history">
                    <span>{ history.updated_on }</span>
                    <p dangerouslySetInnerHTML={{
                        __html: history.content
                      }}
                    />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
  
        {/* ゲーム紹介 */}
        <div className="index__2nd-column">
          <div className="index__content-title">● ゲームコンテンツ ●</div>
          <div className="index__content-main">
            <ul>
              {array_games.map((game) => 
                <li key={ game.id } className="index__item-wrap">
                  <a className="index__item-image image-link" href={ game.link_url }>
                    <img src={ game.thumbnail_url } alt={ game.title } />
                  </a>
                  <div className="index__item-text-wrap">
                    <a className="index__item-title text-link" href={ game.link_url }>
                      { game.title }
                    </a>
                    <div className="index__item-caption">
                      { game.description }
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
  
      </div>
      
    </div>
  );
}

export default Home;