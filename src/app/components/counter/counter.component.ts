import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.config';
import { selectCount } from '../states/counter/counter.select';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter/counter.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})


export class CounterComponent {    

  count$ : Observable<number>;

   constructor(private store:Store<AppState>){
    this.count$ = this.store.select(selectCount);
   }
reset() {
// throw new Error('Method not implemented.');
this.store.dispatch(reset());
}
decrement() {
// throw new Error('Method not implemented.');
this.store.dispatch(decrement());
}
increment() {
// throw new Error('Method not implemented.');
debugger;
console.log("Increment Method in Counter Component.html")
this.store.dispatch(increment());
}
  count : number =0;
}
