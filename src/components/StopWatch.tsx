import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Progress} from 'antd';
import {getPercentMinutes, getСonvertedTime} from '../utils/utils-stopwatch';
import {PauseCircleFilled, PlayCircleFilled, ReloadOutlined} from '@ant-design/icons';

export const StopWatch = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [showButtonStart, setShowButtonStart] = useState<boolean>(true);
    const [time, setTime] = useState(0);

    const interval = useRef<NodeJS.Timer | undefined>(undefined)

    useEffect(() => {
        if (isActive && !isPaused) {
            interval.current = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval.current);
        }
        return () => {
            clearInterval(interval.current);
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
        setShowButtonStart(true);
    };

    return (
        <>
            <div className={'main'}>
                <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#0000ff',
                        '15%': '#00ffff',
                        '30%': '#a100ff',
                        '45%': '#ffff00',
                        '60%': '#ff0000',
                        '75%': '#0000ff',
                        '90%': '#00ffff',
                        '100%': '#9503fb',
                    }}
                    trailColor={'#e1e2e6'}
                    percent={getPercentMinutes(time)}
                    format={() => getСonvertedTime(time)}
                    width={280}
                    strokeWidth={12}
                />
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

