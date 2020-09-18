import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { LabsService } from './labs.service';
import { Solicitacao } from './labs.solicitacao.schema';
import { JwtAuthGuard } from '../auth/share/jwt-auth.guard';
// import { PaginateResult } from 'mongoose';
// import { PaginateDto } from '../share/dto/paginate.dto';
// import { Paginate } from 'src/share/decorator/paginate.decorator';
import { ResponseDto } from 'src/share/dto/response.dto';
// import { UpdateLabSolicitacaoeDto } from './dto/update.solicitacao.dto';

@UseGuards(JwtAuthGuard)
@Controller('labs')
export class LabsController {
    constructor(private readonly service: LabsService) {}

    // @Post()
    // create(@Body() create: Solicitacao): Promise<ResponseDto> {
    //   return this.service.create(create);
    // }
    
    // @Get(':id')
    // // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    // findAll(@Param('id') id: string): Promise<Solicitacao[]> {
    //   return this.service.findAll(id);
    // }
  
    // @Get(':id')
    // findOne(@Param('id') id: string): Promise<Paciente> {
    //   return this.pacientesService.findOne(id);
    // }
  
    // @Put(':id')
    // update(@Body() pacienteData: UpdatePacienteDto): Promise<ResponseDto> | null {
    //   return this.pacientesService.update(pacienteData);
    // }
}
