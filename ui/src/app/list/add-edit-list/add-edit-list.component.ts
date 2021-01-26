import {SharedService} from './../../shared.service';
import {Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-add-edit-list',
  templateUrl: './add-edit-list.component.html',
  styleUrls: ['./add-edit-list.component.scss']
})
export class AddEditListComponent implements OnInit {

  constructor(private service:SharedService) {}

  @Input() list: any;
  
  listId: string;
  listTask: string;
  listStatus: string;

  ngOnInit(): void {
    this.listId = this.list.listId;
    this.listTask = this.list.listTask;
    this.listStatus = this.list.listStatus;
  }

  addItem() {
    var val = {
      listId: this.listId,
      listTask:  this.listTask,
      listStatus:"ToDo"
    };
    this.service.addList(val).subscribe(res => {
      alert(res.toString())
    });
    this.listTask="";
  }

  editItem() {
    console.log()
    var val = {
        listId: this.listId,
        listTask: this.listTask,
        listStatus: this.listStatus
      };
      this.service.updateList(val).subscribe(res => {
          alert(res.toString())
      });
  }
  
}

