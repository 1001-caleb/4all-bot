const fs = require('fs');

const allEvents = [];

module.exports = async (client) => {
    try {
        try {
            console.log('Cargando eventos...');
        } catch (e) { console.log(e) }

        let cantidad = 0;
        const cargar_dir = (dir) => {
            const archivos_eventos = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith('.js'));
            for (const archivo of archivos_eventos) {
                try {
                    const evento = require(`../events/${dir}/${archivo}`);
                    const nombre_evento = archivo.split('.')[0];
                    allEvents.push(nombre_evento);
                    client.on(nombre_evento, evento.execute.bind(null, client));
                    cantidad++;
                } catch (e) { console.log(`Error cargando evento ${dir}/${archivo}`); console.log(e); }
            }
        }
        await ['client', 'guild'].forEach(e => cargar_dir(e));
        console.log(`${cantidad} eventos cargados`);
        try {
            console.log('Cargando comandos...');
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }


}    