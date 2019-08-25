import { ICreateInfrastructure } from "./ICreateInfrastructure";
import { Database, RunResult } from "sqlite3"

export class CreateInfrastructure implements ICreateInfrastructure {
    createProject(userId: string, projectName: string, description: string): string {
        throw new Error("Method not implemented.");
    }   
    
    upload(fileName: string, columns: string[], description: string, projectId: string): void {
        throw new Error("Method not implemented.");
    }

    
}