import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { AlertComponent } from './alert/alert.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { ColComponent } from './col/col.component';
import { CollapseBoxComponent } from './collapse-box/collapse-box.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { InputComponent } from './input/input.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressComponent } from './progress/progress.component';
import { RadioComponent } from './radio/radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RatingComponent } from './rating/rating.component';
import { RowComponent } from './row/row.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from './switch/switch.component';
import { TabItemComponent } from './tabset/tab-item.component';
import { TableCellDirective } from './table/column-cell.directive';
import { TableColumnDirective } from './table/table-column.directive';
import { TableComponent } from './table/table.component';
import { TabsetComponent } from './tabset/tabset.component';
import { WidgetComponent } from './widget/widget.component';
import { WizardComponent } from './wizard/wizard.component';

export const ALL_COMPONENTS = [
  // 表单组件
  AutocompleteComponent,
  CheckboxComponent, CheckboxGroupComponent,
  InputComponent,
  InputGroupComponent,
  RadioComponent, RadioGroupComponent,
  RatingComponent,
  SelectComponent,
  SwitchComponent,

  // 布局组件
  RowComponent,
  ColComponent,

  // UI元素组件
  AccordionComponent, AccordionItemComponent,
  AlertComponent,
  CarouselComponent, CarouselItemComponent,
  CollapseBoxComponent,
  ModalComponent,
  ImageZoomComponent,
  PaginationComponent,
  ProgressComponent,
  TabsetComponent, TabItemComponent,
  WidgetComponent,
  WizardComponent,

  // 数据组件
  TableComponent, TableColumnDirective, TableCellDirective
];
