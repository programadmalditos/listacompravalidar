import { Directive, ElementRef, Input, HostListener, SimpleChange, OnChanges } from '@angular/core';

@Directive({
    selector: '[UnidadesPendientes]'
})

export class UnidadesDirective implements OnChanges {
    @Input('Valor') unidades = 0;

    constructor(private el: ElementRef) { }


    private colorElemento() {
        if (this.unidades <= 0) {
            this.el.nativeElement.style.color = "blue";
        }
        else if (this.unidades < 5) {
            this.el.nativeElement.style.color = "orange";
        }
        else {
            this.el.nativeElement.style.color = "red";
        }
    }
    private colorFondo() {
        if (this.unidades <= 0) {
            this.el.nativeElement.style.backgroundColor = "blue";
        }
        else if (this.unidades < 5) {
            this.el.nativeElement.style.backgroundColor = "orange";
        }
        else {
            this.el.nativeElement.style.backgroundColor = "red";
        }
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.colorFondo();
        this.el.nativeElement.style.color = "gray";
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = "white";
        this.colorElemento();
    }


    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        console.log(changes);
        this.colorElemento();
    }
}