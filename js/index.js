'use strict';

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

var newsdata = [
  {
    title: 'Eli Lilly Internship',
    date: '08/20/2022',
    text: 'Alvaro ended up the internship in Eli Lilly',
  },
  {
    title: 'Fulbright scholarship awarded',
    date: '09/07/2021',
    text: 'Alvaro was awarded the Fulbright Pasaporte a la Ciencia scholarship',
  },
  {
    title: 'Fulbright scholarship awarded',
    date: '09/07/2021',
    text: 'Alvaro was awarded the Fulbright Pasaporte a la Ciencia scholarship',
  },
  {
    title: 'Fulbright scholarship awarded',
    date: '09/07/2021',
    text: 'Alvaro was awarded the Fulbright Pasaporte a la Ciencia scholarship',
  },
  {
    title: 'Fulbright scholarship awarded',
    date: '09/07/2021',
    text: 'Alvaro was awarded the Fulbright Pasaporte a la Ciencia scholarship',
  },
  {
    title: 'Eli Lilly Internship',
    date: '08/20/2022',
    text: 'Alvaro ended up the internship in Eli Lilly',
  },
  {
    title: 'Eli Lilly Internship',
    date: '08/20/2022',
    text: 'Alvaro ended up the internship in Eli Lilly',
  },
  {
    title: 'Eli Lilly Internship',
    date: '08/20/2022',
    text: 'Alvaro ended up the internship in Eli Lilly',
  },
];

var newsdiv = d3
  .select('#news-box')
  .selectAll('#divsnews')
  .data(newsdata)
  .enter()
  .append('div')
  .attr('class', 'newbox');

newsdiv.append('h4').html((d) => d.title);

newsdiv
  .append('span')
  .html((d) => d.date)
  .attr('style', 'font-size:9');

newsdiv
  .append('p')
  .html((d) => d.text)
  .attr('style', 'font-size:9');
