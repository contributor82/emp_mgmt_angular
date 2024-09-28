export class ClientProject {
    clientProjectId: number;
    empId: number;
    empName: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    leadByEmpId: number;
    completedDate: Date;
    contactPerson: string;
    contactPersonContactNo: string;
    totalEmpWorking: number;
    projectCost: number;
    projectDetails: string;
    contactPersonEmailId: string;
    clientId: number;
    clientName: string;

    constructor() {
        this.clientProjectId = 0;
        this.empId = 0;
        this.empName = '';
        this.empEmailId = '';
        this.empDesignation = '';
        this.projectName = '';
        this.startDate = new Date();
        this.expectedEndDate = new Date();
        this.leadByEmpId = 0;
        this.completedDate = new Date();
        this.contactPerson = '';
        this.contactPersonContactNo = '';
        this.totalEmpWorking = 0;
        this.projectCost = 0;
        this.projectDetails = '';
        this.contactPersonEmailId = '';
        this.clientId = 0;
        this.clientName = '';
    }
}
