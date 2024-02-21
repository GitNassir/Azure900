import './AzureRegions.css'; // Sørg for at oprette denne CSS-fil for at style komponenten

export default function AzureRegions() {
  return (
    <div className="azureRegions">      
      {/* Data Centers */}
      <div className="sectionRegions">
        <img />
        <h2>Data Centers</h2>
        <p>
          Azure Data Centers er fysiske infrastrukturer placeret globalt, som huser servere og netværksudstyr. De udgør rygraden i Azure's cloud-tjenester, 
          sikrer dataopbevaring, -behandling og -tilgængelighed med høj sikkerhed og pålidelighed. Data Centers understøtter en bred vifte af applikationer 
          fra simple websteder til komplekse AI-beregninger, alt imens de overholder lokale datalagringslove og -regler.
        </p>
      </div>
      
      {/* Regions and Region Pairs */}
      <div className="sectionRegions">
        <h2>Regions and Region Pairs</h2>
        <p>
          Azure Regions er geografiske områder, der indeholder et eller flere datacenters, som er netværksisoleret fra hinanden. Region Pairs består af to regioner 
          inden for samme geografi, forbundet via et lav-latens-netværk, hvilket sikrer redundans og beskyttelse mod naturkatastrofer. De understøtter disaster recovery 
          gennem geografisk redundant opbevaring og giver kunderne fleksibilitet til at distribuere applikationer tæt på slutbrugere for at minimere latenstid.
        </p>
      </div>
      
      {/* Geographies */}
      <div className="sectionRegions">
        <h2>Geographies</h2>
        <p>
          Azure Geographies refererer til en defineret område, der respekterer specifikke datalagrings- og compliancekrav. Disse omfatter flere regioner og hjælper 
          organisationer med at opfylde deres krav til datalagringsplacering og juridiske compliance, ved at holde data og applikationer så tæt på brugernes fysiske 
          placering som muligt.
        </p>
      </div>
      
      {/* Availability Zones */}
      <div className="sectionRegions">
        <h2>Availability Zones</h2>
        <p>
          Availability Zones er unikt fysiske placeringer inden for en Azure-region. Hver zone er et isoleret datacenter med sin egen strøm, køling og netværk, 
          designet til at være uafhængig, så en fejl i en zone ikke påvirker de andre. De tilbyder høj tilgængelighed og fejltolerance ved at tillade applikationer 
          at køre parallelt i flere zoner.
        </p>
      </div>
      
      {/* Core Azure Architectural Components */}
      <div className="sectionRegions">
        <h2>Benefits and Usage of Core Azure Architectural Components</h2>
        <p>
          Azure's arkitektoniske komponenter, herunder Regions, Region Pairs, og Availability Zones, tilbyder væsentlige fordele såsom global rækkevidde med lokal 
          tilstedeværelse, omfattende disaster recovery og business continuity planlægning, samt høj tilgængelighed og fejltolerance. Disse komponenter muliggør 
          skalerbar, sikker og effektiv drift af applikationer og services, der understøtter virksomheders digitale transformation og vækst.
        </p>
      </div>
    </div>
  );
}
