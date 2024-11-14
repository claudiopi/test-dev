import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IgxCheckboxComponent, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public checked: boolean = true;
}
