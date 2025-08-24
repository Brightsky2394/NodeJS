import { startups } from "../data.js";

export const getDataByPathParams = (req, res) => {
    const {field, term} = req.params;
    const allowedFields = [ 'country', 'continent', 'industry'];
    if (!allowedFields.includes(field)) {
        return res.status(404).json({
            message: "search field not found. Please use country, continent or industry "
        })
    }
    const filterData = startups.filter(startup => (
        startup[field].toLowerCase() === term.toLowerCase()
    ))
    return res.json(filterData)
}