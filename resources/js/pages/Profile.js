import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

function Profile() {

  return (
    <div className="content">

      {/* head情報 */}
      <Helmet>
        <title>MIR_Rev.｜管理人プロフィール</title>
        <meta name="description" content="管理人ＭＩＲのプロフィールと秘密です。"></meta>
        <link rel="canonical" href={ APP_URL + "/profile" } /> 
      </Helmet>
    
      {/* メインコンテンツ */}
      <div className="main-window__wrap">
        <div className="main-window__inner">
          
          <div className="profile__wrap">
            {/* 顔画像 */}
            <div className="profile__face">
              <img src="/image/mir.jpg" alt="管理人MIR イメージ画像" />
            </div>
            {/* 基本情報 --> */}
            <div className="profile__information">
              <h2 className="profile__information__title">
                管理人情報
              </h2>
              <div>
                <span>名前</span>
                <span>ＭＩＲ<br className="sp-only" />（えむあいあーる）</span>
              </div>
              <div>
                <span>出身地</span>
                <span>新潟県</span>
              </div>
              <div>
                <span>主な派閥</span>
                <span>猫派 ・ インドア派 ・ ビアンカ派</span>
              </div>
            </div>
            {/* ゲーム情報 */}
            <div className="profile__game">
              <h2 className="profile__game__title">
                ゲーム履歴
              </h2>
              <div>
                <span>初めて買ってもらったゲーム</span>
                <span>スーパーマリオブラザーズ２（ディスクシステム）</span>
              </div>
              <div>
                <span>子供の頃好きだったゲーム</span>
                <span>ファイアーエムブレム（ＦＣ）</span>
              </div>
              <div>
                <span>性の目覚め</span>
                <span>アイドル八犬伝（ＦＣ）</span>
              </div>
              <div>
                <span>ハマった格ゲー</span>
                <span>ヴァンパイアセイヴァー（アーケード）</span>
              </div>
              <div>
                <span>シューターになったきっかけ</span>
                <span>レイストーム（ＡＣ）</span>
              </div>
              <div>
                <span>思い出の全一</span>
                <span>斑鳩（ＡＣ）</span>
              </div>
              <div>
                <span>大人になっても楽しめるゲーム</span>
                <span>逆転裁判（ＧＢＡ）</span>
              </div>
            </div>
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
  
export default Profile;