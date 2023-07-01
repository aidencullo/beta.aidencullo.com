import { Component } from '@angular/core';

@Component({
    selector: 'app-problem',
    templateUrl: './problem.component.html',
    styleUrls: ['./problem.component.css']
})
export class ProblemComponent {
    title = "Problem";
    description = "What is the output of this code?";
    code = `
var a = "hello";

(() => {
  function f1(){
    console.log(a);
  }

  function f2(){
    var a = "goodbye";
    f1();
  }
  f2();
})();
`
}
