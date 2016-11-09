/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

  const contato = sequelize.define('contato', {
    co_ccod:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    co_cl_cod:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    co_cliente:{
      type:DataType.STRING,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    co_nome:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    co_celular:{
      type:DataType.STRING,
      allowNull:true,
      validate:{
        notEmpty:false
      }
    },
    co_descricao:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    co_ativo:{
        type:DataType.INTEGER,
        allowNull:true,
        validate:{
            notEmpty:false
        }
    }
  });
  const cliente = sequelize.import('./model.cliente');
  contato.belongsTo(cliente ,
      {
        foreignKey: 'fk_contato_cliente',
        targetKey: 'co_cl_cod',
        allowNull:true,
        unique:true
      });
  return contato;
}