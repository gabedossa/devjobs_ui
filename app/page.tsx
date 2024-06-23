import Image from "next/image";

export default function Home() {
  return (
    <main className="main-wrapper">
      <div className="header-section">
        logo | switch
      </div>
      <div className="filter-input-section">
        input | filter | search button com icone
      </div>
      <div className="job-listings-section">
        <div className="job-listing-card">
          <div className="card-header">
            Logo da empresa
          </div>
          <div className="card-body">
            idade da postagem | tipo de contrato
            Titulo da vaga
            Nome da empresa
          </div>
          <div className="card-footer">
            País da empresa
          </div>
        </div>
      </div>
      <div className="load-more-section">
        <div className="load-more-button">
          button
        </div>
      </div>
    </main>
  );
}
