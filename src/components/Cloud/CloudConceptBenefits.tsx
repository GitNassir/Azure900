import './CloudConceptBenefits.css';
import TermDetail from './TermDetail';

const CloudConceptBenefits = () => {
  return (
    <div className="cloudConcepts">
      <section className="benefits">
        <div className="contentText">
        <h2>Vigtige Termer du skal vide om Cloud Concept</h2>
          <p>Cloud-tjenester tilbyder virksomheder og udviklere en række fordele, herunder omkostningseffektivitet, fleksibilitet, og skalerbarhed. Ved at anvende cloud-tjenester kan organisationer fokusere på innovation frem for infrastruktur.</p>
        </div>
      </section>

      <section className="keyTerms">
        <div className="termsContainer">
          <TermDetail
            term="High Availability"
            definition="I Azure sikrer høj tilgængelighed, at dine tjenester forbliver operationelle og tilgængelige, selv ved systemfejl eller infrastrukturproblemer. Dette opnås gennem redundante og fejltolerante systemer placeret i forskellige datacentre."
          />
          <TermDetail
            term="Scalability"
            definition="Skalerbarhed i Azure refererer til evnen til nemt at øge eller mindske dine ressourcer og tjenesters kapacitet baseret på efterspørgslen, uden at påvirke performance eller tilgængelighed. Dette kan være vertikal (opgradere ressourcer) eller horisontal (tilføje flere instanser)."
          />
          <TermDetail
            term="Elasticity"
            definition="Elasticitet beskriver systemets evne til automatisk at tilpasse og skalere ressourcer for at matche arbejdsbyrdens krav i realtid, hvilket sikrer effektiv ressourceudnyttelse og optimering af omkostninger i Azure."
          />
          <TermDetail
            term="Agility"
            definition="Agilitet med Azure omhandler hurtigheden og fleksibiliteten i at udvikle, teste og udrulle applikationer. Cloud-tjenester reducerer tiden fra idé til implementering, hvilket giver virksomheder mulighed for hurtigt at reagere på markedsændringer."
          />
          <TermDetail
            term="Fault Tolerance"
            definition="Fejltolerance i Azure betyder systemets evne til at fortsætte med at fungere korrekt, selv hvis en eller flere af dets komponenter fejler. Dette opnås gennem redundans og korrekt designet fejlhåndtering."
          />
          <TermDetail
            term="Disaster Recovery"
            definition="Katastrofegenskabelse i Azure indebærer strategier og løsninger til hurtig genopretning af systemer og data efter en katastrofe. Dette sikrer minimal driftsafbrydelse og data tab ved at bruge geografisk distribuerede datacentre og backup-løsninger."
          />
        </div>
      </section>

      <section className="economiesOfScale">
          <TermDetail
            term="Økonomier ved Skala"
            definition="Cloud-tjenester som Azure udnytter økonomier ved skala ved at aggregere computingressourcer og tilbyde dem til mange kunder. Dette sænker omkostningerne per bruger, da infrastrukturens samlede omkostninger deles over et større antal brugere. For eksempel kan Azure opnå mere effektive priser på hardware, software og netværksinfrastruktur, hvilket reducerer omkostningerne for individuelle brugere."
          />

          <TermDetail
            term="CapEx vs. OpEx"
            definition="I Azure kan virksomheder flytte deres udgifter fra Capital Expenditure (CapEx), som er store forudgående investeringer i datacenter og hardware, til Operational Expenditure (OpEx), som er løbende udgifter baseret på forbrug. Dette skifte tillader virksomheder at betale for kun de ressourcer, de bruger, hvilket kan justeres op og ned efter behov, og forbedrer virksomhedens likviditet ved at undgå store engangsinvesteringer."
          />

          <TermDetail
            term="Forbrugsbaseret Model"
            definition="Azure's forbrugsbaserede model tillader kunder at betale per brug, hvilket betyder, at du kun betaler for de computingressourcer, du faktisk forbruger. Dette gør det muligt for virksomheder at skalere deres tjenester op og ned baseret på aktuelle behov uden at forpligte sig til overdrevne udgifter, hvilket fører til betydelige omkostningsbesparelser og øget økonomisk fleksibilitet."
          />
        </section>
    </div>
  );
};

export default CloudConceptBenefits;
