//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';

const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athlete',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                     discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Fresh look on a brutal sport.',
               discription:  '" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Its okay lmao',
                discription:  '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                }
            ],
        },

        {
            title: 'Good Times',
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: '/work/good-times',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                     discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Fresh look on a brutal sport.',
                 discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Its okay lmao',
                 discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                }
            ],
        },

        {
            title: 'The Racer',
            mainImg: theracer,
            secondaryImg: goodtimes2,
            url: '/work/the-theracer',
            awards: [
                {
                    title: 'Truly A Masterpiece',
                     discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Fresh look on a brutal sport.',
                 discription: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                },
                {
                    title: 'Its okay lmao',
                discription:  '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea? "',               
                }
            ],
        }
    ]
}

export default MovieState
