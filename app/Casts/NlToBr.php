<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

/**
 * 改行コードを<br>タグに置換する
 */
class NlToBr implements CastsAttributes
{
    public function get($model, $key, $value, $attributes)
    {
        return nl2br($value);
    }

    public function set($model, $key, $value, $attributes)
    {
        return str_replace("<br>", "\n", $value);
    }
}