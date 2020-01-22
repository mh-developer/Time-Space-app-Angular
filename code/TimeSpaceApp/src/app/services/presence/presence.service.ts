import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../models/employee.model';
import { ApiService } from '../api-service';

@Injectable({
    providedIn: 'root'
})
export class PresenceService {

    constructor(
        private apiService: ApiService
    ) { }

    get(dateTime: string, orgUnitId: number, showInactiveEmployees: boolean = false): Observable<Employee[]> {
        return this.apiService.get(`/Presence?TimeStamp=${dateTime}&OrgUnitID=${orgUnitId}&showInactiveEmployees=${showInactiveEmployees}`)
            .pipe(map(data => data));
    }
}
