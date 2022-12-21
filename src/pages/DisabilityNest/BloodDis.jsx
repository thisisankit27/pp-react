import DisabilityButton from "./DisabilityButton";

const BloodDis = () => {
    return (
        <div className='m-4'>
            <div className='text-center'>
                <DisabilityButton />
            </div>
            <h2>Blood Disability</h2>
            <br></br>
            <ol type="a">
                <li><b><i>Haemophilia</i></b> - An inheritable disease, usually affecting only male but transmitted by women to their male children, characterised by loss or impairment of the normal clotting ability of blood so that a minor wound may result in fatal bleeding.</li>
                <br></br>
                <li><b><i>Thalassemia</i></b> - An inherited blood disorder characterised by less oxygen-carrying protein (haemoglobin) and fewer red blood cells in the body than normal. Symptoms include fatigue, weakness, paleness and slow growth.</li>
                <br></br>
                <li><b><i>Sickle cell disease</i></b> - A hemolytic disorder characterised by chronic anaemia, periodic episodes of extreme pain that seems to come out of nowhere, and various complications due to associated tissue and organ damage; “hemolytic” refers to the destruction of the cell membrane of red blood cells resulting in the release of haemoglobin from within the red blood cells into the blood plasma.</li>
            </ol>
        </div >
    );
}

export default BloodDis;