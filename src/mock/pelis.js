

export const pelis = [
    {
        id: 1,
        title: 'Hacker: Trust No One',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/91pB7MxquMeFbeMHamslCKk5wNZ.jpg',
        category: 'Suspense',
        
    },
    {
        id: 2,
        title: 'Dracula: The Original Living Vampire',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5IEW2ZGKBHrZ1lWZywRVs3pFVyy.jpg',
        category: 'Terror/Suspense',

    },
    {
        id: 3,
        title: 'Blacklight',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
        category: 'Acción/Suspense',

    },
    {
        id: 4,
        title: 'Muerte en el Nilo',
        price: 500,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5ytfx0deVe07GSjNvJkiMAH8fob.jpg',
        category: 'Misterio/Crimen/Drama',

    },

];

export const traerPelis = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(pelis);
    }, 4000)
})


