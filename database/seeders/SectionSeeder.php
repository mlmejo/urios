<?php

namespace Database\Seeders;

use App\Models\EducationStage;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Section::create([
            'name' => 'Graham Bell',
            'education_stage_id' => EducationStage::first()->id,
        ]);
    }
}
