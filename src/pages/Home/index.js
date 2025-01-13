import React from 'react'
import Header from '../../components/Header';
import LayoutFlow from './graph';
import { ReactFlowProvider } from '@xyflow/react';


export const Home = () => {
    return (
        <div>
            <div style={{ height: '850px', width: '100%' }}>
                <ReactFlowProvider>
                    <LayoutFlow />
                </ReactFlowProvider>
            </div>
        </div>
    )
}
