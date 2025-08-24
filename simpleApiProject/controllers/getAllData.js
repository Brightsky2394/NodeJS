import { startups } from "../data.js";

export const getAllData = (req, res) => {
    let filterData = startups;
    const {country, continent, industry, is_seeking_funding, has_mvp} = req.query;
    if (country) {
        filterData = filterData.filter(startup => (
            startup.country.toLowerCase() === country.toLowerCase()
        ))
    }
    
    if (continent) {
        filterData = filterData.filter(startup => (
            startup.continent.toLowerCase() === continent.toLowerCase()
        ))
    }
    if (industry) {
        filterData = filterData.filter(startup => (
            startup.industry.toLowerCase() === industry.toLowerCase()
        ))
    }
    if (is_seeking_funding) {
        filterData = filterData.filter(startup => (
            startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
        ))
    }
    if (has_mvp) {
        filterData = filterData.filter(startup => (
            startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
        ))
    }

    return res.json(filterData);
}