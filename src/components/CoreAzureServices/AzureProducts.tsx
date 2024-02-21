import { useState } from "react";
import './AzureProducts.css';

interface ProductItem {
    name: string;
    description: string;
  }
  
  interface ProductsData {
    [category: string]: ProductItem[];
  }
  
  
  
  const productsData: ProductsData = {
    Compute: [
      {
        name: "Virtual Machines",
        description: "Giver dig mulighed for at deployere virtuelle servere som virtuelle maskiner (VM'er) på Azure.",
      },
      {
        name: "Virtual Machine Scale Sets",
        description: "Lader dig skalere antallet af VM'er op eller ned automatisk for at imødekomme applikationskrav.",
      },
      {
        name: "App Services",
        description: "Tilbyder en platform til at bygge, deployere og skalere webapplikationer og API'er.",
      },
      {
        name: "Azure Container Instances (ACI)",
        description: "Giver mulighed for at køre Docker-containere på Azure uden at skulle administrere servere eller klynger.",
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        description: "Forenkler driften af Kubernetes ved automatisk opdatering og vedligeholdelse.",
      }
    ],
    Networking: [
      {
        name: "Virtual Network",
        description: "Tilbyder isolerede og sikkert netværk i skyen til at forbinde dine tjenester og applikationer.",
      },
      {
        name: "Load Balancer",
        description: "Distribuerer indgående netværkstrafik på tværs af flere belastningstunge VM'er for at sikre ingen enkelt server overbelastes.",
      },
      {
        name: "VPN Gateway",
        description: "Tilbyder sikre forbindelser mellem Azure virtuelle netværk og on-premises netværk over internettet.",
      },
      {
        name: "Application Gateway",
        description: "Webtrafik load balancer, der giver sikkerhed, SSL-offload og andre vigtige funktioner.",
      },
      {
        name: "Content Delivery Network",
        description: "En global CDN-løsning for hurtig levering af høj båndbreddeindhold.",
      }
    ],
    Storage: [
      {
        name: "Blob Storage",
        description: "Optimeret til lagring af massive mængder af ustrukturerede data, som tekst eller binære data.",
      },
      {
        name: "Disk Storage",
        description: "Tilbyder højtydende, holdbare bloklagringsdiske til Azure Virtual Machines.",
      },
      {
        name: "File Storage",
        description: "Tilbyder administreret filshares for clouden eller on-premises deploymenter.",
      },
      {
        name: "Archive Storage",
        description: "En omkostningseffektiv Azure-lagringsløsning til langvarig dataopbevaring.",
      }
    ],
    Databases: [
      {
        name: "Cosmos DB",
        description: "En globalt distribueret databaseservice til at skalere og administrere applikationer mere nemt.",
      },
      {
        name: "Azure SQL Database",
        description: "En fuldt administreret relational database med autoskalering, integreret intelligens og sikkerhed.",
      },
      {
        name: "Azure Database for MySQL",
        description: "Administreret MySQL-databaseservice for appudviklere.",
      },
      {
        name: "Azure Database for PostgreSQL",
        description: "Administreret PostgreSQL-databaseservice for appudviklere.",
      },
      {
        name: "Azure Database Migration service",
        description: "Forenkler processen for database migration til Azure.",
      }
    ],
    AzureMarketplace: [
      {
        name: "Azure Marketplace",
        description: "En onlinebutik for tusindvis af IT-software- og serviceløsninger bygget af uafhængige softwareudviklere.",
      }
    ]
  };

const AzureProducts = () => {
    const [activeTab, setActiveTab] = useState<string>('Compute');

      const handleTabClick = (category: string) => {
        setActiveTab(category);
      };
  
      return (
        <div className="products-container">
          <div className="tabs">
            {Object.keys(productsData).map((category) => (
                <button key={category} className={activeTab === category ? 'active' : 'btnButton'} onClick={() => handleTabClick(category)}>
                {category}
                </button>
            ))}
            </div>
            <div className="cards">
            {productsData[activeTab]?.map((item, index) => (
                <div key={index} className="product-card">
                <h3 className="product-title">{item.name}</h3>
                <p className="product-description">{item.description}</p>
                </div>
            ))}
            </div>

        </div>
      );
    };
  
  export default AzureProducts;