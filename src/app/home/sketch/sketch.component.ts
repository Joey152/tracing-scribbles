import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'trsc-sketch',
    templateUrl: './sketch.component.html',
    styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {

    @ViewChild('canvas', { static: true })
    canvasRef: ElementRef<HTMLCanvasElement>;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    isDrawStart = false;

    constructor() { }

    ngOnInit() {
        this.canvas = this.canvasRef.nativeElement;
        this.resize();
        this.ctx = this.canvas.getContext('2d');
    }

    @HostListener('window:resize', [])
    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }

    getCursorPosition(event: MouseEvent): [number, number] {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // const x = event.clientX;
        // const y = event.clientY;
        return [x, y];
    }

    draw(event: MouseEvent): void {
        if (this.isDrawStart) {
            this.ctx.lineTo(...this.getCursorPosition(event));
            this.ctx.stroke();
        }
    }

    startDraw(event: MouseEvent): void {
        this.isDrawStart = true;
        this.ctx.moveTo(...this.getCursorPosition(event));
    }

    stopDraw(): void {
        this.isDrawStart = false;
    }

    clear(): void {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
