import DisabilityButton from "./DisabilityButton";

const NeurologicalDis = () => {
    return (
        <div className='m-4'>
            <div className='text-center'>
                <DisabilityButton />
            </div>
            <h2>Neurological Disability</h2>
            <br></br>
            <ol type="a">
                <li><b><i>Multiple sclerosis</i></b> - A disease in which the immune system eats away the protective covering of nerves leading to damage to the protective covering (myelin sheath) that surrounds nerve fibres in the brain and affecting the ability of nerve cells in the brain and spinal cord to communicate with each other.</li>
                <br></br>
                <li><b><i>Parkinson's disease</i></b> - A long term disorder  of the nervous system marked by tremor, muscular rigidity and slow imprecise movement, chiefly affecting middle-aged and elderly people. Its symptoms are associated with degeneration of the nerve cells in deep parts of the brain called the basal ganglia of the brain and low or falling levels of dopamine, a neurotransmitter.</li>
            </ol>
        </div >
    );
}

export default NeurologicalDis;