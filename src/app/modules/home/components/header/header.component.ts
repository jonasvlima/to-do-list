import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule se necessário

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {}
