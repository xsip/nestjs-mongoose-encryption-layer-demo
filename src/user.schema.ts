import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { applyEncryptionLayerToSchema } from 'nestjs-mongoose-encryption-layer';

@Schema({ timestamps: true })
export class User {
  _id!: string;
  @Prop()
  username!: string;
  @Prop({ required: false })
  firstname!: string;
  @Prop({ required: false })
  lastname!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
// apply encryption layer
applyEncryptionLayerToSchema(UserSchema);
export const USER_SCHEMA_TOKEN = 'User';
