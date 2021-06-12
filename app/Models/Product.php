<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class Product extends Model
{
    protected $table = 'books';

    protected $fillable = [
        'id',
        'author',
        'genre',
        'book_name',
        'image',
        'price'
    ];

    public function toArray()
    {
        return [
            'id' => $this->id,
            'author' => $this->author,
            'genre' => $this->genre,
            'book_name' => $this->book_name,
            'image' => URL::to('/') . '/' . $this->image,
            'price' => (double)$this->price
        ];
    }
}
