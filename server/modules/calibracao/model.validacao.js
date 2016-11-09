/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

  const validacao = sequelize.define('validacao', {
    va_cod:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    va_cal_cod:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    va_data:{
      type:DataType.DATEONLY,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    va_usuario:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    va_us_cod:{
      type:DataType.INTEGER,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    va_situcao:{
        type:DataType.STRING,
        allowNull:true,
        validate:{
            notEmpty:false
        }
    }
  });
  const usuario = sequelize.import('./calibracao/model.usuario');
  validacao.belongsTo(usuario ,
      {
        foreignKey: 'fk_validacao_usuario1',
        targetKey: 'va_usuario',
        allowNull:true,
        unique:true
      });
  const calibracao = sequelize.import('./model.calibracao');
  validacao.belongsTo(calibracao ,
      {
        foreignKey: 'fk_validacao_calibracao1',
        targetKey: 'va_cal_cod',
        allowNull:true,
        unique:true
      });
  return validacao;
}