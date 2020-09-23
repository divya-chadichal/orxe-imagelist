import { html, customElement, LitElement, property } from 'lit-element';
import styles from './orxe-image-list-css';

@customElement('orxe-image-list')
export default class OrxeOrxeImageList extends LitElement {

  imageUrls: any[];

  @property({type: String, reflect: true, attribute: 'size'})
  size = 'small';

  @property({reflect: true})
  currentFullIndex: number;

  @property({reflect: true})
  currentRegIndex: number;

  @property({reflect: true})
  currentSmallIndex: number;

  @property({reflect: true})
  currentFullImage: string;

  @property({reflect: true})
  currentRegImage: string;

  @property({reflect: true})
  currentSmallImage: string;

  prevButtonIcon: string;
  nextButtonIcon: string;

  constructor() {
    super();
    this.imageUrls = [
      './assets/locales/hotel-image-1.jpg',
      './assets/locales/hotel-image-2.jpg',
      './assets/locales/hotel-image-3.jpg'
    ];
    this.currentFullIndex = 0;
    this.currentRegIndex = 0;
    this.currentSmallIndex = 0;
    this.currentFullImage = './assets/locales/hotel-image-1.jpg';
    this.currentRegImage = './assets/locales/hotel-image-1.jpg';
    this.currentSmallImage = './assets/locales/hotel-image-1.jpg';
    this.prevButtonIcon = '<';
    this.nextButtonIcon = '>';
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <div id="imageDiv" class="${this.size == 'full' ? 'fullSizeDiv' : this.size == 'regular' ? 'regSizeDiv' : this.size == 'small' ? 'smallSizeDiv' : 'smallSizeDiv'}">
        <button class="${this.size == 'full' ? 'prevFullContainer' : this.size == 'regular' ? 'prevRegContainer' : this.size == 'small' ? 'prevSmallContainer' : 'prevSmallContainer'}" @click="${() => this.goPrevious(this.size)}">
          ${this.prevButtonIcon}
        </button>
        <img class="${this.size == 'full' ? 'fullImage' : this.size == 'regular' ? 'regImage' : this.size == 'small' ? 'smallImage' : 'smallImage'}" src="${this.size == 'full' ? this.currentFullImage : this.size == 'regular' ? this.currentRegImage : this.size == 'small' ? this.currentSmallImage : this.currentSmallImage}" alt="Image not found" />
        <div class="${this.size == 'full' ? 'fullPagination' : this.size == 'regular' ? 'regPagination' : this.size == 'small' ? 'smallPagination' : 'smallPagination'}">
            ${this.imageUrls.length ? (this.size == 'full' ? this.currentFullIndex : this.size == 'regular' ? this.currentRegIndex : this.size == 'small' ? this.currentSmallIndex : this.currentSmallIndex) + 1 : 0}/${this.imageUrls.length}
        </div>
        <button class="${this.size == 'full' ? 'nextFullContainer' : this.size == 'regular' ? 'nextRegContainer' : this.size == 'small' ? 'nextSmallContainer' : 'nextSmallContainer'}" @click="${() => this.goNext(this.size)}">
          ${this.nextButtonIcon}
        </button>
      </div>
    `;
  }

  goPrevious(action) {
    if (action === 'full') {
      if (this.currentFullIndex > 0) {
        this.currentFullIndex--;
        this.currentFullImage = this.imageUrls[this.currentFullIndex];
      }
    } else if (action === 'regular') {
      if (this.currentRegIndex > 0) {
        this.currentRegIndex--;
        this.currentRegImage = this.imageUrls[this.currentRegIndex];
      }
    } else if (action === 'small') {
      if (this.currentSmallIndex > 0) {
        this.currentSmallIndex--;
        this.currentSmallImage = this.imageUrls[this.currentSmallIndex];
      }
    }
  }

  goNext(action) {
    if (action === 'full') {
      if (this.currentFullIndex < this.imageUrls.length-1) {
        this.currentFullIndex++;
        this.currentFullImage = this.imageUrls[this.currentFullIndex];
      }
    } else if (action === 'regular') {
      if (this.currentRegIndex < this.imageUrls.length-1) {
        this.currentRegIndex++;
        this.currentRegImage = this.imageUrls[this.currentRegIndex];
      }
    } else if (action === 'small') {
      if (this.currentSmallIndex < this.imageUrls.length-1) {
        this.currentSmallIndex++;
        this.currentSmallImage = this.imageUrls[this.currentSmallIndex];
      }
    }
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
