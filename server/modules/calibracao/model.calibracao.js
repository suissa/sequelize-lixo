/**
 * Created by leonardoribeiro on 11/3/16.
 */
module.exports = (sequelize, DataType) => {

    const calibracao = sequelize.define('calibracao', {
        cal_cod:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cal_datacalibracao:{
            type:DataType.STRING,
            allowNull:true,
            validate:{
                notEmpty:false
            }
        },
        cal_certificado:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        cal_periodicidade:{
            type:DataType.DATEONLY,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        cal_laudofinal:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    });
    const validacao = sequelize.import('./model.validacao');
    calibracao.belongsTo(validacao ,
        {
            foreignKey: 'fk_validacao_calibracao1',
            targetKey: 'id',
            allowNull:true,
            unique:true
        });
    return calibracao;
}
