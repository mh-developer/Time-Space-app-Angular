import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee } from '../../models';
import { PresenceService } from '../../services/presence';

@Component({
    selector: 'app-presence',
    templateUrl: './presence.component.html',
    styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit, OnDestroy {
    // tslint:disable-next-line: variable-name
    private _onDestroy = new Subject();

    employees: Employee[];
    loading: boolean = false;

    constructor(
        private presenceService: PresenceService
    ) { }

    ngOnInit() {
        this.reloadPresence();
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    reloadPresence() {
        this.loading = true;

        this.presenceService
            .get(new Date().toJSON(), 10000083)
            .pipe(takeUntil(this._onDestroy))
            .subscribe((item: Employee[]) => {
                this.employees = item;
                this.loading = false;
            });
    }
}
