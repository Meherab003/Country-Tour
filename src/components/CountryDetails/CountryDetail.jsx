import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country Details: </h4>
            <hr />
            <CountryData
            {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;