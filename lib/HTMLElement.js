const htmlCreator = require('html-creator');

const processContent = (content) => {
    const contents = []

    for (let item of content) {
        if (typeof item === "function") {
            item = item();
        }

        if (item) {
            if (item instanceof HTMLElement) {
                contents.push(item.htmlCreatorData())
            } else {
                contents.push(item)
            }
        }
    }

    return contents;
}

class HTMLElement {
    static buildContent(content, config) {
        return new htmlCreator(
            HTMLElement.parseContent(content)
        ).renderHTML(config)
    }

    static parseContent(content) {
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

        if (content instanceof HTMLElement) {
            content = content.htmlCreatorData();
        }


        if (typeof content !== "string" && !Array.isArray(content)) {
            content = [content]
        }

        return content
    }

    constructor(type) {
        this.data = {
            type: type,
            attributes: {},
            class: [],
            content: '',
            isDynamic: false
        }
    }

    tag(tag) {
        this.data.type = tag;
        return this
    }

    content(content) {
        this.data.content = HTMLElement.parseContent(content)
        return this;
    }

    noContent() {
        delete this.data.content;
        return this
    }

    class($class) {
        const classes = $class.split(' ');

        for (const item of classes) {
            if (item.trim() && !this.data.class.includes(item)) {
                this.data.class.push(item);
            }
        }

        return this;
    }

    classReplace(search, replace) {
        this.data.class = this.data.class.replace(search, replace)
    }

    attr(key, value) {
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

    removeAttribute(key) {
        delete this.data.attributes[key]
        return this;
    }

    htmlCreatorData() {
        const data = {
            type: this.data.type,
            content: this.data.content,
            attributes: {
                ...this.data.attributes
            }
        };

        if (this.data.class.length)
            data.attributes.class = this.data.class.join(' ').trim();


        return data;
    }

    render(excludeHTMLtag = true) {
        const data = this.htmlCreatorData();
        return new htmlCreator([data]).renderHTML({excludeHTMLtag});
    }

    buildWithDoctype() {
        return this.render(false);
    }

    apply(modifier, ...args) {
        if (modifier && typeof modifier === 'function') {
            return modifier(this, ...args);
        }
        return this
    }

    isDynamic(){
        this.data.isDynamic = true;
        return this
    }
}

module.exports = HTMLElement;