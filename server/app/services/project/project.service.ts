import SQLExecutor from '../../ds/sql.executor';
import IProjectService from './project.service.interface';

var uuid4 = require('uuid4');

export default class ProjectService implements IProjectService {

    public async createProject(userId: string, projectName: string, description: string): Promise<void> {

        let dbName = this.createInfrastructure();

        let sqlExecutor = new SQLExecutor('dataswamp');

        let columnNames = ['name', 'description', 'databaseName', 'userId'];

        let values = [[projectName, description, dbName, userId]];

        await sqlExecutor.insertValues('projects', columnNames, values, 1);
    }

    public async getProjects() : Promise<any>{

        let sqlExecutor = new SQLExecutor('dataswamp');

        var projects= await sqlExecutor.getAll('projects');

        return projects;
    }

    public async getProjectbyId(projectId: number) : Promise<any>{

        let sqlExecutor = new SQLExecutor('dataswamp');

        var project = await sqlExecutor.getById('projects', projectId);
    
        return project;
    }

    public async deleteProjectById(projectId: number): Promise<void>{

        let sqlExecutor = new SQLExecutor('dataswamp');
    }


    private async generateDbName(): Promise<string> {

        return uuid4();
    }

    private async createInfrastructure(): Promise<string> {

        let dbName = await this.generateDbName();

        let sqlExecutor = new SQLExecutor(dbName);

        await this.createSourcesTable(sqlExecutor);
        await this.createColumnsTable(sqlExecutor);

        return dbName;
    }

    private async createSourcesTable(sqlExecutor: SQLExecutor): Promise<void> {

        if (!sqlExecutor) {

            throw new Error("sqlExecutor is null");
        }

        var columnNames = ['projectId', 'fileName', 'description', 'progress'];

        await sqlExecutor.createTable('sources', columnNames);
    }

    private async createColumnsTable(sqlExecutor: SQLExecutor): Promise<void> {

        if (!sqlExecutor) {

            throw new Error("sqlExecutor is null");
        }

        let columnNames = ['surceId', 'columnName', 'sortOrder'];

        await sqlExecutor.createTable('columns', columnNames);
    }
}