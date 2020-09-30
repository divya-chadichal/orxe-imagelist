import { html, customElement, property, LitElement } from 'lit-element';
import styles from './orxe-image-list-css';

@customElement('orxe-image-list')
export default class OrxeOrxeImageList extends LitElement {

  // Image List
  @property({type: Array, reflect: true, attribute: 'imageurls'})
  imageurls = [];

  // Type of image, i.e full, regular, small
  @property({type: String, reflect: true, attribute: 'size'})
  size = 'small';

  // Current index of image
  @property({reflect: true})
  currentIndex: number;

  // Current image
  @property({reflect: true})
  currentImage: string;

  // Previous button icon
  prevButtonIcon: string;

  // Next button icon
  nextButtonIcon: string;

  constructor() {
    super();
    this.currentIndex = 0;
    this.currentImage = this.imageurls[0];
    this.prevButtonIcon = '<';
    this.nextButtonIcon = '>'; 
  }

  // Set current image to first image of imageUrls
  firstUpdated() {
    this.currentImage = this.imageurls[0];
  }

  /**
   * `render` for orxe-image-list component.
   */
  render() {
    return html`
    <div class="orxe-grid" style="--col-grid: span 1; position: relative;">
      <div id="imageDiv" class="${this.size == 'full' ? 'fullSizeDiv' : this.size == 'regular' ? 'regSizeDiv' : this.size == 'small' ? 'smallSizeDiv' : 'smallSizeDiv'}">
        <button class="${this.size == 'full' ? 'prevFullContainer' : this.size == 'regular' ? 'prevRegContainer' : this.size == 'small' ? 'prevSmallContainer' : 'prevSmallContainer'}" @click="${() => this.__goPrevious()}">
          ${this.prevButtonIcon}
        </button>
        <img id="img" class="${this.size == 'full' ? 'fullImage' : this.size == 'regular' ? 'regImage' : this.size == 'small' ? 'smallImage' : 'smallImage'}" src="${this.currentImage}" alt="Image not found" />
        <div class="${this.size == 'full' ? 'fullPagination' : this.size == 'regular' ? 'regPagination' : this.size == 'small' ? 'smallPagination' : 'smallPagination'}">
            ${this.imageurls.length ? this.currentIndex  + 1 : 0}/${this.imageurls.length}
        </div>
        <button class="${this.size == 'full' ? 'nextFullContainer' : this.size == 'regular' ? 'nextRegContainer' : this.size == 'small' ? 'nextSmallContainer' : 'nextSmallContainer'}" @click="${() => this.__goNext()}">
          ${this.nextButtonIcon}
        </button>
      </div>
    </div>
    `;
  }

  // Previous button click action
  private __goPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.imageurls[this.currentIndex]; // Change Current Image
    }
  }

  // Next button click action
  private __goNext(): void {
    if (this.currentIndex < this.imageurls.length-1) {
      this.currentIndex++;
      this.currentImage = this.imageurls[this.currentIndex]; // Change Current Image
    }
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
