<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

/**
 * DBの日付のフォーマットを変更する
 */
class DateTimeFormat implements CastsAttributes
{
    public function get($model, $key, $value, $attributes)
    {
        $date = new \DateTime($value);
        return $date->format('Y.m.d');
    }

    public function set($model, $key, $value, $attributes)
    {
        $date = new \DateTime($value);
        return $date->format('Y-m-d H:i:s');
    }
}