import { LitElement } from 'lit-element';
export default class OrxeOrxeImageList extends LitElement {
    imageUrls: string[];
    size: string;
    currentFullIndex: number;
    currentRegIndex: number;
    currentSmallIndex: number;
    currentFullImage: string;
    currentRegImage: string;
    currentSmallImage: string;
    prevButtonIcon: string;
    nextButtonIcon: string;
    constructor();
    render(): import("lit-element").TemplateResult;
    private __goPrevious;
    private __goNext;
    static styles: import("lit-element").CSSResult;
}
