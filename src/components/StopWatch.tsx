import React, {useEffect, useState} from 'react';
import {Button, Progress, Typography} from 'antd';
import {getDay, getMonth, getNumberOfMonth, getPercent, getTime, getСurrentTime} from '../utils/utils-clock';
import {getPercentMinutes, getСonvertedTime} from '../utils/utils-stopwatch';
import {
    HourglassOutlined,
    PauseCircleFilled,
    PlayCircleFilled,
    ReloadOutlined,
    RightCircleFilled
} from '@ant-design/icons';

const {Title, Text} = Typography;

export const StopWatch = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [showButtonStart, setShowButtonStart] = useState<boolean>(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval: any = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        setShowButtonStart(false)
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
        setShowButtonStart(true)
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

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
                    percent={getPercentMinutes(time)}
                    format={() => getСonvertedTime(time)}
                    width={280}
                    strokeWidth={12}
                />
                <br/>
                <br/>
                <br/>
                <div className={'button-group'}>
                    <ReloadOutlined style={{fontSize: '30px'}} onClick={handleReset}/>
                    {showButtonStart
                        ? <PlayCircleFilled style={{fontSize: '60px', color: '#8a19e2'}} onClick={handleStart}/>
                        : <PauseCircleFilled style={{fontSize: '60px', color: '#fb0303'}} onClick={handlePauseResume}/>
                    }
                </div>
            </div>
        </>
    );
};

