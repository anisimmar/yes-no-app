import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Space} from 'antd';

import './Home.css'
import {Search, Answer, YNButton} from '../../components'


const Home = () => {
    const [visibleAnswer, setVisibleAnswer] = useState(false);
    const [value, setValue] = useState('')
    const toggleVisibleAnswer = () => {
        setVisibleAnswer(!visibleAnswer);
        setValue('')
    }


    return (
        <div className='wrapper'>
            <Space direction="vertical" size='large' align='center'>
                <h1>Да или Нет?</h1>
                <Form action="">
                    <Space direction="vertical" size='middle' align='center'>
                        <Search setValue={setValue}/>
                        <YNButton
                            toggleVisibleAnswer={toggleVisibleAnswer}
                            visibleAnswer={visibleAnswer}/>
                        {visibleAnswer &&
                        <Answer/>
                        }
                    </Space>
                </Form>
            </Space>
        </div>
    )
}

export default Home

