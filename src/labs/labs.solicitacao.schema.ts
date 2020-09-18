import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Solicitacao extends Document {
  @Prop()
  patient_id?: string;  
  @Prop()
  user_id?: string;  
  @Prop()
  user_name?: string;
  @Prop()
  title?: string;
  @Prop()
  description?: string;
  @Prop()
  date_exame?: string;
  @Prop()
  other_exames?: string;
}

export const SolicitacaoSchema = SchemaFactory.createForClass(Solicitacao);