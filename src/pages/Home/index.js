import React from 'react';
import Header from '../../components/Header';
import LayoutFlow from './graph';
import { ReactFlowProvider } from '@xyflow/react';


export const Home = () => {
    return (
        <div style={{ height: '100vh', width: '100%', position: 'absolute', left: 0, top: 0, zIndex: -100 }}>
            <ReactFlowProvider>
                <LayoutFlow />
            </ReactFlowProvider>
        </div>
    );
};
