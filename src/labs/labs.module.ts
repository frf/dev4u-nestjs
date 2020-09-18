import { Module } from '@nestjs/common';
import { LabsController } from './labs.controller';
import { LabsService } from './labs.service';
// import { Solicitacao, SolicitacaoSchema } from './labs.solicitacao.schema';
// import {optionsPaginate} from '../share/config.paginate.constants';
import { PacientesModule } from 'src/pacientes/pacientes.module';

@Module({
  imports: [PacientesModule],
  controllers: [LabsController],
  providers: [LabsService]
})
export class LabsModule {}
