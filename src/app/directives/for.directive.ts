import { Directive, OnInit , Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers: number[];

  constructor(private container: ViewContainerRef,
    // template vai ser a instancia do elemento do html em que esta a diretiva criada
    private template: TemplateRef<any>)
    { }
    
    ngOnInit(): void{
      for(let number of this.numbers){
      // createEmbeddedView cria um container pai
      this.container.createEmbeddedView(this.template,{ $implicit: number}) // dentro do template vai ter um valor implicito, sera o number do laço for
      
    }
  }
}
