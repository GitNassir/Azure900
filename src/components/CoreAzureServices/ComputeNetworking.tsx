import './ComputeNetworking.css'; // Denne CSS-fil antages at indeholde styling for det følgende layout
import AzureProducts from './AzureProducts';
import HostingOptions from '../HostingOptions';
import AzureServicesQuiz from './AzureServicesQuiz';
import QA from './QA';

const images = {
  azureVirtualDesktop: 'https://img.freepik.com/free-photo/laptops-transfer-downloading-data-cloud-computing-network-technology-infrastructure-data-diagram-icon-symbol-3d-rendering_56104-1279.jpg?w=1800&t=st=1707490278~exp=1707490878~hmac=3bbe2a1125a06395512cb8ee4aa3e83d0642a23e26d490ffab4efd0129fcd238',
  containersConcept: 'https://images.unsplash.com/photo-1667372459534-848ec00d4da7?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  vmVsContainers: 'https://img.freepik.com/free-vector/data-center-upgrading-computer-system-slot-memory-card-open-close-box_39422-659.jpg?w=1800&t=st=1707486442~exp=1707487042~hmac=cd1f5841d8c56258c0fefdea9704bae22fd8b748fe8be0da28d10e0924e6d62e',
  azureContainerInstances: 'https://img.freepik.com/free-vector/data-science-concept-digital-information-processing-server-room-cloud-storage_39422-557.jpg?w=1800&t=st=1707488577~exp=1707489177~hmac=89ab4924d50fe6126900e236219f3a44e9c4d0a05d3cbcfdd2d68d73781255f6',
  azureContainerApps: 'https://img.freepik.com/free-vector/data-network-illustration_24908-57783.jpg?w=1380&t=st=1707488462~exp=1707489062~hmac=3c73c5b86caa22083b736903a6dfda94c2f7e4233f6383f357011a38f33e204a',
  azureKubernetesService: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
};

function ComputeNetworking() {
  return (
    <div className="computeNetworkingContainer">
        <h1>Læringsmodul: Azure Virtual Machines og Containere</h1>

        {/* Introduktion til Azure Virtual Desktop */}
        <section className="section">
            <div className="content">
                <div className='textContent'>
                    <h2>Introduktion til Azure Virtual Desktop</h2>
                    <p>Azure Virtual Desktop (AVD) bringer din desktop og applikationer ind i skyen, hvilket giver dig sikkerhed og fleksibilitet. Forestil dig:</p>
                    <ul>
                        <li><strong>Ubegrænset adgang:</strong> Arbejd fra hvor som helst, på enhver enhed.</li>
                        <li><strong>Skalerbarhed:</strong> Tilpas nemt ressourcer efter behov.</li>
                        <li><strong>Sikkerhed:</strong> Hold dine data sikre med Microsofts sikkerhedsinfrastruktur.</li>
                    </ul>
                </div>
                <img src={images.azureVirtualDesktop} alt="Cloud Computing Concept" className="sectionImage"/>
            </div>
        </section>

        {/* Hvad er Containere? */}
        <section className="section">
            <div className="content reverse">
                <div className='textContent'>
                    <h2>Hvad er Containere?</h2>
                    <p>Containere er som flytbare 'boliger' for dine applikationer:</p>
                    <ul>
                        <li><strong>Ensartet miljø:</strong> Kører ens på tværs af forskellige miljøer.</li>
                        <li><strong>Letvægt:</strong> Bruger færre ressourcer end VM'er, starter hurtigere.</li>
                        <li><strong>Isolation:</strong> Holder applikationer separate og sikre.</li>
                    </ul>
                </div>
                <img src={images.containersConcept} alt="Containers Concept" className="sectionImage"/>
            </div>
        </section>

        {/* Sammenligning af Virtuelle Maskiner og Containere */}
        <section className="section">
            <div className="content">
                <div className='textContent'>
                    <h2>Sammenligning af Virtuelle Maskiner og Containere</h2>
                    <ul>
                        <li><strong>Virtuelle Maskiner:</strong> Simulerer en hel computer inklusive operativsystemet. Ideel til at køre flere applikationer på servere.</li>
                        <li><strong>Containere:</strong> Simulerer kun applikationslaget. Hurtigere og mere effektive for enkelte applikationer.</li>
                    </ul>
                </div>
                <img src={images.vmVsContainers} alt="VMs vs Containers" className="sectionImage"/>
            </div>
        </section>

        {/* Azure Container Tjenester */}
        <section className="servicesSection">
            <h2 className='h2Header'>Azure Container Tjenester</h2>
            <div className="cardsContainer">
                <div className="serviceCard">
                    <img src={images.azureContainerInstances} alt="Azure Container Instances" className="cardImage"/>
                    <div className="cardContent">
                        <h3>Azure Container Instances (ACI)</h3>
                        <p>Kør dine containere i skyen, hurtigt og uden at skulle administrere servere. Perfekt til små projekter og simple applikationer.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <img src={images.azureContainerApps} alt="Azure Container Apps" className="cardImage"/>
                    <div className="cardContent">
                        <h3>Azure Container Apps</h3>
                        <p>Designet til at køre mikroservice-arkitekturer og event-drevne applikationer med automatisk skalering og integreret sikkerhed.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <img src={images.azureKubernetesService} alt="Azure Kubernetes Service" className="cardImage"/>
                    <div className="cardContent">
                        <h3>Azure Kubernetes Service (AKS)</h3>
                        <p>Administrer containeriserede applikationer med kompleksitet og skala. AKS forenkler Kubernetes-udrulning og -operationer.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <AzureProducts />
        </section>

        <section>
        <HostingOptions />
        </section>

        <section className='section'>
            <AzureServicesQuiz />
        </section>

        <section>
            <QA />
        </section>
    </div>
  )
}

export default ComputeNetworking;
