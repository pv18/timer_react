import React, {useEffect, useState} from 'react';
import {Progress, Slider} from 'antd';
import {PauseCircleFilled, PlayCircleFilled, ReloadOutlined} from '@ant-design/icons';
import {getTimerPercent, getСonvertedTimeForTimer} from '../utils/utils-timer';

export const Timer = () => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [showButtonStart, setShowButtonStart] = useState<boolean>(true);
    const [time, setTime] = useState(0);

    const totalTime = hours * 3600 + minutes * 60 + seconds

    useEffect(() => {
        setTime(hours * 3600 + minutes * 60 + seconds)
    }, [hours, minutes, seconds])


    const onChangeHours = (newValue: number) => {
        setHours(newValue);
    };
    const onChangeMinutes = (newValue: number) => {
        setMinutes(newValue);
    };
    const onChangeSeconds = (newValue: number) => {
        setSeconds(newValue);
    };

    useEffect(() => {
        let interval: any = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time === 0 ? 0 : time - 1);
            }, 1000);
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
        setShowButtonStart(true);
        setHours(0)
        setMinutes(0)
        setSeconds(0)
    };

    return (
        <div className={'main'}>
            <Progress
                type="circle"
                strokeColor={{
                    '100%': '#dbdbe2',
                }}
                trailColor={'#9503fb'}
                percent={getTimerPercent(totalTime, time)}
                format={() => getСonvertedTimeForTimer(time)}
                width={280}
                strokeWidth={12}
            />
            <div className={'slider-group'}>
                <Slider
                    min={0}
                    max={23}
                    onChange={onChangeHours}
                    value={hours}
                    trackStyle={{background: '#0077ff'}}
                    disabled={isActive}
                />
                <Slider
                    min={0}
                    max={59}
                    onChange={onChangeMinutes}
                    value={minutes}
                    trackStyle={{background: '#9000ff'}}
                    disabled={isActive}
                />
                <Slider
                    min={0}
                    max={59}
                    onChange={onChangeSeconds}
                    value={seconds}
                    trackStyle={{background: '#ff7300'}}
                    disabled={isActive}
                />
            </div>
            <div className={'button-group'}>
                <ReloadOutlined style={{fontSize: '36px'}} onClick={handleReset}/>
                {showButtonStart
                    ? <PlayCircleFilled style={{fontSize: '50px', color: '#8a19e2'}} onClick={handleStart}/>
                    : <PauseCircleFilled style={{fontSize: '50px', color: '#fb0303'}} onClick={handlePauseResume}/>
                }
            </div>
        </div>
    );
};

