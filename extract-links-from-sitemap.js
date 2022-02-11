const xml2js = require('xml2js');
const fs = require("fs/promises");

(async () => {
    const xml = await fs.readFile('./sitemaps/sitemap_itp_01_1.xml')
    xml2js.parseString(xml, (err, results) => {
        const urls = results.urlset.url.map(u=> u.loc);
        console.log(urls)
        // console.log(results.urlset.url[0])
    })

})()
