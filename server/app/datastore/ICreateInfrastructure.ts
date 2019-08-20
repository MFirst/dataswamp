export interface ICreateInfrastructure{
    createProject(userId : string, projectName : string, description : string) : string;
    upload(fileName : string, columns : Array<string>, description : string, projectId : string) : void;
}