import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Search the HTML Table for matching string
  employeeListSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = <HTMLInputElement>document.getElementById('myInput'); //Must cast. User's input in text field
    filter = input.value.toUpperCase();
    ul = <HTMLInputElement>document.getElementById('myUL'); //Must cast (same for all following vars)
    li = <HTMLCollectionOf<HTMLLIElement>>document.getElementsByTagName('li'); //Casted to HTMLCollectionOf<HTMLLIElement>
    a = <HTMLInputElement>document.getElementById('myTable'); 
    txtValue = <HTMLInputElement>document.getElementById('myTable'); 
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
}