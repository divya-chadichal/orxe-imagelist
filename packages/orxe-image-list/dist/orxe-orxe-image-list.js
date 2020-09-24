var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './orxe-image-list-css';
let OrxeOrxeImageList = class OrxeOrxeImageList extends LitElement {
    constructor() {
        super();
        this.imageurls = [];
        this.size = 'small';
        this.currentFullIndex = 0;
        this.currentRegIndex = 0;
        this.currentSmallIndex = 0;
        this.currentFullImage = this.imageurls[0];
        this.currentRegImage = this.imageurls[0];
        this.currentSmallImage = this.imageurls[0];
        this.prevButtonIcon = '<';
        this.nextButtonIcon = '>';
    }
    firstUpdated() {
        if (this.size == 'full') {
            this.currentFullImage = this.imageurls[0];
        }
        else if (this.size == 'regular') {
            this.currentRegImage = this.imageurls[0];
        }
        else if (this.size == 'small') {
            this.currentSmallImage = this.imageurls[0];
        }
    }
    render() {
        return html `
    <div class="imageContainer">
      <div class="${this.size == 'full' ? 'fullSizeDiv' : this.size == 'regular' ? 'regSizeDiv' : this.size == 'small' ? 'smallSizeDiv' : 'smallSizeDiv'}">
        <button class="${this.size == 'full' ? 'prevFullContainer' : this.size == 'regular' ? 'prevRegContainer' : this.size == 'small' ? 'prevSmallContainer' : 'prevSmallContainer'}" @click="${() => this.__goPrevious(this.size)}">
          ${this.prevButtonIcon}
        </button>
        <img class="${this.size == 'full' ? 'fullImage' : this.size == 'regular' ? 'regImage' : this.size == 'small' ? 'smallImage' : 'smallImage'}" src="${this.size == 'full' ? this.currentFullImage : this.size == 'regular' ? this.currentRegImage : this.size == 'small' ? this.currentSmallImage : this.currentSmallImage}" alt="Image not found" />
        <div class="${this.size == 'full' ? 'fullPagination' : this.size == 'regular' ? 'regPagination' : this.size == 'small' ? 'smallPagination' : 'smallPagination'}">
            ${this.imageurls.length ? (this.size == 'full' ? this.currentFullIndex : this.size == 'regular' ? this.currentRegIndex : this.size == 'small' ? this.currentSmallIndex : this.currentSmallIndex) + 1 : 0}/${this.imageurls.length}
        </div>
        <button class="${this.size == 'full' ? 'nextFullContainer' : this.size == 'regular' ? 'nextRegContainer' : this.size == 'small' ? 'nextSmallContainer' : 'nextSmallContainer'}" @click="${() => this.__goNext(this.size)}">
          ${this.nextButtonIcon}
        </button>
      </div>
    </div>
    `;
    }
    __goPrevious(action) {
        if (action === 'full') {
            if (this.currentFullIndex > 0) {
                this.currentFullIndex--;
                this.currentFullImage = this.imageurls[this.currentFullIndex];
            }
        }
        else if (action === 'regular') {
            if (this.currentRegIndex > 0) {
                this.currentRegIndex--;
                this.currentRegImage = this.imageurls[this.currentRegIndex];
            }
        }
        else if (action === 'small') {
            if (this.currentSmallIndex > 0) {
                this.currentSmallIndex--;
                this.currentSmallImage = this.imageurls[this.currentSmallIndex];
            }
        }
    }
    __goNext(action) {
        if (action === 'full') {
            if (this.currentFullIndex < this.imageurls.length - 1) {
                this.currentFullIndex++;
                this.currentFullImage = this.imageurls[this.currentFullIndex];
            }
        }
        else if (action === 'regular') {
            if (this.currentRegIndex < this.imageurls.length - 1) {
                this.currentRegIndex++;
                this.currentRegImage = this.imageurls[this.currentRegIndex];
            }
        }
        else if (action === 'small') {
            if (this.currentSmallIndex < this.imageurls.length - 1) {
                this.currentSmallIndex++;
                this.currentSmallImage = this.imageurls[this.currentSmallIndex];
            }
        }
    }
};
OrxeOrxeImageList.styles = styles;
__decorate([
    property({ type: Array, reflect: true, attribute: 'imageurls' }),
    __metadata("design:type", Object)
], OrxeOrxeImageList.prototype, "imageurls", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'size' }),
    __metadata("design:type", Object)
], OrxeOrxeImageList.prototype, "size", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Number)
], OrxeOrxeImageList.prototype, "currentFullIndex", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Number)
], OrxeOrxeImageList.prototype, "currentRegIndex", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Number)
], OrxeOrxeImageList.prototype, "currentSmallIndex", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], OrxeOrxeImageList.prototype, "currentFullImage", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], OrxeOrxeImageList.prototype, "currentRegImage", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], OrxeOrxeImageList.prototype, "currentSmallImage", void 0);
OrxeOrxeImageList = __decorate([
    customElement('orxe-image-list'),
    __metadata("design:paramtypes", [])
], OrxeOrxeImageList);
export default OrxeOrxeImageList;
