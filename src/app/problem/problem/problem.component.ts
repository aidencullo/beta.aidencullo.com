import { Component } from '@angular/core';

@Component({
    selector: 'app-problem',
    templateUrl: './problem.component.html',
    styleUrls: ['./problem.component.css']
})
export class ProblemComponent {
    title = "Problem";
    description = "What is the output of this code?";
    answerDescription = "var has functional scope, hence when we jump to f1, var a declared in f2 is no longer in scope.";
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
    answer = `
hello
`
    showAnswer = false;
    toggleAnswer() {
        this.showAnswer = !this.showAnswer;
    }
}
