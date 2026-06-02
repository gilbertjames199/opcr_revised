<?php

namespace App\Helpers;

class BudgetHelper
{
    public static function getCategoryAbbreviation($category)
    {
        return match ($category) {
            'Maintenance, Operating, and Other Expenses' => 'mooe',
            'Capital Outlay' => 'co',
            'Personnel Services' => 'ps',
            'Financial Expenses' => 'fe',
            default => null,
        };
    }
}
