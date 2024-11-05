const db = require('../config/db.config'); // Asegúrate de importar la configuración de la base de datos
const Proyecto = db.Proyecto;

// Crear un nuevo proyecto
exports.createProyecto = async (req, res) => {
    try {
        const {
            titulo,
            descripcion,
            completada,
            fecha_vencimiento,
            prioridad,
            asignado_a,
            categoria,
            costo_proyecto,
            pagado,
            metodo_pago
        } = req.body;

        // Validar que el campo obligatorio 'titulo' esté presente
        if (!titulo) {
            return res.status(400).json({ message: "El campo 'titulo' es obligatorio." });
        }

        // Crear el nuevo proyecto en la base de datos
        const proyecto = await Proyecto.create({
            titulo,
            descripcion,
            completada,
            fecha_vencimiento,
            prioridad,
            asignado_a,
            categoria,
            costo_proyecto,
            pagado,
            metodo_pago
        });

        res.status(201).json({
            message: "Proyecto creado exitosamente",
            proyecto, // Devolver el proyecto creado
        });
    } catch (error) {
        console.error("Error al crear el proyecto:", error);
        res.status(500).json({ message: "Error al crear el proyecto", error: error.message || error });
    }
};

// Leer todos los proyectos
exports.getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.status(200).json(proyectos);
    } catch (error) {
        console.error("Error al obtener los proyectos:", error);
        res.status(500).json({ message: "Error al obtener los proyectos", error: error.message || error });
    }
};

// Leer un proyecto por ID
exports.getProyectoById = async (req, res) => {
    try {
        const { id } = req.params;
        const proyecto = await Proyecto.findByPk(id);

        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        res.status(200).json(proyecto);
    } catch (error) {
        console.error("Error al obtener el proyecto:", error);
        res.status(500).json({ message: "Error al obtener el proyecto", error: error.message || error });
    }
};

// Actualizar un proyecto por ID
exports.updateProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            titulo,
            descripcion,
            completada,
            fecha_vencimiento,
            prioridad,
            asignado_a,
            categoria,
            costo_proyecto,
            pagado,
            metodo_pago
        } = req.body;

        const proyecto = await Proyecto.findByPk(id);

        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        // Actualizar los campos del proyecto
        await proyecto.update({
            titulo,
            descripcion,
            completada,
            fecha_vencimiento,
            prioridad,
            asignado_a,
            categoria,
            costo_proyecto,
            pagado,
            metodo_pago
        });

        res.status(200).json({
            message: "Proyecto actualizado exitosamente",
            proyecto, // Devolver el proyecto actualizado
        });
    } catch (error) {
        console.error("Error al actualizar el proyecto:", error);
        res.status(500).json({ message: "Error al actualizar el proyecto", error: error.message || error });
    }
};

// Borrar un proyecto por ID
exports.deleteProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const proyecto = await Proyecto.findByPk(id);

        if (!proyecto) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }

        // Eliminar el proyecto
        await proyecto.destroy();
        res.status(200).json({ message: "Proyecto eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el proyecto:", error);
        res.status(500).json({ message: "Error al eliminar el proyecto", error: error.message || error });
    }
};
