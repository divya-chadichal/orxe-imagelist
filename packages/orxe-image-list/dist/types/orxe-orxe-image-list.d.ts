import { LitElement } from 'lit-element';
export default class OrxeOrxeImageList extends LitElement {
    imageurls: never[];
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
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
    private __goPrevious;
    private __goNext;
    static styles: import("lit-element").CSSResult;
}
