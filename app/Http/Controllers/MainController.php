<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Link;
use App\Models\History;

class MainController extends Controller
{
    public function index()
    {
        //現在日時を取得
        $date = new \DateTime();
        $year = $date->format('Y');

        //ゲームリストを取得
        $games = Game::where('is_display', 1)
            ->orderBy('sort_number', 'asc')
            ->get()
            ->toJson(JSON_UNESCAPED_UNICODE);
        
        //リンク一覧を取得
        $friend_links = Link::where('is_display', 1)
            ->where('link_type', 'friend')
            ->orderBy('sort_number', 'asc')
            ->get()
            ->toJson(JSON_UNESCAPED_UNICODE);
        $material_links = Link::where('is_display', 1)
            ->where('link_type', 'material')
            ->orderBy('sort_number', 'asc')
            ->get()
            ->toJson(JSON_UNESCAPED_UNICODE);
        
        //更新履歴の取得
        $histories = History::orderBy('updated_on', 'desc')
            ->limit(3)
            ->get()
            ->toJson(JSON_UNESCAPED_UNICODE);

        //年だけ返す
        return view('app', compact('year', 'games', 'friend_links', 'material_links', 'histories'));
    }
}
