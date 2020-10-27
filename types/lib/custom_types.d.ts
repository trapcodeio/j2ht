import HtmlElement from "./HtmlElement";
export interface StringToAnyObject {
    [name: string]: any;
}
export interface HtmlCreatorData {
    type: string;
    content: string;
    attributes: StringToAnyObject;
    class: string[];
    isDynamic?: boolean;
}
export declare type HtmlElementContent = HtmlElement | {
    (): HtmlElement;
} | string;
