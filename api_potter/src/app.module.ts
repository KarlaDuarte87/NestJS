import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './domains/characters/characters.module';

@Module({
  imports: [CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
