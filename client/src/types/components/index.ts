import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Flashcard } from '../shared';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'auxilary';

type Containers = 'div' | 'section' | 'main' | 'footer' | 'header' |'nav';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
top?: number | string;
bottom?: number | string;
right?: number | string;
left?: number | string;
flex?: string;
border?: string;
type?: Containers;
position?: 'absolute' | 'relative' | 'fixed';
width?: string;
height?: string;
marginAuto?: boolean;
block?: boolean;
inline?: boolean;
padding?: string;
flexGrow?: number;
marginTop?: string;
flexBasis?: number;
flexShrink?: number;
marginLeft?: string;
fullWidth?: boolean;
paddingTop?: string;
paddingLeft?: string;
marginRight?: string;
borderRadius?: string;
fullHeight?: boolean;
marginBottom?: string;
paddingRight?: string;
paddingBottom?: string;
backgroundColor?: string;
children?: ReactNode;
overflow?: 'hidden' | 'visible' | 'scroll';
flexDirection?: 'initial' | 'row' | 'column';
flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
justifyContent?:
| 'flex-start'
| 'flex-end'
| 'center'
| 'space-between'
| 'space-around'
| 'space-evenly'
| 'initial';
textAlign?:
| 'center'
| 'end'
| 'inherit'
| 'initial'
| 'justify'
| 'left'
| 'revert'
| 'right'
| 'start'
| 'unset';
alignItems?:
| 'stretch'
| 'center'
| 'flex-start'
| 'flex-end'
| 'baseline'
| 'initial'
| 'inherit';
}

export type PageProps = {
children: ReactNode
};

export type FlashCardListProps = {
flashCards: Flashcard[];
}

export type TextProps = {
text: string;
bold?: boolean;
light?: boolean;
variant?: Variant;
type?: 'p' | 'span';
size?: Size;
};

type ButtonVariant = Variant | 'gray' | 'danger'

export type ButtonProps = {
size?: Size;
curbed?: boolean;
rounded?: boolean;
loading?: boolean;
disabled?: boolean;
variant?:ButtonVariant;
text?: string | null;
onClick?: Function;
children?: ReactNode | null;
type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export type InputProps = {
label?: boolean;
password?: boolean;
labelText?: string;
placeHolder?: string;
onChangeText?: Function;
type?: 'input' | 'textarea';
size: 'xs' | 'sm' | 'md' | 'lg';
};

export type LinkProps = {
type?: 'internal' | 'external';
path: string, children: ReactNode;
};

export type LoaderProps = {
width: number,
height: number,
center: boolean,
}
