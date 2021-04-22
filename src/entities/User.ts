import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  //sempre que é instanciado um objeto o construtor é chamado (= new users por exemplo)
  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { User }