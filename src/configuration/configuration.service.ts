import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService) {}
  get getPort(): number {
    return this.configService.get<number>('PORT', 3000);
  }
  get getDbType(): string {
    return this.configService.get<string>('DB_TYPE', 'database');
  }
  get getDbHost(): string {
    return this.configService.get<string>('DB_HOST', 'live');
  }
  get getDbUserName(): string {
    return this.configService.get<string>('DB_USERNAME', 'user');
  }
  get getDbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD', 'password');
  }
  get getDbName(): string {
    return this.configService.get<string>('DB_NAME', 'name');
  }
  get getDbPort(): number {
    return this.configService.get<number>('DB_PORT', 1234);
  }

  get dataBaseConnection(): any {
    return {
      type: this.getDbType,
      host: this.getDbHost,
      port: this.getDbPort,
      username: this.getDbUserName,
      password: this.getDbPassword,
      database: this.getDbName,
      entities: [],
      synchronize: true,
    };
  }
}
