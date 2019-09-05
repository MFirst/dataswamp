export default interface IProjectService {
    
    createProject(userId: string, projectName: string, description: string): Promise<void>
}