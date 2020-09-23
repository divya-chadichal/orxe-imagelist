import { html, customElement, LitElement, property } from 'lit-element';
import styles from './orxe-image-list-css';

@customElement('orxe-image-list')
export default class OrxeOrxeImageList extends LitElement {

  imageUrls: any[];

  @property({reflect: true})
  currentFullIndex: number;

  @property({reflect: true})
  currentRegIndex: number;

  @property({reflect: true})
  currentSmallIndex: number;

  leftLabel: string;
  rightLabel: string;

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
    this.leftLabel = 'Previous Image';
    this.rightLabel = 'Next Image';
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
      <h2>Hotel Image Slider</h2>
      <div class="container">
        <div class="fullContainer">
          <h2>Full Size Image</h2>
          <div class="fullSizeDiv">
            <button class="prevFullContainer" @click="${() => this.goPrevious('full')}">
              ${this.prevButtonIcon}
            </button>
            <img class="fullImage" id="fullCurrentImage" aria-hidden="true" src="${this.currentFullImage}" alt="Image not found" />
            <div class="fullPagination">
                ${this.imageUrls.length ? this.currentFullIndex + 1 : 0}/${this.imageUrls.length}
            </div>
            <button class="nextFullContainer" @click="${() => this.goNext('full')}">
              ${this.nextButtonIcon}
            </button>
          </div>
        </div>
        <div class="regContainer">
          <h2>Regular Size Image</h2>
          <div class="regSizeDiv">
            <button class="prevRegContainer" @click="${() => this.goPrevious('regular')}">
              ${this.prevButtonIcon}
            </button>
            <img class="regImage" aria-hidden="true" src="${this.currentRegImage}" alt="Image not found" />
            <div class="regPagination">
              ${this.imageUrls.length ? this.currentRegIndex + 1 : 0}/${this.imageUrls.length}
            </div>
            <button class="nextRegContainer" @click="${() => this.goNext('regular')}">
              ${this.nextButtonIcon}
            </button>
          </div>
        </div>
        <div class="smallContainer">
          <h2>Small Size Image</h2>
          <div class="smallSizeDiv">
            <button class="prevSmallContainer" @click="${() => this.goPrevious('small')}">
              ${this.prevButtonIcon}
            </button>
            <img class="smallImage" aria-hidden="true" src="${this.currentSmallImage}" alt="Image not found" />
            <div class="smallPagination">
              ${this.imageUrls.length ? this.currentSmallIndex + 1 : 0}/${this.imageUrls.length}
            </div>
            <button class="nextSmallContainer" @click="${() => this.goNext('small')}">
              ${this.nextButtonIcon}
            </button>
          </div>
        </div>
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
