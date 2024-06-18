/**
 * Property Editor component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import React from 'react';
import { useSelector } from 'react-redux';

// CONTEXT
import type {animateType} from '../../../../context/animateSlice';

// COMPONENT PROPS TYPE
type PropertiesProps = {
    speed: number,
    scale: number,
    color: string,
}
  
// COMPONENT PROPS TYPE
type PropertyEditorProps = {
    properties: PropertiesProps;
    onChange: (name: string, value: string | number) => void;
}

const PropertyEditor = ({
    properties, 
    onChange,
}: PropertyEditorProps ) => {
    // DECLARE LOCAL VARIABLE
    const targetLayerName = useSelector((state: {animate: animateType}) => state.animate.targetLayerName);

    // HANDLE CHANGE EVENT
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange(name, name === 'speed' || name === 'scale' ? parseFloat(value) : value);
    };
    
    return (
        <div>
            <div className='fieldset'>
                <label className='fieldlabel'>Speed</label>
                <input type="number" className='textfield' name="speed" value={properties.speed} onChange={handleChange} />
            </div>
            <div className='fieldset'>
                <label className='fieldlabel'>Scale</label>
                <input type="number" className='textfield' name="scale" value={properties.scale} onChange={handleChange} />
            </div>
            {targetLayerName && <div className='fieldset'>
                <label className='fieldlabel'>Color</label>
                <input type="color" className='textfield' name="color" value={properties.color} onChange={handleChange} />
            </div>}
        </div>
    )
};

export default PropertyEditor;