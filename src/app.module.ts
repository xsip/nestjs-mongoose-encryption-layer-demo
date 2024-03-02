import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_SCHEMA_TOKEN, UserSchema } from './user.schema';
import { EncryptionLayerModule } from 'nestjs-mongoose-encryption-layer';

@Module({
  imports: [
    // load encryption layer module
    EncryptionLayerModule.forRoot({
      pw: '6c04dfe86459a366352b59a366352b97',
      iv: 'bcfba55b8c312852a25f39d6bdcd6beb',
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/encryptionLayerDemo'),
    MongooseModule.forFeature([
      { name: USER_SCHEMA_TOKEN, schema: UserSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
