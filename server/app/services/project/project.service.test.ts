import { expect } from "chai";
import { describe } from "mocha";
import fs from "fs";
import ProjectService from './project.service';
import SQLExecutor from "../../ds/sql.executor";

describe('Project service Test', async () => {

    let sqlExecutor = new SQLExecutor('dataswamp-test');

    let projectService = new ProjectService(sqlExecutor);


    it('Expect to crate project', async () => {

        const userId = '1234';
        const projectName = 'test project';
        const description = projectName;

        await projectService.createProject(userId, projectName, description);
    
        let projects = await projectService.getProjects();

        let project = projects.find(project => project.userId == userId && 
                                               project.projectName == projectName &&
                                               project.description == description);

        expect(project).not.to.be.null;                                
    })
})