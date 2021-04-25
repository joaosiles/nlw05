import { EntityRepository, Repository } from "typeorm";

import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRespository extends Repository<Connection> {

};

export { ConnectionsRespository }