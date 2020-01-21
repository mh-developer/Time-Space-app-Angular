import { EmployeeService } from './employee';
import { PersenceService } from './persence';
import { SettingsService } from './settings';


export const components: any[] = [
    EmployeeService,
    PersenceService,
    SettingsService
];


export * from './employee';
export * from './persence';
export * from './settings';
