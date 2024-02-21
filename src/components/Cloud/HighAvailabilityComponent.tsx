import './HighAvailabilityComponent.css'; // Sørg for at oprette og tilpasse denne CSS-fil

const HighAvailabilityComponent = () => {
    return (
        <div className="highAvailability">
            <h2>Fordele ved High Availability og Scalability i Skyen</h2>
            
            {/* High Availability */}
            <div className="section">
                <h3><i className="fas fa-cloud"></i> High Availability</h3>
                <p>
                    High Availability sikrer, at dine applikationer og tjenester er tilgængelige, når de behøves,
                    uanset forstyrrelser eller hændelser. Azure tilbyder et højt tilgængeligt cloud-miljø med
                    oppetidsgarantier som en del af serviceaftalerne (SLAs).
                </p>
            </div>
            
            {/* Scalability */}
            <div className="section">
                <h3><i className="fas fa-expand-arrows-alt"></i> Scalability</h3>
                <p>
                    Scalability i skyen refererer til evnen til at justere ressourcer for at møde efterspørgsel.
                    Dette betyder, at du kan skrue op for ressourcerne under spidsbelastninger for bedre at håndtere
                    øget trafik, og skrue ned igen, når behovet falder, hvilket optimerer omkostningerne.
                </p>
                <div className="scaling">
                    <div className="verticalScaling">
                        <h4>Vertikal Skalering</h4>
                        <p>Øg eller mindsk kapaciteten af ressourcer, som f.eks. CPU eller RAM.</p>
                    </div>
                    <div className="horizontalScaling">
                        <h4>Horisontal Skalering</h4>
                        <p>Tilføj eller fjern ressourcer, som f.eks. virtuelle maskiner eller containere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighAvailabilityComponent;
 