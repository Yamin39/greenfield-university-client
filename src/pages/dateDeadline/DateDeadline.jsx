import SharedBanner from "../../shared/SharedBanner";
import DateRange from "./DateRange";


const DateDeadline = () => {
    return (
        <div>
            <SharedBanner title={'Dates & Deadlines'}></SharedBanner>
            <DateRange></DateRange>
        </div>
    );
};

export default DateDeadline;