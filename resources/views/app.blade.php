<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  {{-- head情報 --}}
  <head>

    {{-- googleタグマネージャー --}}
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KM2BFMP');</script>

    {{-- head基本設定 --}}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MIR_Revision 同人ゲームを作ったり配布したりしてるサイトです ^ν^</title>
    <meta name="keywords" CONTENT="同人ゲーム,弾幕,アクションRPG,RPG,シューティング,ティルキッス,プリンセスシェイド,リビジョン,MIR">
    <link rel="icon" href="/image/icon.ico" id="favicon">
    <link rel="apple-touch-icon" sizes="256x256" href="/image/icon.png">
    <link href="/css/app.css" rel="stylesheet"> {{-- caa --}}

    {{-- 定数を保存 --}}
    <script>
      window.APP_URL = '{{ config('app.url') }}';
    </script>

    {{-- 共通のデータを保存 --}}
    <script>
      window.year = {{ $year }};
      window.games = '{!! $games !!}';
      window.friend_links = '{!! $friend_links !!}';
      window.material_links = '{!! $material_links !!}';
      window.histories = '{!! $histories !!}'.replace(/(\r\n)/g, '\\n');
    </script>

  </head>

  {{-- body情報 --}}
  <body>
      
    {{-- googleタグマネージャー --}}
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KM2BFMP"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    {{-- 初回読み込み時のcssの動作を防止 --}}
    <script>console.log("css");</script>

    {{-- html --}}
    <div id="app">
    </div>

    {{-- js --}}
    <script src="/js/app.js" defer></script> 
    
  </body>

</html>