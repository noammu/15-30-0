import ButtonStates_module from './button-states.module.scss';
export interface ButtonStatesProps {
    className?: string;
    disabled?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ButtonStates = ({ className, disabled }: ButtonStatesProps) => {
    return <button className={ButtonStates_module.butt} disabled={disabled}>Button</button>;
};
