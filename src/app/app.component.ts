import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";
import { Observable } from 'rxjs';
import { AppState } from './components/states/app.config';
import { Store } from '@ngrx/store';
import { selectCount } from './components/states/counter/counter.select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-management';
  count$ : Observable<number>;

  constructor(private store:Store<AppState>){
   this.count$ = this.store.select(selectCount);
  }
}
