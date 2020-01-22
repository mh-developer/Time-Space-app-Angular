import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    tokenForm: FormGroup;
    success: boolean = false;

    constructor(
        private settingsService: SettingsService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.tokenForm = this.formBuilder.group({
            token: '',
        });
    }

    setToken(formData): void {
        this.settingsService.saveToken(formData.token);
        this.tokenForm.reset();
        this.success = true;
    }

}
