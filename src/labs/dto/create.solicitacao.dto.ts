import { ApiProperty } from '@nestjs/swagger';
export class CreateLabSolicitacaoeDto {
    @ApiProperty()
    patient_id: string;    
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    user_name: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date_exame: string;
    @ApiProperty()
    other_exames: string;
}
