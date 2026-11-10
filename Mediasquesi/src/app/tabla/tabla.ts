import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla implements OnChanges {
  @Input() data: any[] = [];

  columns: string[] = [];

  ngOnChanges(): void {
    this.columns = this.data && this.data.length > 0 ? Object.keys(this.data[0]) : [];
  }
}
