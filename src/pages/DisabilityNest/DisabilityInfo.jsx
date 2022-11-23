import DisabilityButton from "./DisabilityButton";

const disabilityInfo = () => {
    return (

        <div className='text-center'>
            <p style={{ margin: "3% 13%" }}>
                <p>The Rights of Persons with Disabilities Act, 2016, defines the term Person with Disability as “a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.”</p>

                <p>The Act also specifies a comprehensive list of 21 disabilities, which are included under the ambit of the Act and are broadly classified into 6 major categories https://legislative.gov.in/sites/default/files/A2016-49_1.pdf</p>
            </p>
            <DisabilityButton />
        </div >
    );
}

export default disabilityInfo;
