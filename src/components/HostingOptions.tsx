import './HostingOptions.css'; // Stilark for hosting options layout

const images = {
  azureAppService: 'https://img.freepik.com/free-vector/using-virtual-cloud_1172-31.jpg?w=1380&t=st=1707490363~exp=1707490963~hmac=062650b3527436ecbf98f079ca8d6504115a1b22dd855fac9dd4ea0a623e1e6d',
  webApps: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051191.jpg?w=1800&t=st=1707490060~exp=1707490660~hmac=d2ad2f9b11e8db8d6004be810f1912aca64ad97e91d701a9c33842e764c6083d',
  apiApps: 'https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392285.jpg?size=626&ext=jpg',
  webJobs: 'https://img.freepik.com/free-vector/flat-design-ui-ux-background-illustrated_23-2149054879.jpg?w=1800&t=st=1707490163~exp=1707490763~hmac=e87e07b902000292cdcf27b16ea9ccf046e114340fea13ad428afc6192c6ab57',
  mobileApps: 'https://img.freepik.com/free-vector/smartphone-flat-design_23-2147505584.jpg?w=1380&t=st=1707490187~exp=1707490787~hmac=66387ead40bac22e69adea656393c02d6d0308756858d5c05c15a96d7f9653a2',
};

function HostingOptions() {
  return (
    <div className="hostingOptionsContainer">
      <h2 className='h2Header'>Azure Hosting Muligheder</h2>

      {/* Azure App Service */}
      <section className="sectionContainer">
        <div className="content">
          <div className='textContent'>
            <h2>Azure App Service</h2>
            <p>Azure App Service er en HTTP-baseret tjeneste til hosting af webapplikationer, REST-API'er og mobile backends. Det understøtter flere programmeringssprog og både Windows og Linux miljøer, hvilket giver dig mulighed for at:</p>
            <ul>
              <li>Bygge og hoste webapps, baggrundsjob, mobile back-ends og RESTful API'er i det programmeringssprog, du foretrækker.</li>
              <li>Nyd automatisk skalering og høj tilgængelighed.</li>
              <li>Implementer automatisk fra GitHub, Azure DevOps eller ethvert Git-repo for at understøtte en kontinuerlig udrulningsmodel.</li>
            </ul>
          </div>
          <img src={images.azureAppService} alt="Azure App Service" className="sectionImage"/>
        </div>
      </section>

      {/* App Service Typer */}
        <h2>Typer af App Services</h2>
        <p className="summary">
        Med Azure App Service får du en kraftfuld, fleksibel og skalerbar hostingløsning, der lader dig fokusere på at bygge og vedligeholde din app, mens Azure håndterer driften.
      </p>
      <div className="appServiceTypes">
        {/* Web Apps */}
        <section className="serviceCard">
          <img src={images.webApps} alt="Web Apps" className="cardImage"/>
          <div className="cardContent">
            <h3>Web Apps</h3>
            <p>Host fuld understøttede webapps med ASP.NET, Java, Ruby, Node.js, PHP eller Python på enten Windows eller Linux.</p>
          </div>
        </section>

        {/* API Apps */}
        <section className="serviceCard">
          <img src={images.apiApps} alt="API Apps" className="cardImage"/>
          <div className="cardContent">
            <h3>API Apps</h3>
            <p>Byg REST-baserede web-API'er med fuld Swagger-understøttelse og mulighed for at pakke og publicere din API i Azure Marketplace.</p>
          </div>
        </section>

        {/* WebJobs */}
        <section className="serviceCard">
          <img src={images.webJobs} alt="WebJobs" className="cardImage"/>
          <div className="cardContent">
            <h3>WebJobs</h3>
            <p>Kør programmer eller scripts i samme kontekst som en webapp, API app eller mobil app, enten planlagt eller udløst.</p>
          </div>
        </section>

        {/* Mobile Apps */}
        <section className="serviceCard">
          <img src={images.mobileApps} alt="Mobile Apps" className="cardImage"/>
          <div className="cardContent">
            <h3>Mobile Apps</h3>
            <p>Byg hurtigt en backend til iOS og Android apps med cloud-baseret SQL-database, autentifikation og push-notifikationer.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HostingOptions;
