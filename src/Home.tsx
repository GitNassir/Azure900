import HighAvailabilityComponent from './components/Cloud/HighAvailabilityComponent';
import Card from './components/Cards';
import CloudConceptService from './components/Cloud/CloudConceptBenefits';
import CloudModels from './components/Cloud/CloudModels';
import CloudServiceSelector from './components/Cloud/CloudServiceSelector';
import './Home.css';
import DesignerImage from './assets/Designer.jpeg';
import AzureRegions from './components/Cloud/AzureRegions';
import PopupQuiz from './components/PopupQuiz';

interface CardData {
    title: string;
    description: string;
    imageUrl: string;
    examples: string;
    advantages: string;
    disadvantages: string;
    providerResponsibility: string;
    consumerResponsibility: string;
  }

  const Home: React.FC = () => {

      const cards: CardData[] = [
        {
            title: 'Software as a Service (SaaS)',
            description: 'Oplev bekvemmeligheden ved SaaS, hvor applikationer leveres over internettet, hvilket eliminerer behovet for installation, vedligeholdelse og køb af hardware. Perfekt til at forbedre samarbejde og tilgængelighed med apps som e-mail, kalender og kontorpakker.',
            imageUrl: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?size=626&ext=jpg',
            examples: 'Tænk på det som at abonnere på Netflix. Du får adgang til et stort bibliotek af film og serier uden at skulle købe eller vedligeholde dem selv.',
            advantages: 'Nem adgang og minimalt teknisk besvær; ingen installation nødvendig.',
            disadvantages: 'Mindre kontrol; afhængighed af leverandørens sikkerhed og politikker.',
            providerResponsibility: 'Fysisk sikkerhed, netværk, servere, applikationskørsel',
            consumerResponsibility: 'Data og brugerkonfiguration af softwaren',
          },
          {
            title: 'Platform as a Service (PaaS)',
            description: 'Udforsk kraften i PaaS, der leverer en komplet udviklings- og udrulningsplatform i skyen. Med PaaS kan udviklere bygge, køre og administrere applikationer uden kompleksiteten ved at opbygge og vedligeholde infrastrukturen typisk forbundet med processen.',
            imageUrl: 'https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?w=826&t=st=1707911560~exp=1707912160~hmac=6cba63440b708d34acc6faec19a64d7cc941aa523efcf633971e64b872e0e030',
            examples: 'Forestil dig at leje et fuldt udstyret værksted til træbearbejdning. Du kan skabe hvad som helst, uden at skulle investere i dyrt udstyr eller vedligeholde værkstedet.',
            advantages: 'Let at udvikle og implementere applikationer; mindre bekymring om infrastruktur.',
            disadvantages: 'Mindre kontrol over underliggende infrastruktur; kan være dyrt ved stor skala.',
            providerResponsibility: 'Fysisk sikkerhed, netværk, servere, operativsystemer',
            consumerResponsibility: 'Applikationer, data',
          },
          {
            title: 'Infrastructure as a Service (IaaS)',
            description: 'Oplev fleksibiliteten ved IaaS, som tilbyder virtualiserede computing-ressourcer over internettet. IaaS giver virksomheder mulighed for at leje servere, netværk, opbevaring og anden infrastruktur på en on-demand basis, hvilket reducerer omkostninger og øger skalerbarheden.',
            imageUrl: 'https://img.freepik.com/free-photo/technologist-with-grey-tablet-his-hands-make-set-up-production-line-while-standing-department-dairy-factory_645730-724.jpg?w=826&t=st=1707911459~exp=1707912059~hmac=5d10e3552a3c80e4532a035723939a3de3be1452ffe0c30fa63de874b8470342',
            examples: 'Forestil dig at leje jord i et drivhus. Du vælger selv, hvilke planter du vil dyrke, og hvordan du vil arrangere dem, men drivhuset tilbyder allerede de nødvendige faciliteter som vand og lys.',
            advantages: 'Høj grad af kontrol og fleksibilitet; skalerbarhed og betal kun for, hvad du bruger.',
            disadvantages: 'Kræver mere teknisk kendskab til at administrere og sikre infrastrukturen.',
            providerResponsibility: 'Fysisk sikkerhed, netværk, servere',
            consumerResponsibility: 'Operativsystemer, applikationer, data',
          },
      ];
      
    return (
      <div>
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                <h1 className="heading-primary">
                Introduktion til Azure fundamentals 900
                </h1>
                <p className="hero-description">
                Udforsk potentialet i cloud-teknologi til at transformere din forretning og optimere dine digitale operationer.
                </p>
                <a href="/quiz" className="btn btn--fill margin-right-btn"
                    >Tage en quiz om Cloud concept
                </a>
                <a href="#" className="btn btn--outline margin-right-btn"
                    >Læs mere om det &darr;
                </a>
                </div>
                <div className="hero-img-box">
                <img
                    src={DesignerImage}
                    alt="Cloud computing"
                    className="hero-img"
                />

                </div>
                <div className="delivered-meals">
                <div className="delivered-imgs">
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg" alt="Customer photo" />
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg" alt="Customer photo" />
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg" alt="Customer photo" />
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg" alt="Customer photo" />
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg" alt="Customer photo" />
                    <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg" alt="Customer photo" />
                </div>
                <p className="delivered-text">
                    <span>1500+</span> azure certifikater opnået!
                </p>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className='container HomeContainer'>
                <div>
                    <h2 className='h2Header'>Grundlæggende om Cloud computing</h2>
                    <p>Cloudcomputing er kort sagt levering af computertjenester – herunder servere, lager, databaser, netværk, software, analyse og intelligens – via internettet ("skyen"), 
                        så du får hurtigere adgang til ny innovation, fleksible ressourcer og stordriftsfordele. Du betaler typisk kun for de cloudtjenester, 
                        du bruger, og du kan dermed reducere dine driftsomkostninger, køre din infrastruktur mere effektivt og skalere i takt med udviklingen i din virksomhed. </p>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className='container'>
                <h2 className='h2Header'>Cloud-løsninger kan indeles i tre hovedkategorier</h2>
                <div className='cardContainer'>
                    {cards.map((card, index) => (
                        <Card 
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        examples={card.examples}
                        advantages={card.advantages}
                        disadvantages={card.disadvantages}
                        providerResponsibility={card.providerResponsibility}
                        consumerResponsibility={card.consumerResponsibility}
                        />
                    ))}
                </div>
            </div>

        </section>

        <section className='section'>
                <h3 className='h2Header'>Passende Anvendelsesområder for Cloudtjenester</h3>
            <div className="useCasesSection">
                {/* SaaS Anvendelsesområder */}
                <div className="service">
                    <h4>Software as a Service (SaaS)</h4>
                    <ul>
                        <li><strong>Små til mellemstore virksomheder:</strong> Omkostningseffektive løsninger til daglige operationer uden store investeringer.</li>
                        <li><strong>Samarbejdsplatforme:</strong> Fremme samarbejde gennem Microsoft 365 eller Google Workspace.</li>
                        <li><strong>Kundeservice og CRM:</strong> Forbedring af kundeservice og relationer med Salesforce.</li>
                        <li><strong>Webbaserede email-tjenester:</strong> Brug af e-mail uden at administrere servere.</li>
                    </ul>
                </div>

                {/* PaaS Anvendelsesområder */}
                <div className="service">
                    <h4>Platform as a Service (PaaS)</h4>
                    <ul>
                        <li><strong>Udviklere og Startups:</strong> Fokus på kodning og app-udvikling uden bekymringer om infrastruktur.</li>
                        <li><strong>Test- og udviklingsmiljøer:</strong> Hurtig opsætning og nedtagning af miljøer for at teste nye ideer.</li>
                        <li><strong>API-udvikling og -forvaltning:</strong> Opbygning og håndtering af APIs i et skalerbart miljø.</li>
                    </ul>
                </div>

                {/* IaaS Anvendelsesområder */}
                <div className="service">
                    <h4>Infrastructure as a Service (IaaS)</h4>
                    <ul>
                        <li><strong>Større virksomheder og organisationer:</strong> Høj grad af kontrol og fleksibilitet med servere, netværk, opbevaring.</li>
                        <li><strong>Hosting af applikationer:</strong> Skalerbar hosting for komplekse applikationer.</li>
                        <li><strong>Big Data-analyse:</strong> Håndtering af store datasæt og komplekse beregninger.</li>
                        <li><strong>Test- og udviklingsprojekter:</strong> Fleksibel og skalerbar infrastruktur for udviklingsprojekter.</li>
                    </ul>
                </div>
            </div>
        </section>
        

        <section className="advantages container">
            <h2>De største fordele ved cloud computing</h2>
            <div className="advantagesGrid">
            <div className="advantage">
                <i className="fas fa-dollar-sign icon"></i>
                <h3>Omkostninger</h3>
                <p>Flytning til cloudmiljøet hjælper virksomheder med at optimere it-omkostninger...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-tachometer-alt icon"></i>
                <h3>Hastighed</h3>
                <p>De fleste cloudcomputingtjenester tilbydes som selvbetjening og efter behov...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-globe icon"></i>
                <h3>Global skalering</h3>
                <p>En af fordelene ved cloudcomputingtjenester er muligheden for elastisk skalering...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-chart-line icon"></i>
                <h3>Produktivitet</h3>
                <p>Lokale datacentre kræver typisk en masse arbejde med konfigurering af hardware...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-server icon"></i>
                <h3>Ydeevne</h3>
                <p>De største cloudcomputingtjenester leveres fra et verdensomspændende netværk af sikre datacentre...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-sync-alt icon"></i>
                <h3>Pålidelighed</h3>
                <p>Cloudcomputing gør sikkerhedskopiering af data, it-katastrofeberedskab og driften af virksomheden lettere...</p>
            </div>
            <div className="advantage">
                <i className="fas fa-lock icon"></i>
                <h3>Sikkerhed</h3>
                <p>Mange cloududbydere tilbyder et bredt sæt politikker, teknologier og kontroller...</p>
            </div>
            </div>
        </section>

        <section className='section'>
            <HighAvailabilityComponent />
            <div className='popupContainer'>
            <PopupQuiz topic="cloudComputing" />
            </div>
        </section>
        <section>
            <CloudConceptService />
        </section>
        <section>
            <CloudModels />
        </section>
        
        <section>
        <h1 className='h1Header'>Azure Regions & Architectural Components</h1>
            <AzureRegions />
        </section>

        <section className='section'>
            <CloudServiceSelector />
        </section>
      </div>
    );
  };
  
  export default Home;
  