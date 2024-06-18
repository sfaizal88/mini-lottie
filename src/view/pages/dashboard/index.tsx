/**
 * Editor screen component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENT IMPORT
import FileUpload from './components/fileUpload';
import AnimationViewer from './components/animationViewer';
import LayerManager from './components/layerManager';
import PropertyEditor from './components/propertyEditor';
import FileDetails from './components/fileDetails';
import {AnimationList} from '../../organism';

// TYPE IMPORT
import type {PropertiesType} from '../../../types';
import type {animateType} from '../../../context/animateSlice';
import { updateAnimateData, updateTargetName } from '../../../context/animateSlice';

export const socket = io('http://localhost:4000');

const Dashboard = () => {
    // DECLARE LOCAL VARIABLE
    const animationData = useSelector((state: {animate: animateType}) => state.animate.animationData);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null);
    const [properties, setProperties] = useState<PropertiesType>({
        speed: 1,
        scale: 1,
        color: '#000000',
    });

    // HANDLE UPLOAD FILE EVENT
    const handleFileUpload = (data: any) => {
        dispatch(updateAnimateData({ animationData: data }));
    };

    // HANDLE TO UPDATE TARGET NAME
    const handleTargetNameUpdate = (updatedTargetName: string) => {
        dispatch(updateTargetName({ targetLayerName: updatedTargetName}));
    };

    // HANDLE UPDATE LAYER
    const handleLayerUpdate = (updatedLayers: any[]) => {
        dispatch(updateAnimateData({ animationData: {...animationData, layers: updatedLayers} }));
        socketEmit({ ...animationData, layers: updatedLayers });
    };

    // HANDLE TO UPDATE PROPERTY
    const handlePropertyChange = (name: string, value: string | number) => {
        setProperties((prevProps) => {
            return {
          ...prevProps,
          [name]: value,
        }});
    };

    // HANDLE EMIT SOCKET DATA
    const socketEmit = (data: any) => {
        socket.emit('sendJson', {...data, userId});
    }

    // USE EFFECT TRIGGERED ONLOAD
    useEffect(() => {
        // TRIGGED TO SIGN FOR THE USER BY ID
        socket.on('assignId', (id) => {
            setUserId(id);
        });

        // TRIGGERED WHEN WE RECEIVE JSON
        socket.on('receiveJson', (data) => {
            if (data.userId !== userId) {
                handleFileUpload(data);
            }
        });
        return () => {
            socket.off('assignId');
            socket.off('receiveJson');
        };
    }, [userId]);

    return (
        <div className='editor-container'>
            <div className='layer-section'>
                <div className='section-title'>
                    <i className="fa fa-cubes" aria-hidden="true"></i>&nbsp;Layer
                </div>
                <LayerManager 
                    onUpdateLayers={handleLayerUpdate} 
                    onChangeTargetName={handleTargetNameUpdate}
                    onChangeProperty={handlePropertyChange}/>
            </div>
            <div className='animation-section'>
                <div className='animation-viewer'>
                    <AnimationViewer
                        speed={properties.speed}
                        scale={properties.scale}
                        color={properties.color}
                    />
                </div>
                <AnimationList onAnimateUpload={handleFileUpload} onSocketEmit={socketEmit}/>
            </div>
            <div className='info-section'>
                <div className='section-title'>
                    <i className="fa fa-upload" aria-hidden="true"></i>&nbsp;File upload
                </div>
                <FileUpload onFileUpload={handleFileUpload} /><br/><br/>
                <div className='section-title'>
                    <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Setting
                </div>
                <PropertyEditor properties={properties} onChange={handlePropertyChange}/>
                {animationData?.nm && <FileDetails/>}
            </div>
        </div>
        
    )
};

export default Dashboard;