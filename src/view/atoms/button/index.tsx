/**
 * Button component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import clsx from 'clsx';

// STYLE IMPORT
import './styles.css';

type ButtonProps = {
    label: string;
    onClick: () => void;
    isSecondary?:  boolean;
    isFullwidth?: boolean;
    externalClasses?:  string;
}

const MLButton = ({
    label,
    onClick,
    isSecondary = false,
    isFullwidth = false,
    externalClasses = ''
}: ButtonProps) => {
    return (
        <button className={clsx(isSecondary ? 'secondary-button' : 'primary-button', isFullwidth && 'fullwidth-btn')}  onClick={onClick}>{label}</button>
    )
}

export default MLButton;