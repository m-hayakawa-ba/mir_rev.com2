<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  {{-- head情報 --}}
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title></title>
    <meta name="description">
    <meta name="keywords" CONTENT="同人ゲーム,弾幕,アクションRPG,RPG,シューティング,ティルキッス,プリンセスシェイド,リビジョン,MIR">
  
    <link href="/css/app.css" rel="stylesheet">
  </head>

  {{-- body情報 --}}
  <body>

    {{-- 初回読み込み時のcssの動作を防止 --}}
    <script>console.log("css");</script>

    {{-- html --}}
    <div id="app">

    </div>

    {{-- script --}}
    <script src="/js/app.js" defer></script>

  </body>

</html>