import { Component, Element, Event, EventEmitter, h, Listen, Prop, State, Watch } from '@stencil/core';
import { debounce } from '../../utils/events';
import { onResize } from '../../utils/elements';
import { TabsPosition } from './tab-position.type';

interface TabGroup {
  header: HTMLCpyTabHeaderElement;
  content: HTMLCpyTabContentElement;
}

@Component({
  tag: 'cpy-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs {

  @Prop({mutable: true})
  activeIndex: number = 0;

  @Prop()
  position: TabsPosition = 'start';

  @Element()
  host: HTMLElement;
  
  @State()
  leftButtonDisabled = true;

  @State()
  rightButtonDisabled = false;

  @Event({bubbles: false})
  tabChanged: EventEmitter<number>;

  @Watch('activeIndex')
  handleIndexChange(val: number): void {
    this.activeTab = this.tabGroup[val ?? 0];
    this.selectGroup();
  }

  tabsHeader: HTMLCpyTabHeaderElement[];
  tabsContent: HTMLCpyTabContentElement[];
  tabGroup: TabGroup[];

  headerGroupElem: HTMLElement;
  activeBarElem: HTMLElement;
  activeTab: TabGroup;
  resize: ResizeObserver;

  componentDidLoad() {
    this.createGroup();

    this.handleIndexChange(this.activeIndex);

    this.headerGroupElem.addEventListener('scroll', debounce(() => this.handleScroll(), 100));
    this.handleScrollableHeader();

    this.resize = onResize(this.headerGroupElem, () => {
      this.updateActiveBar(false);
      this.handleScrollableHeader();
    })
  }

  @Listen('selected')
  onSelectedTab(event: CustomEvent<string>) {
    event.stopPropagation();
    this.activeTab = this.tabGroup.find(group => group.header.headerId === event.detail);
    this.activeIndex = this.tabGroup.findIndex(group => group.header.headerId === event.detail);
    this.selectGroup();
    this.tabChanged.emit(this.activeIndex);
  }

  createGroup() {
    this.tabsHeader = Array.from(this.host.querySelectorAll(':scope > cpy-tab-header')) as HTMLCpyTabHeaderElement[];
    this.tabsContent = Array.from(this.host.querySelectorAll(':scope > cpy-tab-content')) as HTMLCpyTabContentElement[];

    this.tabGroup = this.tabsHeader.map((header, index) => {
      const content = this.tabsContent[index];

      return {
        header: header,
        content: content
      };
    });
  }

  selectGroup() {
    this.tabGroup.forEach(_ => {
      _.content.unselect();
    });

    this.activeTab.content.select();
    this.updateActiveBar();
  }

  updateActiveBar(scroll: boolean = true): void {
    const parentPos = this.headerGroupElem.getBoundingClientRect();
    const childPos  = this.activeTab.header.getBoundingClientRect();
    const left = childPos.left - parentPos.left + this.headerGroupElem.scrollLeft;

    this.activeBarElem.style.left = `${left}px`;
    this.activeBarElem.style.width = `${this.activeTab.header.offsetWidth}px`;
    if (scroll) {
      this.activeTab.header.scrollIntoView({ block: 'nearest' });
    }
  }

  handleScrollableHeader(): void {
    const showButtons = this.headerGroupElem.scrollWidth > this.headerGroupElem.clientWidth;
    Array.from(this.host.shadowRoot.querySelectorAll('cpy-button')).forEach(button => button.style.display = showButtons ? 'block' : 'none');
  }

  handleScroll(): void {
    this.leftButtonDisabled = this.headerGroupElem.scrollLeft === 0;
    this.rightButtonDisabled = Math.abs(this.headerGroupElem.scrollWidth - this.headerGroupElem.clientWidth - this.headerGroupElem.scrollLeft) < 1;
  }

  handleScrollClick(left: boolean): void {
    const scrollDistance = left
      ? -this.headerGroupElem.clientWidth / 2
      : this.headerGroupElem.clientWidth / 2;

    this.headerGroupElem.scrollLeft += scrollDistance;
  }

  render() {
    const headerClasses = {
      'tabs-header__container': true,
      [`tabs-header__container--${this.position}`]: !!this.position,
    };

    return [
      <div class="tabs-header">
        <cpy-button icon size="small" type="basic" disabled={this.leftButtonDisabled} onClick={() => this.handleScrollClick(true)}>
          <cpy-icon>chevron_left</cpy-icon>
        </cpy-button>
        <div class={headerClasses} ref={(el) => this.headerGroupElem = el as HTMLElement}>
          <slot name="header"/>
          <div class='tabs-header__active-bar' ref={(el) => this.activeBarElem = el as HTMLElement}></div>
        </div>
        <cpy-button icon size="small" type="basic" disabled={this.rightButtonDisabled} onClick={() => this.handleScrollClick(false)}>
          <cpy-icon>chevron_right</cpy-icon>
        </cpy-button>
      </div>,
      <div class="tabs-content">
        <slot name="content"/>
      </div>
    ];
  }

  disconnectedCallback(): void {
    this.resize.disconnect();
  }
}
