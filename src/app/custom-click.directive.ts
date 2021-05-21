import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomClick]',
})
export class CustomClickDirective {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  @Input()
  appCustomClick: string = '';

  @Input()
  myGreeting = '';

  @HostListener('click')
  onItemClick() {
    console.log(this.myGreeting);
    this.el.nativeElement.style.color = this.appCustomClick || 'blue';
  }
}
