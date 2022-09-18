import React, {useEffect, useState} from 'react';
import {Progress, Typography} from 'antd';
import {getDay, getMonth, getNumberOfMonth, getPercent, getСurrentTime} from '../utils/utils-clock';

const {Title, Text} = Typography;

export const Clock = () => {
    const [time, setTime] = useState<string>(getСurrentTime())

    useEffect(() => {
        setInterval(() => setTime(getСurrentTime()), 1000)
    }, [])

    return (
        <>
            <div className={'main'}>
                <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    trailColor={'#e1e2e6'}
                    percent={getPercent()}
                    format={() => time}
                    width={280}
                    strokeWidth={12}
                />
                <div className={'main__content'}>
                    <Title level={5}>{getDay()}</Title>
                    <Text>{getNumberOfMonth()} {getMonth()}</Text>
                </div>
            </div>
        </>
    );
};

