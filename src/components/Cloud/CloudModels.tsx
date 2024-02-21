import './CloudModels.css'; // Husk at oprette denne CSS-fil

const CloudModels = () => {
  return (
    <div className="cloudModels">
      <h2>Cloud Models Explained</h2>
      
      <div className="cloudModels">
          <div className="cloudCard">
            <h3>Private Cloud</h3>
            <p>En private cloud tilbyder dedikeret cloud-infrastruktur til en enkelt organisation. Den tilbyder større kontrol og sikkerhed.</p>
            <h4>Fordele</h4>
            <ul>
              <li>Komplet kontrol over ressourcer og sikkerhed</li>
              <li>Data er ikke colokaliseret med andre organisationers data</li>
            </ul>
            <h4>Ulemper</h4>
            <ul>
              <li>Højere omkostninger</li>
              <li>Organisationen er ansvarlig for vedligeholdelse og opdateringer</li>
            </ul>
            <p><strong>Bedst til:</strong> Organisationer med strenge krav til sikkerhed og compliance.</p>
          </div>

          <div className="cloudCard">
            <h3>Public Cloud</h3>
            <p>En public cloud drives, kontrolleres og vedligeholdes af en tredjepartsudbyder, der tilbyder ressourcer til offentligheden.</p>
            <h4>Fordele</h4>
            <ul>
              <li>Ingen kapitaludgifter for at skalere op</li>
              <li>Hurtig provisionering og deprovisionering af applikationer</li>
            </ul>
            <h4>Ulemper</h4>
            <ul>
              <li>Begrænset kontrol over ressourcer og sikkerhed</li>
              <li>Data kan være colokaliseret med andre organisationers data</li>
            </ul>
            <p><strong>Bedst til:</strong> Hurtig skalering, startups, og applikationer med varierende belastning.</p>
          </div>

          <div className="cloudCard">
            <h3>Hybrid Cloud</h3>
            <p>En hybrid cloud kombinerer public og private clouds, hvilket tillader data og applikationer at deles mellem dem.</p>
            <h4>Fordele</h4>
            <ul>
              <li>Den mest fleksible model, der kombinerer det bedste fra begge verdener</li>
              <li>Yderligere lag af sikkerhed ved at vælge, hvor applikationer kører</li>
            </ul>
            <h4>Ulemper</h4>
            <ul>
              <li>Kan være kompleks at implementere og administrere</li>
              <li>Kræver omhyggelig planlægning for at opnå interoperabilitet</li>
            </ul>
            <p><strong>Bedst til:</strong> Organisationer, der kræver fleksibilitet, sikkerhed og kontrol over nogle data, samtidig med at de nyder godt af offentlig clouds skalerbarhed.</p>
          </div>
        </div>


        <div className="modelComparison">
          <h3>Sammenligning af Cloud Modeller</h3>
          <p>Dette overblik hjælper med at forstå nøgleforskellene mellem offentlig, privat og hybrid cloud i forhold til kapitaludgifter, kontrol og sikkerhed samt skalering og fleksibilitet.</p>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Aspekt</th>
                  <th>Offentlig Cloud</th>
                  <th>Privat Cloud</th>
                  <th>Hybrid Cloud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kapitaludgifter</td>
                  <td>Ingen</td>
                  <td>Kræves for opstart og vedligeholdelse</td>
                  <td>Optimeret baseret på brug</td>
                </tr>
                <tr>
                  <td>Kontrol og Sikkerhed</td>
                  <td>Mindre kontrol</td>
                  <td>Fuld kontrol</td>
                  <td>Valgfri kontrol baseret på behov</td>
                </tr>
                <tr>
                  <td>Skalering og Fleksibilitet</td>
                  <td>Høj</td>
                  <td>Moderat til lav</td>
                  <td>Høj, med mulighed for at vælge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    </div>
  );
};

export default CloudModels;
