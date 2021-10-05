import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Input, Space} from 'antd';

const Search = ({setValue}: {setValue:any}) => {

    const onChange = (e: any) => {
        setValue(e.target.value);
    };


    return (
        <>
            <Input placeholder="Введите Ваш вопрос..."
                   size='large'
                   onChange={onChange}
                //onPressEnter
                   allowClear
            />
        </>
    )
}

export default Search