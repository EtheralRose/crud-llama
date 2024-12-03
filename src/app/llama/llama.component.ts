import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-llama',
  standalone: true,
  imports: [],
  templateUrl: './llama.component.html',
  styleUrl: './llama.component.css'
})
export class LlamaComponent {
  constructor(private router: Router) {}

  onCrud() {
    this.router.navigate(['/crud']);
  }
}
