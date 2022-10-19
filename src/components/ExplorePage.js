import React from "react";
import Markdown from "markdown-to-jsx";

function ExplorePage() {
  const str = `
  Fire Experts (Services) is a well renowned name as Supplier and Installation Service provider (Installer) of Fire Fighting Equipment such as Hydrant System, Sprinkler System, Alarm and detection System and CCTV Camera installation. Apart from this we provide the services like Consultation, providing liasoning, providing Training and Mock-drills.
  
  We have been in this industry since long since 2007 providing indirect services to our clients but after the establishment of Fire Experts (Services) in early 2011, we are growing with the consistent speed in this market. Now the name is enough to explain our vision and reason for being in this industry.
  
  Fire experts, is the only choice standing at the door step with all solutions. Within a short span of time fire experts reached at a position to tackle with big projects and works. Now, market is considering it as one of the leading companies providing all types of services in fire and safety domain.
  
  This growth has been achieved through a combination of simple business vision, right focus on goals, innovations and complete customer satisfaction. We know the need of customer and design accordingly to satisfy them and make them tension free from fire and safety of their valuables and their customers.
  
  Today, fire experts offer you a comprehensive, incorporated set of services and solutions designed to serve your every requirement.
  
  ## Our Strengths:
  
  We are greatly supported by talented and dedicated professionals. Then there are prominent vendors and manufacturers, who constantly provide us with the best quality products exactly as we specify to them according to norms. Besides, we have excellent manpower without them we couldn’t be in this position they are technically equipped and potential to cop with any target. Even we are having excellent storage, testing and packaging facilities.
  
  ## Industries we serve in:
  
  We undertake various government as well as private projects. Some of the industrial segments where we provide our products and services are:
  - Industrial sector (Mfg. & processing units)
  - High rise Construction sites
  - Hotels / Malls
  - Medical organizations
  - Educational Organizations
  
  ## Our Core-work
  
  - Basic Consultation Services
  - Fire Hydrant system
  - Fire Alarm and detection (Smoke, Gas and Heat detection)
  - Fire Sprinkler system / Foam / CO2 flooding and suppression systems
  - Access Control
  - Video Surveillance
  - Intrusion Alarm
  - Building Management System
  - Consumer Safety & Security
  - Training and Mock drill
  - Fire & Safety / Fire and Safety Audit
  `;
  return (
    <>
      <head>
        <title>Explore - Fire Experts</title>
      </head>
      <section className="container mx-auto">
        <h1 className="text-4xl mb-10 font-semibold text-center">
          Explore - Fire Experts
        </h1>
        <div className="prose mx-auto">
          <Markdown options={{ wrapper: "article" }}>{str}</Markdown>
        </div>
      </section>
    </>
  );
}

export default ExplorePage;
