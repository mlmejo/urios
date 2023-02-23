<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'education_stage'];

    public function education_stage()
    {
        return $this->belongsTo(EducationStage::class);
    }
}
