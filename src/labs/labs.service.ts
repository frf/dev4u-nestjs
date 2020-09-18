import { Injectable,  Scope, Inject, HttpStatus, HttpException, Body } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { PaginateModel, PaginateResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Solicitacao } from './labs.solicitacao.schema';
import { Paginate } from 'src/share/decorator/paginate.decorator';
import { optionsPaginate } from '../share/config.paginate.constants';
import { PaginateDto } from 'src/share/dto/paginate.dto';

import { ResponseDto } from 'src/share/dto/response.dto';
// import { UpdatePacienteDto } from './dto/update.solicitacao.dto';
import { CreateLabSolicitacaoeDto } from './dto/create.solicitacao.dto';
import { PacientesService} from '../pacientes/pacientes.service';

//@InjectModel(Solicitacao.name) private model: PaginateModel<Solicitacao>,

@Injectable()
@Injectable({ scope: Scope.REQUEST })
export class LabsService {
    constructor(
                private pacienteService: PacientesService,
                @Inject(REQUEST) private request: Request) {}

      // async create(dataCreate: Solicitacao): Promise<ResponseDto> {
        
      //   try {

      //     const patient = await this.pacienteService.findOne(dataCreate.patient_id);

      //     const user:any = this.request.user;
      //     console.log(user)
      //     dataCreate.user_id = user.id;
      //     dataCreate.user_name = user.name;

      //     patient.labs_solicitacaos.push(dataCreate);
      //     patient.save();

      //     return {message: 'Exame cadastrado com sucesso', object: patient}

      //   } catch (error) {
      //       throw new HttpException(
      //         error.response,
      //         HttpStatus.BAD_REQUEST,
      //       );
      //   }
       
      // }

      // async update(paciente: UpdatePacienteDto): Promise<ResponseDto> {
        
      //   try {

      //     console.log('paciente', paciente)

      //     if (!paciente._id) {
      //       throw new HttpException(
      //         'Erro id não encontrado',
      //         HttpStatus.BAD_REQUEST,
      //       );
      //     }
        
      //     const pacienteResponse = await this.pacienteModel.updateOne({_id:paciente._id},paciente);

      //     console.log(pacienteResponse);

      //     return {message: 'Paciente atualizado com sucesso'}

      //   } catch (error) {
      //     console.log(error)
      //       throw new HttpException(
      //         error.response,
      //         HttpStatus.BAD_REQUEST,
      //       );
      //   }
       
      // }
    
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      // async findAll(id: string): Promise<Solicitacao[]> {
      //   const paciente = await this.pacienteService.findOne(id);
      //   return  paciente.labs_solicitacaos;
      // }
    
      // async findOne(id: string): Promise<Paciente> {
      //   return await this.pacienteModel.findOne({_id: id});
      // }
    
      // async remove(id: string): Promise<void> {
      //   await this.pacientesRepository.delete(id);
      // }
}
