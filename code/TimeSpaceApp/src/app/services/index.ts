import { EmployeeService } from './employee';
import { PresenceService } from './presence';
import { SettingsService } from './settings';


export const services: any[] = [
    EmployeeService,
    PresenceService,
    SettingsService
];


export * from './employee';
export * from './presence';
export * from './settings';
export * from './api-service';
export * from './interceptors';
export * from './guards';
