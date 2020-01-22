import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './../../models/employee.model';
import { ApiService } from '../api-service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(
        private apiService: ApiService
    ) { }

    getAll(): Observable<Employee[]> {
        return this.apiService.get(`/employee`)
            .pipe(map(data => data));
    }

    get(userId: number): Observable<Employee> {
        return this.apiService.get(`/employee/${userId}`)
            .pipe(map(data => data));
    }

    put(item: Employee, paramId?: number): Observable<Employee> {
        // paramId = ?userNo || ?ReferenceId
        return paramId ?
            this.apiService.put(`/employee?userNo=${paramId}`, item)
                .pipe(map(data => data)) :
            this.apiService.put(`/employee`, item)
                .pipe(map(data => data));
    }
}
