/**
 * Layer Manager component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMMON COMPONENTS
import {MLButton, EmptyScreen} from '../../../atoms';

// UTILS
import {rgbToHex} from '../../../../utils';

// CONTEXT
import type {animateType} from '../../../../context/animateSlice';
import { updateTargetName } from '../../../../context/animateSlice';

type LayerProps = {
    nm: string,
    selected?: boolean,
    visible?: boolean,
}

type LayerManagerProps = {
    onUpdateLayers: (layers: LayerProps[]) => void,
    onChangeTargetName: (name: string) =>  void,
    onChangeProperty: (name: string, value: string | number) => void;
}

const LayerManager = ({ 
    onUpdateLayers,
    onChangeTargetName,
    onChangeProperty,
}: LayerManagerProps) => {
    const animationData = useSelector((state: {animate: animateType}) => state.animate.animationData);
    const [layers, setLayers] = useState<LayerProps[]>([]);
    const [selectedTargetName, setSelectedTargetName] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (animationData && animationData.layers) {
            setLayers(animationData.layers.map((layer: any) => ({ ...layer, visible: true })));
        }
    }, [animationData]);
    
    const handleRemoveLayers = () => {
        const updatedLayers = layers.filter(layer => !layer.selected);
        setLayers(updatedLayers);
        onChangeTargetName("");
        onUpdateLayers(updatedLayers);
    };

    const handleRemoveSpecificLayer = (selectedId: number) => {
        const updatedLayers = layers.filter((item: any, index: number) => item && selectedId !== index);
        setLayers(updatedLayers);
        onChangeTargetName("");
        onUpdateLayers(updatedLayers);
    };
    
    const toggleLayerSelection = (index: number) => {
        const updatedLayers = [...layers];
        updatedLayers[index].selected = !updatedLayers[index].selected;
        setLayers(updatedLayers);
    };

    const handleUpdateTargetName = (layerName: string) => {
        const layers = animationData.layers;
        const layerIndex = layers.findIndex((layer: any) => layer.nm === layerName);
        setSelectedTargetName((prev) => {
            let val = layerName;
            if (prev === layerName) {
                val = ""
            }
            onChangeTargetName(val)
            return val;
        })
        if (layerIndex !== -1 && layers?.[layerIndex].shapes?.[0].it?.[1].ty === 'fl') {
            // Update the color of the target shape
            const colorRGBCode = rgbToHex(layers[layerIndex].shapes[0].it[1].c.k);
            onChangeProperty('color', colorRGBCode);
        } else {
            dispatch(updateTargetName(""));
        }
        
    }

    const saveFile = async () => {
        const response = await fetch('http://localhost:4000/saveFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ animationData }),
        });
        const data = await response.json();
        alert(data.message);
    }
    return (
        <>
            {layers.length > 0 ? 
                <><ul className='layer-list'>
                    {layers.map((layer, index) => (
                    <li key={index} onClick={() => handleUpdateTargetName(layer.nm)} className={clsx(selectedTargetName === layer.nm && 'targeted')}>
                        <input
                        type="checkbox"
                        checked={layer.selected || false}
                        onChange={() => toggleLayerSelection(index)}
                        />
                        {layer.nm}
                        
                        <i className="fa fa-trash layer-delete" onClick={() => handleRemoveSpecificLayer(index)} aria-hidden="true"></i>
                    </li>
                    ))}
                </ul>
                <br/>
                <MLButton isFullwidth isSecondary onClick={handleRemoveLayers} label='Remove Selected Layers'/><br/><br/>
                <MLButton isFullwidth onClick={saveFile} label='Save animation'/>
                </> :
                <EmptyScreen title='No layer found' subtitle='Look like we dont have any layer added yet. Please upload valid JSON file to get all layer.'/>
            }
        </>
    )
};

export default LayerManager;