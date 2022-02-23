

export const pelis = [
    {
        id: 1,
        title: 'Hacker: Trust No One',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/91pB7MxquMeFbeMHamslCKk5wNZ.jpg',
        category: 'Suspense',
        tipo: 'en cartelera',
        
    },
    {
        id: 2,
        title: 'Dracula: The Original Living Vampire',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5IEW2ZGKBHrZ1lWZywRVs3pFVyy.jpg',
        category: 'Terror/Suspense',
        tipo: 'estreno',

    },
    {
        id: 3,
        title: 'Blacklight',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
        category: 'Acción/Suspense',
        tipo: 'estreno',    

    },
    {
        id: 4,
        title: 'Muerte en el Nilo',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5ytfx0deVe07GSjNvJkiMAH8fob.jpg',
        category: 'Misterio/Crimen/Drama',
        tipo: 'estreno',

    },
    {
        id: 5,
        title: 'The Batman',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pOaKyhMwALpCTg07eQQu0SQCbL9.jpg',
        category: 'Accion/Crimen/Drama',
        tipo: 'proximamente',
        
    },
    {
        id: 6,
        title: 'Outsiders',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n0lgoHXEFhIwYBSnFaRXeGAaRw1.jpg',
        category: 'Ciencia Ficcion/Suspense',
        tipo: 'proximamente',

    },
    {
        id: 7,
        title: 'Gold',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/32TXmY7GHlXhgGG7Wzrurm1okG5.jpg',
        category: 'Suspense',
        tipo: 'proximamente',

    },
    {
        id: 8,
        title: 'Jason Charger 3',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/krDePMUBA85bkk4WjCkcenZl2c.jpg',
        category: 'Accion',
        tipo: 'proximamente',

    },

    {
        id: 9,
        title: 'Volver Al Futuro Parte I',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',
        
    },
    {
        id: 10,
        title: 'Volver Al Futuro Parte II',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dD9UL43dn1LTInOV5MtSyxXGbE6.jpg',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',

    },
    {
        id: 11,
        title: 'Volver Al Futuro Parte III',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',

    },


];

export const traerPelis = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(pelis);
    }, 4000)
})

export const traerPeli = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve (pelis.id);
    }, 2000)
})


