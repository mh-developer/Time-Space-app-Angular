import { Employee } from './../../../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-users-search',
    templateUrl: './users-search.component.html',
    styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {
    @Input() allEmployees: Employee[];
    @Output() filteredEmployees = new EventEmitter();
    employees: Employee[];

    term: string = '';

    constructor() { }

    ngOnInit() {
    }

    searchFilter() {
        if (!this.term) {
            this.filteredEmployees.emit(this.allEmployees);
        }

        this.term = this.term.toLowerCase();
        this.employees = this.allEmployees.filter(person => {
            return person.FirstName.toLowerCase().includes(this.term) || person.LastName.toLowerCase().includes(this.term);
        });
        this.filteredEmployees.emit(this.employees);
    }

}
