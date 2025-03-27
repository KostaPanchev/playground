import React, { memo, FC } from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.css';
// import { isSSR } from '~/...';



// Usage: const skeletonWidth = useMemo(() => `${getSkeletonRandom(80)}px`, [])
export const getSkeletonRandom = (maxWidth: number) => {
    // if (isSSR) return maxWidth;

    const minWidth = maxWidth * 0.4;
    const randomValue = Math.random();
    const randomNumber = Math.floor(randomValue * minWidth);

    return randomNumber + (maxWidth - minWidth);
};

type Skeleton = {
    width: string;
    height: string;
    className?: string;
    variant?: 'light' | 'darker';
    children?: React.ReactNode
}

export const Skeleton: FC<Skeleton> = memo(({
    children, width, height, className, variant = 'light'
}) => (
    <div
        className={clsx(className, styles[variant])}
        style={{ width, height }}
    >
        {children}
    </div>
));