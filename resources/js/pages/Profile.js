import React from 'react';
import {Link} from 'react-router-dom';

function Profile() {

  return (
    <div className="content">
    
      {/* メインコンテンツ */}
      <div class="main-window__wrap">
        <div class="main-window__inner">
          
          <div class="profile__wrap">
            {/* 顔画像 */}
            <div class="profile__face">
              <img src="/image/mir.jpg" alt="管理人MIR イメージ画像" />
            </div>
            {/* 基本情報 --> */}
            <div class="profile__information">
              <h2 class="profile__information__title">
                管理人情報
              </h2>
              <div>
                <span>名前</span>
                <span>ＭＩＲ<br class="sp-only" />（えむあいあーる）</span>
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
            <div class="profile__game">
              <h2 class="profile__game__title">
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
                <span>大人になって好きになったゲーム</span>
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