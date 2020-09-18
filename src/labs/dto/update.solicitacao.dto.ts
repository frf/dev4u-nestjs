import { ApiProperty } from '@nestjs/swagger';
export class UpdateLabSolicitacaoeDto {
    @ApiProperty()
    _id: string;    
    @ApiProperty()
    user_id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date_exame: string;
    @ApiProperty()
    other_exames: string;
}
