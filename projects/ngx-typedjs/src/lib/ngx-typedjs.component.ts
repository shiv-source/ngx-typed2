import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, PLATFORM_ID, Renderer2, SimpleChanges, Type, ViewChild } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js'

@Component({
  selector: 'ngx-typed2',
  template: `
    <div #typedElement class="typing" [ngClass]="ngClass">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
.typing {
  display: inline;
}
  `]
})
export class NgxTypedJsComponent implements AfterViewInit, OnDestroy {
  @Input() strings: string[] = []
  @Input() stringsElement: string | undefined
  @Input() typeSpeed: number | undefined = 100
  @Input() startDelay: number | undefined
  @Input() backSpeed: number | undefined = 100
  @Input() smartBackspace: boolean | undefined
  @Input() shuffle: boolean | undefined
  @Input() backDelay: number | undefined = 500
  @Input() fadeOut: boolean | undefined
  @Input() fadeOutClass: string | undefined
  @Input() fadeOutDelay: number | undefined = 500
  @Input() loop: boolean | undefined = true
  @Input() loopCount: number | undefined
  @Input() showCursor: boolean | undefined
  @Input() cursorChar: string | undefined
  @Input() autoInsertCss: boolean | undefined
  @Input() attr: string | undefined
  @Input() bindInputFocusEvents: boolean | undefined
  @Input() contentType: string | undefined
  @Input() cursorColor: string | undefined
  @Input() ngClass: string | undefined

  @Output() onBeginEvent = new EventEmitter<Typed>()
  @Output() onCompleteEvent = new EventEmitter<Typed>()
  @Output() preStringTypedEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onStringTypedEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onLastStringBackspacedEvent = new EventEmitter<Typed>()
  @Output() onTypingPausedEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onTypingResumedEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onResetEvent = new EventEmitter<Typed>()
  @Output() onStopEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onStartEvent = new EventEmitter<{ arrayPos: number, self: Typed }>()
  @Output() onDestroyEvent = new EventEmitter<Typed>()

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef<HTMLElement>

  typedInstance!: Typed

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object, private readonly renderer: Renderer2) { }

  get options() {
    const emit = (eventEmitter: EventEmitter<Typed>) => (self: Typed) => eventEmitter.emit(self);
    const emitWithArrayPos = (eventEmitter: EventEmitter<{ arrayPos: number, self: Typed }>) => (arrayPos: number, self: Typed) => eventEmitter.emit({ arrayPos, self });

    const opts: TypedOptions = {
      strings: this.strings,
      stringsElement: this.stringsElement,
      typeSpeed: this.typeSpeed,
      startDelay: this.startDelay,
      backSpeed: this.backSpeed,
      smartBackspace: this.smartBackspace,
      shuffle: this.shuffle,
      backDelay: this.backDelay,
      fadeOut: this.fadeOut,
      fadeOutClass: this.fadeOutClass,
      fadeOutDelay: this.fadeOutDelay,
      loop: this.loop,
      loopCount: this.loopCount,
      showCursor: this.showCursor,
      cursorChar: this.cursorChar,
      autoInsertCss: this.autoInsertCss,
      attr: this.attr,
      bindInputFocusEvents: this.bindInputFocusEvents,
      contentType: this.contentType,
      onBegin: emit(this.onBeginEvent),
      onComplete: emit(this.onCompleteEvent),
      preStringTyped: emitWithArrayPos(this.preStringTypedEvent),
      onStringTyped: emitWithArrayPos(this.onStringTypedEvent),
      onLastStringBackspaced: emit(this.onLastStringBackspacedEvent),
      onTypingPaused: emitWithArrayPos(this.onTypingPausedEvent),
      onTypingResumed: emitWithArrayPos(this.onTypingResumedEvent),
      onReset: emit(this.onResetEvent),
      onStop: emitWithArrayPos(this.onStopEvent),
      onStart: emitWithArrayPos(this.onStartEvent),
      onDestroy: emit(this.onDestroyEvent),
    }

    Object.keys(opts).forEach((key: string) => {
      if ((opts as { [key: string]: any })[key] === undefined) {
        delete (opts as { [key: string]: any })[key];
      }
    });

    return opts
  }

  ngAfterViewInit(): void {
    this.initialize()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.typedInstance) {
      this.typedInstance.destroy();
      this.initialize();
    }
  }

  initialize() {
    if (isPlatformBrowser(this.platformId) && this.typedElement) {
      this.typedInstance = new Typed(this.typedElement.nativeElement, this.options)
      this.updateCursorColor()
    }
  }

  start() {
    this.typedInstance.start()
  }

  stop() {
    this.typedInstance.stop()
  }
  reset() {
    this.typedInstance.reset()
  }

  toggle() {
    this.typedInstance.toggle()
  }

  destroy() {
    this.typedInstance.destroy()
  }

  updateCursorColor() {
    if (this.cursorColor) {
      const parentNode = this.typedElement.nativeElement.parentNode
      const typedCursor = parentNode?.querySelector('.typed-cursor')
      if (typedCursor) this.renderer.setStyle(typedCursor, 'color', this.cursorColor)
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.destroy()
    }
  }
}