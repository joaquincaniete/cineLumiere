

export const pelis = [
    {
        id: 1,
        title: 'The Lost City',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg',
        trailer: 'https://www.youtube.com/watch?v=2kzxPG4cz2g',
        category: 'Comedia/Accion/Romance',
        tipo: 'estreno',
        
    },
    {
        id: 2,
        title: 'Dracula: The Original Living Vampire',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5IEW2ZGKBHrZ1lWZywRVs3pFVyy.jpg',
        trailer: 'https://www.youtube.com/watch?v=ibml9EstOIQ',
        category: 'Terror/Suspense',
        tipo: 'estreno',

    },
    {
        id: 3,
        title: 'Blacklight',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
        trailer: 'https://www.youtube.com/watch?v=I9ltaTUzs3Q',
        category: 'Acción/Suspense',
        tipo: 'estreno',    

    },
    {
        id: 4,
        title: 'Muerte en el Nilo',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5ytfx0deVe07GSjNvJkiMAH8fob.jpg',
        trailer: 'https://www.youtube.com/watch?v=Sy_b5jAK1qM',
        category: 'Misterio/Crimen/Drama',
        tipo: 'estreno',

    },
    {
        id: 5,
        title: 'The Batman',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pOaKyhMwALpCTg07eQQu0SQCbL9.jpg',
        trailer: 'https://www.youtube.com/watch?v=5TW_0gfEOG0',
        category: 'Accion/Crimen/Drama',
        tipo: 'proximamente',
        
    },
    {
        id: 6,
        title: 'Outsiders',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n0lgoHXEFhIwYBSnFaRXeGAaRw1.jpg',
        trailer: 'https://www.youtube.com/watch?v=4J507i7Z28o',
        category: 'Ciencia Ficcion/Suspense',
        tipo: 'proximamente',

    },
    {
        id: 7,
        title: 'Gold',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/32TXmY7GHlXhgGG7Wzrurm1okG5.jpg',
        trailer: 'https://www.youtube.com/watch?v=LtB4ywF7dI0',
        category: 'Suspense',
        tipo: 'proximamente',

    },
    {
        id: 8,
        title: 'Uncharted',
        price: 'n/d',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8FiWi61YRbkN95xmH668iq5sCo1.jpg',
        trailer: 'https://www.youtube.com/watch?v=kVgsnqAp0Kk',
        category: 'Accion, Aventura',
        tipo: 'proximamente',

    },

    {
        id: 9,
        title: 'Volver Al Futuro Parte I',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg',
        trailer: 'https://www.youtube.com/watch?v=q27OhNUzBXk',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',
        
    },
    {
        id: 10,
        title: 'Volver Al Futuro Parte II',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dD9UL43dn1LTInOV5MtSyxXGbE6.jpg',
        trailer: 'https://www.youtube.com/watch?v=ixLXR27eGCw',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',

    },
    {
        id: 11,
        title: 'Volver Al Futuro Parte III',
        price: 150,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg',
        trailer: 'https://www.youtube.com/watch?v=TRKpufabcZc',
        category: 'Aventura/Ciencia Ficcion',
        tipo: 'clasica',

    },


];

export const traerPelis = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(pelis);
    }, 4000)
})



