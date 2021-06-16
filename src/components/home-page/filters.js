import React, { useState } from 'react';
// COMPONENTS
import Checkbox from '../ui/checkbox';
import Slider from '../ui/slider';
import Input from '../ui/input';
import Button from '../ui/button';
// ICONS
import { ReactComponent as FilterIcon } from 'assets/svgs/filter.svg';
// STYLES
import './filters.css';

function ProductsFilters({ requestFilter, price, params }) {

    const [state, setState] = useState({
        has_selling_stock: 0,
        'price[max]': 0,
        title: '',
        ...params
    });

    const setStateHandler = (prop, val) => setState(state => ({
        ...state,
        [prop]: val
    }));

    const onSubmitHandler = e => {
        e.preventDefault();

        const { title } = e.target.elements;

        const reqBody = { ...state, page: 1, q: title.value };

        // Removes the max price from the request body when it is 0
        if (Number(state['price[max]']) === 0)
            delete reqBody['price[max]'];

        requestFilter(reqBody);
    }

    return (
        <div className="home__filters">
            <h2>
                <FilterIcon />
                <span>فیلتر</span>
            </h2>
            <form onSubmit={onSubmitHandler}>
                <Checkbox
                    id="has_selling_stock"
                    label="فقط کالاهای موجود"
                    checked={!!state.has_selling_stock}
                    onChange={({ target }) => setStateHandler('has_selling_stock', target.checked ? 1 : 0)}
                />
                <Slider
                    {...price}
                    label="محدوده قیمت"
                    id="price[max]"
                    value={state['price[max]']}
                    onChange={({ target }) => setStateHandler('price[max]', target.value)}
                />
                <Input defaultValue={params.q || ''} id="title" label="جستوجو محصول" />
                <Button type="submit">اعمال</Button>
            </form>
        </div>
    )
}

export default ProductsFilters;
