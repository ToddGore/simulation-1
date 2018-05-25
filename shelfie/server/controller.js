let products = [];

// {
//     id: 0, title: "Work Notes",
//     content: "I need to complete the PMI on the TrueBeam", date: "2018-5-18"
// },
// {
//     id: 1, title: "More Work Notes",
//     content: "The door at Herrick needs repaired.", date: "2018-5-18"
// }

let id = 0;

module.exports = {

    getAll: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.get_all()
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    }
    // addProduct: (req, res) => {
    //     const db = req.app.get('db');
    //     const { name, price, image } = req.body
    //     db.add_product([name, price, image])
    //         .then(inventory => res.status(200).send(inventory))
    //         .catch(() => res.status(500).send())
    // },

    // deleteProduct: (req, res) => {
    //     const db = res.app.get('db')
    //     const { id } = req.params
    //     db.delete_product([id])
    //         .then(inventory => res.status(200).send(inventory))
    //         .catch(() => res.status(500).send())
    // }
};
