import { getCustomRepository, Repository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { Setting } from "../entities/Setting";

//o service vai ser responsável pelas regras de negócio

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create( { chat, username } : ISettingsCreate) { 
    //chat e username estão vindo do SettingsController e estão sendo desestruturadas

    //Equivalente a 'SELECT * FROM settings WHERE username = "username" limit 1;'
    const userAlreadyExists = await this.settingsRepository.findOne({ 
      username
     });

     if (userAlreadyExists) {
       throw new Error("User already exists!");
       //repassa o erro pro controller pois o service é responsável por verificar
     }

    const settings = this.settingsRepository.create({
      chat, 
      username
    });
  
    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService }