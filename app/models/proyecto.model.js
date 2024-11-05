// models/proyecto.model.js
module.exports = (sequelize, DataTypes) => {
    const Proyecto = sequelize.define('Proyecto', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        completada: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        fecha_vencimiento: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        prioridad: {
            type: DataTypes.ENUM('baja', 'media', 'alta'),
            allowNull: true,
            defaultValue: 'media',
        },
        asignado_a: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        costo_proyecto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        pagado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        metodo_pago: {
            type: DataTypes.ENUM('stripe', 'paypal'),
            allowNull: true,
        }
    }, {
        // Opciones del modelo
        timestamps: true, // Esto habilita los campos createdAt y updatedAt
        tableName: 'proyecto'
    });

    return Proyecto;
};
