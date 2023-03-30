const prueba =(callback) =>{

    let x=0;
    console.log(x)
    callback();

}

const saludar =() =>{

    console.log("un saludo desde aca")
}

prueba(saludar);

const array1 = [5,12,1,3,15,23,67,79,2,5,4,66];

const pares = array1.map((numero) => numero * 2 /*solo una operación*/);
// console.log(pares)

const primerpar = array1.find((numero) => numero%2 === 0);
// console.log(primerpar)

//Json object

const estudianteJ ={
    nombre:"Juan",
    apellido:"Abril",
    edad: 19,
    materias: [
    {
        nombre: "PNT",
        semestre: 3
    },
    {
        nombre: "Bases de datos",
        semestre: 4
    }
    ]
}

const estudianteA ={
    nombre:"Andrea",
    apellido:"Forero",
    edad: 19,
    materias: [
    {
        nombre: "Introducción a la administración",
        semestre: 4
    },
    {
        nombre: "PNT",
        semestre: 3
    }
    ]
}

const EstudianteJoao ={
    nombre: "Joao",
    apellido: "Obando",
    materias: [
        {nombre: "POO",
         nota: 2.0},
        {nombre: "funadmentos",
         nota: 4.5},
        {nombre : "logica",
         nota: 2.9},
        {nombre: "algebra",
         nota: 4.5},
        {nombre: "IntroProgramación",
         nota: 5.0}
    ]
}


const estudiantes =[estudianteA,estudianteJ,EstudianteJoao];

const estudiantesmod = estudiantes.map(function(estudiante){
    return {
        nombreCompleto: estudiante.nombre + estudiante.apellido,
        materias: estudiante.materias
    }
});

const {materias} = estudianteJ //desestructurar, sacar del objeto juan SOLO las materias.


// const EstudianteFil =(estudiante)=>{
//     return {
//         nombreCompleto: estudiante.nombre + estudiante.apellido,
//         materias: estudiante.materias
//     }
// }

// const estudiantesmod = estudiantes.map(EstudianteFil);


//-----------------------------------------------------------------
// filter
// undefined, no existe.
// null, existe pero no hay nada.
// 0, sabemos que hay pero no hay nada.

// const pares = array1.filter(par => par%2 == 0);
// console.log(pares);
//-----------------------------------------------------------


const DetalleEstudiante = estudiantes.map((estudiante) =>{
    return {
        materiasperdidas: estudiante.materias.filter((nota)=> nota.nota < 3),
        materiasganadas: estudiante.materias.filter((nota)=> nota.nota >= 3)
        }   
    }
)
console.log(DetalleEstudiante)