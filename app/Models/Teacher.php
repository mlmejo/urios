<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = ['section_id'];

    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    public function section()
    {
        return $this->hasMany(Section::class);
    }
}
