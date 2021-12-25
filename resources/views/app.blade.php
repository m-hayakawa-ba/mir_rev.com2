<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  {{-- head情報 --}}
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title></title>
    <meta name="keywords" CONTENT="同人ゲーム,弾幕,アクションRPG,RPG,シューティング,ティルキッス,プリンセスシェイド,リビジョン,MIR">
  
    <script src="/js/app.js" defer></script> {{-- js --}}
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

    {{-- 初回読み込み時のcssの動作を防止 --}}
    <script>console.log("css");</script>

    {{-- html --}}
    <div id="app">
    </div>

  </body>

</html>