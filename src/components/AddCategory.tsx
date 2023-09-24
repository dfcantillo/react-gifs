import { ChangeEvent, useState }  from 'react';
import React from 'react';

interface Type {
    onNewCategory:Function
}

export const AddCategory: React.FC<Type> = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputValue(value);
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const value = inputValue.trim();
        if(value.length <= 1) return;
        // setCategories((categories) => [inputValue,...categories])
        onNewCategory(value);//Se emite al padre el valor
        setInputValue('');
        // console.log(setCategories);
        
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Category</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="type a category and press enter"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </div>
        </form>
    )
}
