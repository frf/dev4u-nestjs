import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    readonly uuid: string;    
    
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password?: string;
}