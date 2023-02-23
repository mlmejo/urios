<?php

namespace Database\Seeders;

use App\Models\EducationStage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EducationStageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stages = [];

        for ($i = 1; $i <= 12; $i++) {
            $stages[] =  ['name' => 'Grade ' . $i];
        }

        $stages[] = ['name' => 'First year'];
        $stages[] = ['name' => 'Second year'];
        $stages[] = ['name' => 'Third year'];
        $stages[] = ['name' => 'Fourth year'];

        foreach ($stages as $stage) {
            EducationStage::create($stage);
        }
    }
}
