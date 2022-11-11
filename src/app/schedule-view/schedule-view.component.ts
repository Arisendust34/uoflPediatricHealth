import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  templateUrl: 'schedule-view.component.html',
  styleUrls: ['schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tableSearch() {
    let filter, td, txtValue;

    const input = <HTMLInputElement>document.getElementById('myInput'); //cast
    const table = <HTMLInputElement>document.getElementById('myTable'); //cast
    const tr = <HTMLCollectionOf<HTMLTableRowElement>>document.getElementsByTagName('tr'); //cast
    //Intialising Variables
    filter = input.value.toUpperCase();

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
  }

}

