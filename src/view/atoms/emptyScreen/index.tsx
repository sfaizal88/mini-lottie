/**
 * Empty Screen component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import React from 'react';

// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS
type EmptyScreenProps = {
    title: string;
    subtitle: string;
}

const EmptyScreen = ({
    title,
    subtitle
}: EmptyScreenProps) => {
    return (
        <div className='empty-container'>
            <div className='empty-title'>{title}</div>
            <div className='empty-subtitle'>{subtitle}</div>
        </div>
    )
}

export default EmptyScreen;