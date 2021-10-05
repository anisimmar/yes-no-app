import React from 'react';
import {Button} from 'antd';

const YNButton = ({
                      toggleVisibleAnswer,
                      visibleAnswer,
                  }:
                      {
                          toggleVisibleAnswer: any,
                          visibleAnswer: boolean,
                      }) => {
    return (
        <>
            <Button type="primary" size='large' onClick={toggleVisibleAnswer}>
                {visibleAnswer ? 'Другой вопрос' : 'Получить ответ'}
            </Button>
        </>
    )
}

export default YNButton