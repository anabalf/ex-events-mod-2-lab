const hbs = require('hbs');
const dayjs = require('dayjs');

hbs.registerPartials(`${__dirname}/../views/partials`);

/**hbs.registerHelper(`dateFormat`, (date, format) => {
    return dayjs(date).format(format) });**/