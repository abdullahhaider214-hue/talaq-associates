import { Helmet } from "react-helmet-async";

import ProjectGallery from "../Components/Work/ProjectGallery";

function Projects() {
  return (

    <>
  <Helmet>

    <title>
      Our Projects | Talaq Associates
    </title>

    <meta
      name="description"
      content="Explore Talaq Associates' completed construction projects, CLC block applications, lightweight concrete solutions, and building construction work across Pakistan."
    />

    <meta
      name="keywords"
      content="Construction Projects Pakistan, CLC Projects, Lightweight Concrete Projects, Building Construction, Talaq Associates"
    />

    <meta
      property="og:title"
      content="Our Construction Projects | Talaq Associates"
    />

    <meta
      property="og:description"
      content="View our portfolio of completed construction projects, lightweight concrete applications, and CLC solutions."
    />

  </Helmet>

  <main>

    <ProjectGallery />

  </main>

</>
  );
}

export default Projects;