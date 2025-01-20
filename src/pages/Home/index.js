import React from 'react';
import Header from '../../components/Header';
import LayoutFlow from './graph';
import { ReactFlowProvider } from '@xyflow/react';

export const Home = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Header style={{ position: 'fixed', top: 0, left: 0, width: '30%', zIndex: 10 }} />
            <div style={{ height: '100vh', width: '100%', position: 'absolute', left: 0, top: 0, zIndex: -100 }}>
                <ReactFlowProvider>
                    <LayoutFlow />
                </ReactFlowProvider>
            </div>
        </div>
    );
};
