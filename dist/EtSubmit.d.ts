export interface SubmitParams {
    outHoverColor: {
        button: string;
        text: string;
    };
    inHoverColor: {
        button: string;
        text: string;
    };
    placeHolder: string;
}
export declare function EtSubmit({ outHoverColor, inHoverColor, placeHolder }: SubmitParams): import("react/jsx-runtime").JSX.Element;
