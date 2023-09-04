import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSectionFormComponent } from '../../dynamic-section-form/dynamic-section-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dynamic-section-page',
  standalone: true,
  imports: [
    CommonModule,
    DynamicSectionFormComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './dynamic-section-page.component.html',
  styleUrls: ['./dynamic-section-page.component.scss'],
})
export class DynamicSectionPageComponent {}
