let notes = [];

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
    read: (req, res) => {
        res.status(200).send(notes);
    },
    create: (req, res) => {
        // console.log(title)
        const { title, content, date } = req.body;
        let note = {
            id: id,
            title: title,
            content: content,
            date: date
        }
        notes.push(note);
        id++;
        res.status(200).send(notes);
    },
    update: (req, res) => {
        console.log("Got req ", req.body);
        let index = null;
        notes.forEach((note, i) => {
            if (note.id === Number(req.params.id)) index = i;
            console.log("Got note ", index);
        })
        notes[index] = {
            id: notes[index].id,
            title: req.body.title || notes[index].title,
            content: req.body.content || notes[index].content,
            date: req.body.date || notes[index].date
        };
        console.log("Got req ", req.body.title);
        console.log("Got note ", notes[index]);

        res.status(200).send(notes);
    },
    delete: (req, res) => {
        let index = null;
        notes.forEach((note, i) => {
            if (note.id === Number(req.params.id)) index = i;
        })
        notes.splice(index, 1)
        res.status(200).send(notes);
    }
};
