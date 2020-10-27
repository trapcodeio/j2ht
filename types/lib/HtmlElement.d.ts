import { HtmlCreatorData, HtmlElementContent, StringToAnyObject } from "./custom_types";
declare class HtmlElement {
    data: HtmlCreatorData;
    /**
     * Build Content
     * @param content
     * @param config
     */
    static buildContent(content: any, config: StringToAnyObject): string;
    /**
     * Parse Content
     * @param content
     */
    static parseContent(content: HtmlElementContent | HtmlElementContent[]): any;
    constructor(type: string);
    /**
     * Add/Change Html Tag
     * @param tag
     */
    tag(tag: string): this;
    /**
     * Set Html Content
     * @param content
     */
    content(content: HtmlElementContent): this;
    /**
     * Set Html Contents
     * @param content
     */
    contents(content: HtmlElementContent[]): this;
    /**
     * Remove Content from Html
     */
    noContent(): this;
    /**
     * Add Class to element
     * @param $class
     */
    class($class: string): this;
    /**
     * Replace class names
     * @param search
     * @param replace
     */
    classReplace(search: string, replace: string): this;
    /**
     * Add Attributes to Element
     * @param key
     * @param value
     */
    attr(key: string | StringToAnyObject, value?: string): this;
    /**
     * Remove Attribute from element
     * @param key
     */
    removeAttribute(key: string): this;
    /**
     * Create Html Creator Data
     */
    htmlCreatorData(): HtmlCreatorData;
    /**
     * Render Html
     * @param excludeHTMLtag
     */
    render(excludeHTMLtag?: boolean): string;
    /**
     * Render with Doctype
     */
    buildWithDoctype(): string;
    /**
     * Apply Modifier
     * @param modifier
     * @param args
     */
    apply(modifier: (instance: this, ...args: any[]) => this, ...args: any[]): this;
    /**
     * Set if dynamic for cache
     */
    isDynamic(): this;
}
export = HtmlElement;
