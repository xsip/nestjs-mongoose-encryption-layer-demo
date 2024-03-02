import { Injectable } from '@nestjs/common';
import { DBBaseService } from 'nestjs-mongoose-encryption-layer';
import { Model } from 'mongoose';
import { User, USER_SCHEMA_TOKEN } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService extends DBBaseService<User> {
  constructor(@InjectModel(USER_SCHEMA_TOKEN) private userModel: Model<User>) {
    super(userModel);
  }
}
