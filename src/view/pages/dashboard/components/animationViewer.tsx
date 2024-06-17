/**
 * Animation Viewer component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { useSelector, useDispatch } from 'react-redux';

// UTILS
import {hexToRgb} from '../../../../utils';

// CONTEXT
import type {animateType} from '../../../../context/animateSlice';
import { updateTargetName } from '../../../../context/animateSlice';

// STYLE IMPORT
import '../styles.css';

type AnimationViewerProps = {
    speed: number;
    scale: number;
    color: string;
}

const AnimationViewer = ({ 
    speed, 
    scale, 
    color
}: AnimationViewerProps) => {
    const animationData = useSelector((state: {animate: animateType}) => state.animate.animationData);
    const targetLayerName = useSelector((state: {animate: animateType}) => state.animate.targetLayerName);
    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<AnimationItem | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
      if (animationData && animationContainer.current) {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
        const modifiedAnimationData = JSON.parse(JSON.stringify(animationData));
        const layers = modifiedAnimationData.layers;

        // Find the target layer by name
        const targetLayerIndex = layers.findIndex((layer: any) => layer.nm === targetLayerName);
        if (targetLayerIndex !== -1 && layers[targetLayerIndex].shapes?.[0].it?.[1].ty === 'fl') {
            // Update the color of the target shape
            layers[targetLayerIndex].shapes[0].it[1].c.k = hexToRgb(color);
        } else {
          dispatch(updateTargetName(""))
        }
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: modifiedAnimationData,
        });

        animationInstance.current.setSpeed(speed);
        return () => animationInstance.current?.destroy();
      }
    }, [animationData, speed, color]);

    useEffect(() => {
      if (animationInstance.current) {
        animationInstance.current.setSpeed(speed);
      }
    }, [speed]);
    return (
        <div className="animation-container" ref={animationContainer} style={{ transform: `scale(${scale})` }}></div>
    )
};

export default AnimationViewer;