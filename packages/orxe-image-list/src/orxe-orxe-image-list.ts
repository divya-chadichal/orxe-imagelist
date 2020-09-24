import { html, customElement, LitElement, property } from 'lit-element';
import styles from './orxe-image-list-css';

@customElement('orxe-image-list')
export default class OrxeOrxeImageList extends LitElement {

  // Image List
  @property({type: Array, reflect: true, attribute: 'imageUrls'})
  imageUrls = ["./assets/locales/hotel-image-1.jpg","./assets/locales/hotel-image-2.jpg","./assets/locales/hotel-image-3.jpg"];

  // Type of image, i.e full, regular, small
  @property({type: String, reflect: true, attribute: 'size'})
  size = 'small';

  // Current index of full image
  @property({reflect: true})
  currentFullIndex: number;

  // Current index of regular image
  @property({reflect: true})
  currentRegIndex: number;

  // Current index of small image
  @property({reflect: true})
  currentSmallIndex: number;

  // Current full image
  @property({reflect: true})
  currentFullImage: string;

  // Current regular image
  @property({reflect: true})
  currentRegImage: string;

  // Current small image
  @property({reflect: true})
  currentSmallImage: string;

  // Previous button icon
  prevButtonIcon: string;

  // Next button icon
  nextButtonIcon: string;

  constructor() {
    super();
    this.currentFullIndex = 0;
    this.currentRegIndex = 0;
    this.currentSmallIndex = 0;
    this.currentFullImage = this.imageUrls[0];
    this.currentRegImage = this.imageUrls[0];
    this.currentSmallImage = this.imageUrls[0];
    this.prevButtonIcon = '<';
    this.nextButtonIcon = '>';
  }

  /**
   * `render` for orxe-image-list component.
   */
  render() {
    return html`
      <div id="imageDiv" class="${this.size == 'full' ? 'fullSizeDiv' : this.size == 'regular' ? 'regSizeDiv' : this.size == 'small' ? 'smallSizeDiv' : 'smallSizeDiv'}">
        <button class="${this.size == 'full' ? 'prevFullContainer' : this.size == 'regular' ? 'prevRegContainer' : this.size == 'small' ? 'prevSmallContainer' : 'prevSmallContainer'}" @click="${() => this.__goPrevious(this.size)}">
          ${this.prevButtonIcon}
        </button>
        <img id="currentImage" class="${this.size == 'full' ? 'fullImage' : this.size == 'regular' ? 'regImage' : this.size == 'small' ? 'smallImage' : 'smallImage'}" src="${this.size == 'full' ? this.currentFullImage : this.size == 'regular' ? this.currentRegImage : this.size == 'small' ? this.currentSmallImage : this.currentSmallImage}" alt="Image not found" />
        <div class="${this.size == 'full' ? 'fullPagination' : this.size == 'regular' ? 'regPagination' : this.size == 'small' ? 'smallPagination' : 'smallPagination'}">
            ${this.imageUrls.length ? (this.size == 'full' ? this.currentFullIndex : this.size == 'regular' ? this.currentRegIndex : this.size == 'small' ? this.currentSmallIndex : this.currentSmallIndex) + 1 : 0}/${this.imageUrls.length}
        </div>
        <button class="${this.size == 'full' ? 'nextFullContainer' : this.size == 'regular' ? 'nextRegContainer' : this.size == 'small' ? 'nextSmallContainer' : 'nextSmallContainer'}" @click="${() => this.__goNext(this.size)}">
          ${this.nextButtonIcon}
        </button>
      </div>
    `;
  }

  // Previous button click action
  private __goPrevious(action): void {
    if (action === 'full') {
      if (this.currentFullIndex > 0) {
        this.currentFullIndex--;
        this.currentFullImage = this.imageUrls[this.currentFullIndex]; //Change Current Full Image
      }
    } else if (action === 'regular') {
      if (this.currentRegIndex > 0) {
        this.currentRegIndex--;
        this.currentRegImage = this.imageUrls[this.currentRegIndex]; // Change Current Regular Image
      }
    } else if (action === 'small') {
      if (this.currentSmallIndex > 0) {
        this.currentSmallIndex--;
        this.currentSmallImage = this.imageUrls[this.currentSmallIndex]; // Change Current Small Image
      }
    }
  }

  // Next button click action
  private __goNext(action): void {
    if (action === 'full') {
      if (this.currentFullIndex < this.imageUrls.length-1) {
        this.currentFullIndex++;
        this.currentFullImage = this.imageUrls[this.currentFullIndex]; // Change Current Full Image
      }
    } else if (action === 'regular') {
      if (this.currentRegIndex < this.imageUrls.length-1) {
        this.currentRegIndex++;
        this.currentRegImage = this.imageUrls[this.currentRegIndex]; // Change Current Regular Image
      }
    } else if (action === 'small') {
      if (this.currentSmallIndex < this.imageUrls.length-1) {
        this.currentSmallIndex++;
        this.currentSmallImage = this.imageUrls[this.currentSmallIndex]; // Change Current Small Image
      }
    }
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
