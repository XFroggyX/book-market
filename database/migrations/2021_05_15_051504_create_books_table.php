<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('author', 128) -> comment('Автор');
            $table->string('genre', 40) -> comment('Жанр');
            $table->string('book_name',128) -> comment('Название книги');
            $table->string('image',128) -> nullable() -> comment('Изображение');
            $table->decimal('price', 12,2)->comment('Цена');
            $table->timestamps();
        });
    }
/**id - author - жанр - название книги - обложка - цена**/
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
