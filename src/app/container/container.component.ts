import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { todoList } from 'src/_data/data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  currentItems = todoList.filter((el) => el.status === 'open');
  pastItems = todoList.filter((el) => el.status !== 'open');

  constructor() {}

  ngOnInit(): void {}
}
