<?php

namespace Mock;

class ProductMock {

    /**
     * @return array of product dummy
     */
    public static function products(): array
    {
        return array(
            array(
                'category_id' => 2,
                'name'          => 'Smart Corpo',
                'description'   => '<p>Unilimited Internet</p>',
                'brand'         => '',
                'status'        => true,
                'price'         => 2000,
                'stocks'        => 10
            ),
            array(
                'category_id' => 2,
                'name'          => 'MIMO ANTHENA 18 DBI',
                'description'   => '<p><b>New Release</b></p>',
                'brand'         => 'Globe',
                'status'        => true,
                'price'         => 2500,
                'stocks'        => 10
            ),
            array(
                'category_id' => 2,
                'name'          => 'White Mamba',
                'description'   => '<p><b>Open Line</b></p>',
                'brand'         => 'Huawie',
                'status'        => true,
                'price'         => 4500,
                'stocks'        => 10
            ),
        );
    }
}
