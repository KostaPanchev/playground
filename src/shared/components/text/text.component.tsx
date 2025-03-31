import clsx from 'clsx';
import React, { FC, ElementType, HTMLAttributes } from 'react';
import styles from './Text.module.css';

//Not ready!!! Waiting for design
export type TextVariant =
    | 'bodyExtraLarge'
    | 'bodyLarge'
    | 'body'
    | 'bodySmall'
    | 'bodyExtraSmall'
    | 'caption'
    | 'label'
    | 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'display5'
    | 'display6';

export type TextColor =
    'bodyColor'
    | 'primaryColor'
    | 'errorColor'
    | 'successColor'
    | 'attentionColor'
    | 'natural700Color'
    | 'neutralWhite'
    | 'grey'

// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/
export interface ITextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    variant?: TextVariant;
    fontWeight?: 'light' | 'regular' | 'semiBold' | 'bold';
    nowrap?: boolean;
    secondary?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    color?: TextColor;
    overflowEllipsis?: boolean;
    highlightText?: string;
    text?: string;
}
/**
 * Use text instead of children for highlightText!!!
 */
export const Text: FC<ITextProps> = ({
    as: Tag = 'p',
    variant = 'body',
    color, textAlign, fontWeight,
    className, children, nowrap,
    highlightText, text, secondary, overflowEllipsis,
    ...rest
}) => {

    const getText = () => {
        if (!highlightText?.trim()) {
            return <>{text}</>;
        }

        const escapeRegExp = (str = '') => (
            str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
        );


        const regex = new RegExp(`(${escapeRegExp(highlightText)})`, 'gi');
        const parts = text?.split(regex);

        return (
            <>
                {parts?.filter(String).map((part, i) => (regex.test(part) ? (
                    <mark key={i}>{part}</mark>
                ) : (
                    <span key={i}>{part}</span>
                )))}
            </>
        );

    };

    return (
        <Tag
            className={clsx(
                className,
                styles.root,
                styles[variant],
                textAlign && styles[textAlign],
                fontWeight && styles[fontWeight],
                color && styles[color],
                {
                    [styles.nowrap]: nowrap,
                    [styles.secondary]: secondary,
                    [styles.overflowEllipsis]: overflowEllipsis
                }
            )}
            {...rest}
        >
            {text ? getText() : children}
        </Tag>
    );
};
