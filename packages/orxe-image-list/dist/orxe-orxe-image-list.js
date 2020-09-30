var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, property, LitElement } from 'lit-element';
import styles from './orxe-image-list-css';
let OrxeOrxeImageList = class OrxeOrxeImageList extends LitElement {
    constructor() {
        super();
        this.imageurls = [];
        this.size = 'small';
        this.currentIndex = 0;
        this.currentImage = this.imageurls[0];
        this.prevButtonIcon = '<';
        this.nextButtonIcon = '>';
    }
    firstUpdated() {
        this.currentImage = this.imageurls[0];
    }
    render() {
        return html `
    <div class="orxe-grid" style="--col-grid: span 1; position: relative;">
      <div id="imageDiv" class="${this.size == 'full' ? 'fullSizeDiv' : this.size == 'regular' ? 'regSizeDiv' : this.size == 'small' ? 'smallSizeDiv' : 'smallSizeDiv'}">
        <button class="${this.size == 'full' ? 'prevFullContainer' : this.size == 'regular' ? 'prevRegContainer' : this.size == 'small' ? 'prevSmallContainer' : 'prevSmallContainer'}" @click="${() => this.__goPrevious()}">
          ${this.prevButtonIcon}
        </button>
        <img id="img" class="${this.size == 'full' ? 'fullImage' : this.size == 'regular' ? 'regImage' : this.size == 'small' ? 'smallImage' : 'smallImage'}" src="${this.currentImage}" alt="Image not found" />
        <div class="${this.size == 'full' ? 'fullPagination' : this.size == 'regular' ? 'regPagination' : this.size == 'small' ? 'smallPagination' : 'smallPagination'}">
            ${this.imageurls.length ? this.currentIndex + 1 : 0}/${this.imageurls.length}
        </div>
        <button class="${this.size == 'full' ? 'nextFullContainer' : this.size == 'regular' ? 'nextRegContainer' : this.size == 'small' ? 'nextSmallContainer' : 'nextSmallContainer'}" @click="${() => this.__goNext()}">
          ${this.nextButtonIcon}
        </button>
      </div>
    </div>
    `;
    }
    __goPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.currentImage = this.imageurls[this.currentIndex];
        }
    }
    __goNext() {
        if (this.currentIndex < this.imageurls.length - 1) {
            this.currentIndex++;
            this.currentImage = this.imageurls[this.currentIndex];
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
], OrxeOrxeImageList.prototype, "currentIndex", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], OrxeOrxeImageList.prototype, "currentImage", void 0);
OrxeOrxeImageList = __decorate([
    customElement('orxe-image-list'),
    __metadata("design:paramtypes", [])
], OrxeOrxeImageList);
export default OrxeOrxeImageList;
