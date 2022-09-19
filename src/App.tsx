import React, {useState} from 'react';
import {Button, Layout, Typography} from 'antd';
import {DashboardOutlined, FieldTimeOutlined, HourglassOutlined} from '@ant-design/icons';
import {Clock} from './components/Clock';
import {StopWatch} from './components/StopWatch';
import {Timer} from './components/Timer';

const {Header, Footer, Content} = Layout;
const {Title, Text} = Typography;

type HeaderType = 'время' | 'секундомер' | 'таймер'

const App = () => {
    const [header, setHeader] = useState<HeaderType>('время')

    return (
        <Layout className={'app'}>
            <Header className={'header'}>
                <Title level={4} type={'warning'}>{header}</Title>
            </Header>
            <Content>
                {header === 'время' && <Clock/>}
                {header === 'секундомер' && <StopWatch/>}
                {header === 'таймер' && <Timer/>}
            </Content>
            <Footer style={{background: '#e1e2e6'}}>
                <div className={'footer'}>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<FieldTimeOutlined/>}
                        size={'large'}
                        danger={header === 'время'}
                        onClick={() => setHeader('время')}
                    />
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DashboardOutlined/>}
                        size={'large'}
                        danger={header === 'секундомер'}
                        onClick={() => setHeader('секундомер')}
                    />
                    <Button
                        type="primary"
                        shape="round"
                        icon={<HourglassOutlined/>}
                        size={'large'}
                        danger={header === 'таймер'}
                        onClick={() => setHeader('таймер')}
                    />
                </div>
            </Footer>
        </Layout>
    );
};

export default App;