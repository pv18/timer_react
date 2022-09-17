import React, {useState} from 'react';
import {Button, Layout, Progress, Typography} from 'antd';
import {
    DashboardFilled,
    DashboardOutlined,
    FieldTimeOutlined,
    HourglassOutlined,
    SearchOutlined
} from '@ant-design/icons';

const {Header, Footer, Content} = Layout;
const {Title, Text} = Typography;

type HeaderType = 'время' | 'секундомер' | 'таймер'

const App = () => {
    const [header, setHeader] = useState('время')

    return (
        <Layout className={'app'}>
            <Header className={'header'}>
                <Title level={4} type={'warning'}>{header}</Title>
            </Header>
            <Content>
                <div className={'main'}>
                    <Progress
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={90}
                        width={280}
                        strokeWidth={12}
                    />
                    <div className={'main__content'}>
                        <Title level={5}>Москва</Title>
                        <Text>суббота, 17 сентября</Text>
                    </div>
                </div>
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