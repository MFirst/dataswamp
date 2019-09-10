import SQLExecutor from '../../ds/sql.executor';
import IProjectService from './project.service.interface';

var uuid4 = require('uuid4');

export default class ProjectService implements IProjectService {

    constructor(public sqlExecutor: SQLExecutor){

    }

    public async createProject(userId: string, projectName: string, description: string): Promise<void> {

        let dbName = this.createInfrastructure();

        let columnNames = ['name', 'description', 'databaseName', 'userId'];

        let values = [[projectName, description, dbName, userId]];

        await this.sqlExecutor.insertValues('projects', columnNames, values, 1);
    }

    public async getProjects(): Promise<Array<any>> {

        var projects = await this.sqlExecutor.getAll('projects');

        return projects;
    }

    public async getProjectbyId(projectId: number): Promise<any> {

        var project = await this.sqlExecutor.getById('projects', projectId);

        return project;
    }

    public async deleteProjectById(projectId: number): Promise<void> {

        await this.sqlExecutor.deleteById('projects', projectId);

        return;
    }

    private async generateDbName(): Promise<string> {

        return uuid4();
    }

    private async createInfrastructure(): Promise<string> {

        let dbName = await this.generateDbName();

        await this.createSourcesTable();
        await this.createColumnsTable();

        return dbName;
    }

    private async createSourcesTable(): Promise<void> {

        if (!this.sqlExecutor) {

            throw new Error("sqlExecutor is null");
        }

        var columnNames = ['projectId', 'fileName', 'description', 'progress'];

        await this.sqlExecutor.createTable('sources', columnNames);
    }

    private async createColumnsTable(): Promise<void> {

        if (!this.sqlExecutor) {

            throw new Error("sqlExecutor is null");
        }

        let columnNames = ['surceId', 'columnName', 'sortOrder'];

        await this.sqlExecutor.createTable('columns', columnNames);
    }
}