import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightName]',
})
export class HighlightNameDirective implements OnInit {
  @Input() website!: string;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (this.website?.endsWith('.org')) {
      this.el.nativeElement.style.backgroundColor = '#e6fffa';
      this.el.nativeElement.style.fontWeight = '600';
      this.el.nativeElement.style.borderLeft = '4px solid #0d9488';
      this.el.nativeElement.style.padding = '6px';
      this.el.nativeElement.style.borderRadius = '4px';
    }
  }
}
