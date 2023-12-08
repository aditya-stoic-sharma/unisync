import TimeTile from '../components/TimeTile';
export default function TimeTabel(props) {
    function handleClick() {
        console.log(props.showAlert);
        props.showAlert("time table updated 2", "success");
    }

    return (
        <div>
            <div className="heading d-flex justify-content-center mx-auto mb-5 bg-primary text-light" style={{ maxWidth: '30rem', height: '3.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: "" }}>
                <h2 className="text-center my-1">TIME TABLE</h2>
            </div>
            <div className="morning-phase d-flex justify-content-center">
                <TimeTile time={"09:00 - 10:00"} classTitle={"Operating System"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"10:00 - 11:00"} classTitle={"Computer organization"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"11:00 - 12:00"} classTitle={"Database management"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"12:00 - 13:00"} classTitle={"Networking"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"13:00 - 14:00"} classTitle={"Artificial Intelligence"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />

            </div>
            <div className="afternoon-phase d-flex justify-content-center">
                <TimeTile time={"14:00 - 15:00"} classTitle={"Engineering graphics"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"15:00 - 16:00"} classTitle={"Data structures"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"16:00 - 17:00"} classTitle={"introduction to C"} classVenue={"venue: lt-2"} classDescription={"schedules paging"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"17:00 - 18:00"} classTitle={"chess competetioin"} classVenue={"venue: Red rocks"} classDescription={"sarang chess competition semi finals"} teacher={"Dr Ajay Kaul"} />
                <TimeTile time={"18:00 - 19:00"} classTitle={"Cricket Tournament"} classVenue={"venue: Sports Complex"} classDescription={"qualifiers for each house"} teacher={"shivang "} />
            </div>
        </div>
    )
}
