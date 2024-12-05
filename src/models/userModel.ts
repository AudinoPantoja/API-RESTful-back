// src/models/userModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
  public id!: number;

  public userName!: string;

  public password!: string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [4, 30], // Longitud entre 4 y 30 caracteres
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100], // Longitud mínima de 6 caracteres
      },
    },
  },
  {
    tableName: 'users',
    sequelize, // pasando la instancia de Sequelize
    timestamps: true, // Habilitar timestamps automáticos
  },
);

export default User;
