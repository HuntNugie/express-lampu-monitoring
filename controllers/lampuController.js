import Lampu from "../models/Lampu.js";

export const index = async (req, res) => {
    try {
        const data = await Lampu.findUnique({
            where: {id: 1},
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

export const update = async (req, res) => {
    try {
        const result = await Lampu.findUnique({
            where: {id: 1},
        });
        let hasil;
        if (result.status_lampu == "nyala") {
            hasil = "mati";
        } else {
            hasil = "nyala";
        }

        // update
        const update = await Lampu.update({
            where: {id: result.id},
            data: {status_lampu: hasil},
        });
        return res.status(200).json({message:`lampu ${update.status_lampu}`})
    } catch (error) {
        res.status(400).json({message: error});
    }
};
