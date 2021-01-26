import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  constructor(private service:SharedService) { }
    
  toDoList:any=[];

  ModalTitle:String;
  ActivateAddEditList:boolean=false;


  list:any;

  listToDo:any;

  ngOnInit(): void {
    this.refreshToDoList();
    
  }

  addClick(){
    this.list={
      listId:0,
      listTask:""
    };
    this.ActivateAddEditList=true;
  }
  
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteList(item.listId).subscribe(data=>{
        alert(data.toString());
        this.refreshToDoList();
      })
    }
  }

  editClick(item){
    debugger;
    this.closeClick();
    this.list=item;
    this.ActivateAddEditList=true;
  }

  editStatus(item){
      if(item.listStatus=="ToDo"){
        item.listStatus="Done";
      }
      else item.listStatus= "ToDo";
      var val = {
          listId: item.listId,
          listTask: item.listTask,
          listStatus: item.listStatus
        };
        
        this.service.updateList(val).subscribe(res => {
        });
  }

  closeClick(){
    this.ActivateAddEditList=false;
    this.refreshToDoList();
  }

  refreshToDoList(){
    this.service.getList().subscribe(data=>{ 
      this.toDoList = data;
    },)
  }


}
