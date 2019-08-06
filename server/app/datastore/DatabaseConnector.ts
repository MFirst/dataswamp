import { IDatabaseConnector } from "./IDatabaseConnector";
import { Database } from "sqlite3"

export class DatabaseConnetor implements IDatabaseConnector {
    private db: Database | undefined;

    createDatabase(databasePath: string, databaseName: string) : void{
        this.db = new Database(`${databasePath}/${databaseName}`);
    }

    async runSql(sqlStatement : string) : Promise<any>{ 
        if (this.db){
            await this.db.run(sqlStatement);
        }
        
    }
}