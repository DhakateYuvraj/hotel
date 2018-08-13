import { Directive,Input,ElementRef,Renderer } from '@angular/core';
import { RenderDebugInfo } from '@angular/core/src/render/api';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-footer]', 
  host:{
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class HideFooterDirective {
  headerHeight;
  headerClientHeight;
  scrollContent;
@Input('footer') footer:HTMLElement;
  constructor(public element:ElementRef,public renderer:Renderer) {
    // console.log('Hello HideHeaderDirective Directive');
  }

  ngOnInit(){
    this.headerHeight = this.headerClientHeight;
    this.renderer.setElementStyle(this.footer,'webkitTransition','bottom 750ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent,'webkitTransition','margin-top 700ms');
  }
  onContentScroll(event){
    // console.log(event)
    if(event.scrollTop > 56){
      this.renderer.setElementStyle(this.footer,"bottom","-150px");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","0px");
      
    }
    else{
      this.renderer.setElementStyle(this.footer,"bottom","0px");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","150px");
      
      
    }
  }
}
