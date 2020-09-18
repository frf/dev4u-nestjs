import {
    Column,
    Entity,
    Index,
    Generated,
    PrimaryGeneratedColumn,
    BeforeInsert
  } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';

@Index("users_uuid_unique", ["uuid"], { unique: true })
@Index("users_email_unique", ["email"], { unique: true })
@Entity("users", { schema: process.env.DB_SCHEMA })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Generated("uuid")
  @Column("char", { name: "uuid", unique: true, length: 36 })
  uuid: string;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "email", unique: true, length: 191 })
  email: string;

  @Column("varchar", { name: "password", length: 191 })
  password: string;

  @Column("varchar", { name: "facebook_id", nullable: true, length: 191 })
  facebookId: string | null;

  @Column("varchar", { name: "avatar", nullable: true, length: 191 })
  avatar: string | null;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("datetime", { name: "email_verified_at", nullable: true })
  emailVerifiedAt: Date | null;

  @Column("int", { name: "status", default: () => "'1'" })
  status: number;

  @Column("int", { name: "type", nullable: true })
  type: number | null;

  @Column("varchar", { name: "telefone", nullable: true, length: 191 })
  telefone: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 191 })
  uf: string | null;

  @Column("varchar", { name: "sexo", nullable: true, length: 191 })
  sexo: string | null;

  @Column("varchar", { name: "logradouro", nullable: true, length: 191 })
  logradouro: string | null;

  @Column("date", { name: "nascimento", nullable: true })
  nascimento: string | null;

  @Column("varchar", { name: "remember_token", nullable: true, length: 100 })
  rememberToken: string | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(showToken: boolean = true): UserDto {
    const { uuid, name, email } = this;
    const responseObject: UserDto = {
      uuid,
      name,
      email,
    };

    return responseObject;
  }
}