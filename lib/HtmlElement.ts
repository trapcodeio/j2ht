import {HtmlCreatorData, HtmlElementContent, StringToAnyObject} from "./custom_types";
const htmlCreator = require('html-creator');



class HtmlElement {
    // Element Data
    public data: HtmlCreatorData;

    /**
     * Build Content
     * @param content
     * @param config
     */
    static buildContent(content: any, config: StringToAnyObject): string {
        return new htmlCreator(
            HtmlElement.parseContent(content)
        ).renderHTML(config)
    }

    /**
     * Parse Content
     * @param content
     */
    static parseContent(content: HtmlElementContent | HtmlElementContent[]): any {
        if (Array.isArray(content)) {

            if (content.length === 1) {
                if (Array.isArray(content[0])) {
                    return this.parseContent(content[0])
                } else if (typeof content[0] === "function") {
                    return this.parseContent(content[0]())
                } else {
                    content = content[0];
                }
            } else {

                content = processContent(content)
            }
        }

        if (content instanceof HtmlElement) {
            return [content.htmlCreatorData()];
        }

        if (typeof content !== "string" && !Array.isArray(content)) {
            content = [content]
        }

        return content
    }

    constructor(type: string) {
        this.data = {
            type: type,
            attributes: {},
            class: [],
            content: '',
            isDynamic: false
        }
    }

    /**
     * Add/Change Html Tag
     * @param tag
     */
    tag(tag: string): this {
        this.data.type = tag;
        return this
    }

    /**
     * Set Html Content
     * @param content
     */
    content(content: HtmlElementContent): this {
        this.data.content = HtmlElement.parseContent(content);
        return this;
    }

    /**
     * Set Html Contents
     * @param content
     */
    contents(content: HtmlElementContent[]): this {
        this.data.content = HtmlElement.parseContent(content);
        return this;
    }

    /**
     * Remove Content from Html
     */
    noContent(): this {
        // @ts-ignore
        delete this.data.content;
        return this
    }

    /**
     * Add Class to element
     * @param $class
     */
    class($class: string): this {
        const classes = $class.split(' ');

        for (const item of classes) {
            if (item.trim() && this.data.class && !this.data.class.includes(item)) {
                this.data.class.push(item);
            }
        }

        return this;
    }

    /**
     * Replace class names
     * @param search
     * @param replace
     */
    classReplace(search: string, replace: string): this {

        this.data.class = this.data.class.join(' ')
            .replace(search, replace)
            .split('');

        return this;
    }

    /**
     * Add Attributes to Element
     * @param key
     * @param value
     */
    attr(key: string | StringToAnyObject, value?: string): this {
        if (key) {
            if (typeof key === "object") {
                this.data.attributes = {
                    ...this.data.attributes,
                    ...key
                }
            } else {
                this.data.attributes[key] = value;
            }
        }
        return this;
    }

    /**
     * Remove Attribute from element
     * @param key
     */
    removeAttribute(key: string): this {
        delete this.data.attributes[key]
        return this;
    }

    /**
     * Create Html Creator Data
     */
    htmlCreatorData(): HtmlCreatorData {
        const data: HtmlCreatorData = {
            class: [],
            type: this.data.type,
            content: this.data.content,
            attributes: {
                ...this.data.attributes
            }
        };

        if (this.data.class.length) {
            // @ts-ignore
            delete data.class;
            data.attributes.class = this.data.class.join(' ').trim();
        }

        return data;
    }

    /**
     * Render Html
     * @param excludeHTMLtag
     */
    render(excludeHTMLtag = true): string {
        const data = this.htmlCreatorData();
        return new htmlCreator([data]).renderHTML({excludeHTMLtag});
    }

    /**
     * Render with Doctype
     */
    buildWithDoctype(): string {
        return this.render(false);
    }

    /**
     * Apply Modifier
     * @param modifier
     * @param args
     */
    apply(modifier: (instance: this, ...args: any[]) => this, ...args: any[]): this {
        if (modifier && typeof modifier === 'function') {
            return modifier(this, ...args);
        }
        return this
    }

    /**
     * Set if dynamic for cache
     */
    isDynamic(): this {
        this.data.isDynamic = true;
        return this
    }
}

const processContent = (content: HtmlElementContent[]): any => {
    const contents = []

    for (let item of content) {
        if (typeof item === "function") {
            item = item();
        }

        if (item) {
            if (item instanceof HtmlElement) {
                contents.push(item.htmlCreatorData())
            } else {
                contents.push(item)
            }
        }
    }

    return contents;
}

export = HtmlElement;