<?php
namespace Mock;

class CategoryMock {

    /**
     * categories
     *
     * @return array
     */
    public static function categories():array
    {
        return array(
            array(
                'name' => 'computer'
            ),
            array(
                'name' => 'router'
            ),
        );
    }

}
