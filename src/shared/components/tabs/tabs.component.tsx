import React, {
    FC,
    ReactElement,
    forwardRef,
    useState,
    ButtonHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import styles from './Tabs.module.css';
import { IconTypes, SvgIcon } from '../../index';


export interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    iconName?: IconTypes;
    iconClassName?: string;
    iconPosition?: 'left' | 'right';
    ref?: React.ForwardedRef<HTMLButtonElement>
}

export const TabButton: FC<ITabButtonProps> = forwardRef((props, ref) => {
    const {
        isActive, children,
        iconName, iconClassName, iconPosition,
        ...rest
    } = props;
    return (
        <button
            ref={ref}
            className={isActive ? styles.activeButton : styles.button}
            {...rest}
        >
            {iconName && (
                <SvgIcon
                    name={iconName}
                    className={clsx(styles.icon, iconClassName, {
                        [styles.iconRight]: iconPosition === 'right'
                    })} />
            )}
            {children}
        </button>
    );
});


interface IProps {
    children: ReactElement<ITabButtonProps>[];
    className?: string;
    underLineWidth?: number;
}

export const Tabs: FC<IProps> = ({ children, className }) => {
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    return (
        <div className={clsx(styles.root, className)}>
            {children.map((child, i) => {
                const { isActive, ...restProps } = child.props;
                return (
                    <TabButton
                        isActive={isActive}
                        key={i}
                        ref={(el) => {
                            if (isActive) {
                                setTabUnderlineWidth(el?.clientWidth ?? 0);
                                setTabUnderlineLeft(el?.offsetLeft ?? 0);
                            }
                        }}
                        {...restProps}
                    />
                );
            })}
            <div
                className={styles.tabUnderline}
                style={{
                    width: `${tabUnderlineWidth}px`,
                    transform: `translateX(${tabUnderlineLeft}px)`
                }}
            />
        </div >
    );
};
