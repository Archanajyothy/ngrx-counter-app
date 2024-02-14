import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  counter : number = 0;

  constructor(private store: Store<{ counter : {counter : number} }>){}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter
    })
  }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  //this.store.select('counter')
}
