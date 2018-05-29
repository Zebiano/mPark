// Schema variable
var Schema = global.mongoose.Schema;

// SCHEMAS
// Marca do carro
var marcaSchema = Schema({
    name: String,
    modelo: [{
        type: Schema.Types.ObjectId,
        ref: 'Modelo'
    }]
});

// Modelo do carro
var modeloSchema = Schema({
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca'
    },
    name: String
});

// Criar models
var Marca = global.mongoose.model('Marca', marcaSchema);
var Modelo = global.mongoose.model('Modelo', modeloSchema);

// Criar duas marcas e 3 modelos em cada marca \\
// Marca 1: Lambo
var lambo = new Marca({
    name: 'Lamborghini'
});

// Marca 2: Porsche
var porsche = new Marca({
    name: 'Porsche'
});

// Gravar marca e criar modelos
/*lambo.save(function(err) {
    if (err) {
        Console.log("Erro: " + err)
    }
    else {
        // Modelos da marca
        var urus = new Modelo({
            marca: lambo._id,
            name: 'Urus'
        });
        var huracán = new Modelo({
            marca: lambo._id,
            name: 'Huracán'
        });
        var aventador = new Modelo({
            marca: lambo._id,
            name: 'Aventador'
        });
        
        // Guardar Modelos
        urus.save();
        huracán.save();
        aventador.save();
    }
});

// Gravar marca e criar modelos
porsche.save(function(err) {
    if (err) {
        Console.log("Erro: " + err)
    }
    else {
        // Modelos da marca
        var carrera = new Modelo({
            marca: porsche._id,
            name: 'Carrera'
        });
        var boxster = new Modelo({
            marca: porsche._id,
            name: 'Boxster'
        });
        var macan = new Modelo({
            marca: porsche._id,
            name: 'Macan'
        });
        
        // Guardar Modelos
        carrera.save();
        boxster.save();
        macan.save();
    }
});*/

/*Modelo.findOne({ _id: '5b0af28cd99503ad34fb3ba3' }, function(err, modelo) {
    Marca.findOne({ _id: modelo.marca }, function (err2, marca) {
        console.log("O user tem um carro da marca " + marca.name + " e do modelo " + modelo.name + ".");
    });
});*/




/*var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var authorSchema = Schema({
    name: String,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    title: String
});

var Story = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

// SECOND PART
/*var bob = new Author({ name: 'Bob Smith' });

bob.save(function(err) {
    if (err) return handleError(err);

    //Bob now exists, so lets create a story
    var story = new Story({
        title: "Bob goes sledding",
        author: bob._id // assign the _id from the our author Bob. This ID is created by default!
    });

    story.save(function(err) {
        if (err) return handleError(err);
        console.log("Bob has a story");
    });
});*/

/*Story
    .findOne({ title: 'Bob goes sledding' })
    .populate('author') //This populates the author id with actual author information!
    .exec(function(err, story) {
        if (err) return handleError(err);
        console.log('The author is %s', story.author.name);
        // prints "The author is Bob Smith"
    });*/

/*Author.findOne({ name: 'Bob Smith' }).exec(function(err, author) {
    if (err) {
        console.log("Error");
    }
    else {
        console.log("ID: " + author._id);
        
        var story = new Story({
            title: "Bob goes fucking",
            author: author._id // assign the _id from the our author Bob. This ID is created by default!
        });

        //save
        story.save(function(err) {
            if (err) return handleError(err);
            console.log("Bob has a story");
        });
    }
});*/
