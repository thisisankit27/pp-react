import DisabilityButton from "./DisabilityButton";

const physicalDis = () => {
    return (
        <div className='m-4'>
            <div className='text-center'>
                <DisabilityButton />
            </div>
            <h2>Physical Disability</h2>
            <h6><p>Under the overall ambit of Physical Disability, three types of disabilities are broadly classified:</p></h6>
            <br></br>
            <ol type="a">
                <li><b>Locomotor Disabilities:</b>Locomotor Disability is the disability of the bones, joints or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-
                    <ol type="i">
                        <li><b>Leprosy cured person</b> - Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation.</li>
                        <li><b>Cerebral palsy</b> - A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development.</li>
                        <li><b>Dwarfism</b> - Medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 centimetres) or less.</li>
                        <li><b>Muscular dystrophy</b> - A group of hereditary genetic muscle diseases that weakens the muscles that move the human body. A person with multiple dystrophy has incorrect and missing information in their genes, which prevents them from making the proteins they need for healthy muscles. Dystrophy is a disorder in which an organ or tissue of the body wastes away.</li>
                        <li><b>Acid attack victims</b> - A person disfigured due to violent assaults by throwing of acid or similar corrosive substance.</li>
                    </ol>
                </li>
                <br></br>
                <li><b>Visual Impairment: </b>Visual Impairment can be further classified as the following-
                    <ol type="i">
                        <li><b>Blindness</b> - A condition where a person suffers from any of the following conditions namely: Total absence of sight; or Visual acuity not exceeding 6/60 or 20/200 (Snellen) in the better eye with correcting lenses; or Limitation of the field vision subtending an angle of 20 degrees or worse.</li>
                        <li><b>Low-Vision</b>- A person with impairment of visual functioning even after treatment or standard refractive correction but who uses or is potentially capable of using vision for the planning or execution of a task with appropriate assistive devices.</li>
                    </ol>
                </li>
                <br></br>
                <li><b>Hearing Impairment: </b>
                    <ol type="i">
                        <li><b>Deaf</b>- Persons having 70 DB hearing loss in speech frequencies in both ears.</li>
                        <li><b>Hard of hearing</b> - Loss of sixty decibels or more in the better ear in the conversational range of frequencies.</li>
                        <li><b>Speech and Language Disability</b> - A permanent disability arising out of conditions such as laryngectomy (Laryngectomy is the removal of part or all of the larynx (voice box) or aphasia (A language disorder caused by damage in a specific area of the brain that affects a person's ability to communicate) affecting one or more components of speech and language due to organic or neurological causes.</li>
                    </ol>
                </li>
            </ol>

        </div >
    );
}

export default physicalDis; 