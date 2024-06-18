/**
 * Animation List component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import Lottie from 'lottie-react';

// UTILS IMPORT
import {listJSONS, LottieFileType} from './data/list';

// STYLE IMPORT
import './styles.css';

// COMPONENT TYPES
type AnimationListProps = {
    onAnimateUpload: (data: any) => void;
    onSocketEmit: (data: any) => void;
};

const AnimationList = ({
    onAnimateUpload,
    onSocketEmit,
}: AnimationListProps) => {

    // HANDLE CLICK EVENT
    const handleClickEvent = (data: any) => {
        onAnimateUpload(data);
        onSocketEmit(data);
    }
    return (
        <div className='animation-list-container'>
            <ul className='animation-list'>
                {listJSONS.map((item: LottieFileType) => (
                    <li className='animation-list-item' key={item.id} onClick={() => handleClickEvent(item.animationData)}>
                        <Lottie
                            animationData={item.animationData}
                            style={{ width: 100}}
                            />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default AnimationList;