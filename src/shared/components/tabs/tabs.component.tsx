import React, {
    FC,
    ReactElement,
    forwardRef,
    useState,
    ButtonHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import styles from './tabs.module.css';


export interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    ref?: React.ForwardedRef<HTMLButtonElement>
}

export const TabButton: FC<ITabButtonProps> = forwardRef((props, ref) => {
    const { isActive, children, ...rest } = props;
    return (
        <button
            ref={ref}
            className={isActive ? styles.activeButton : styles.button}
            {...rest}
        >
            {children}
        </button>
    );
});


interface IProps {
    children: ReactElement<ITabButtonProps>[];
    className?: string;
    underlineThickness?: number;
}

export const Tabs: FC<IProps> = (props) => {
    const { children, className, underlineThickness = 2 } = props;

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
                    height: `${underlineThickness}px`,
                    transform: `translateX(${tabUnderlineLeft}px)`
                }}
            />
        </div >
    );
};
