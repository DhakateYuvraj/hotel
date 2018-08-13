import { Directive,Input,ElementRef,Renderer } from '@angular/core';
import { RenderDebugInfo } from '@angular/core/src/render/api';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]', 
  host:{
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  headerHeight;
  headerClientHeight;
  scrollContent;
@Input('header') header:HTMLElement;
  constructor(public element:ElementRef,public renderer:Renderer) {
    // console.log('Hello HideHeaderDirective Directive');
  }

  ngOnInit(){
    this.headerHeight = this.headerClientHeight;
    this.renderer.setElementStyle(this.header,'webkitTransition','top 750ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent,'webkitTransition','margin-top 700ms');
  }
  onContentScroll(event){
    // console.log(event)
    if(event.scrollTop > 56){
      this.renderer.setElementStyle(this.header,"top","-150px");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","0px");
      
    }
    else{
      this.renderer.setElementStyle(this.header,"top","0px");
      this.renderer.setElementStyle(this.scrollContent,"margin-top","150px");
      
      
    }
  }
}
