/**
 * File details component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import { useSelector } from 'react-redux';

// CONTEXT
import type {animateType} from '../../../../context/animateSlice';

const FileDetails = () => {
    // DECLARE LOCAL VARIABLE
    const animationData = useSelector((state: {animate: animateType}) => state.animate.animationData);
    
    return (
        <>
            <div className='section-title'>
                <i className="fa fa-file" aria-hidden="true"></i>&nbsp;File specification
            </div>
            {animationData?.nm && <div className='fieldset'>
                <label className='fieldlabel'>Name</label>
                <div className='fieldValue'>
                    <div className='field-value-item'>{animationData.nm}</div>
                </div>
            </div>}

            {animationData?.v && <div className='fieldset'>
                <label className='fieldlabel'>Lottie Web version</label>
                <div className='fieldValue'>
                    <div className='field-value-item'>{animationData.v}</div>
                </div>
            </div>}
        </>
    )
}

export default FileDetails;