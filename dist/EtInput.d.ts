export interface InputParams {
    insideInputColor: string;
    linesColor: string;
    placeHolder: string;
    inputType: "password" | "text" | "email";
    minLength?: number;
    maxLength?: number;
}
export declare function EtInput({ inputType, placeHolder, insideInputColor, linesColor, minLength, maxLength }: InputParams): import("react/jsx-runtime").JSX.Element;
